import { getProductById } from "@/lib/api";
import { ArrowLeft, Edit, Link, Package, Star, Tag, Trash2, TrendingUp } from "lucide-react";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const param = await Promise.resolve(params);
    const product = await getProductById(parseInt(param.id));
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <Link
                    href="/dashboard/products"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Products
                </Link>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        <Edit className="w-4 h-4" />
                        Edit
                    </button>
                    <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Delete
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Images Gallery */}
                <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                        <img
                            src={product.images[0] || product.thumbnail}
                            alt={product.title}
                            className="w-full h-96 object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.slice(0, 4).map((img, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500">
                                <img
                                    src={img}
                                    alt={`${product.title} ${idx + 1}`}
                                    className="w-full h-20 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="bg-white rounded-lg shadow p-6 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {product.title}
                        </h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <span className="font-semibold">{product.rating}</span>
                                <span className="text-gray-500 text-sm">(245 reviews)</span>
                            </div>
                            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                {product.category}
                            </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="border-t border-b py-4">
                        <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-bold text-gray-900">
                                ${product.price}
                            </span>
                            {product.discountPercentage > 0 && (
                                <>
                                    <span className="text-xl text-gray-400 line-through">
                                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                    </span>
                                    <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                                        -{product.discountPercentage.toFixed(0)}% OFF
                                    </span>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <InfoCard
                            icon={<Package className="w-5 h-5" />}
                            label="Stock"
                            value={product.stock.toString()}
                            valueColor={product.stock > 50 ? 'text-green-600' : 'text-red-600'}
                        />
                        <InfoCard
                            icon={<Tag className="w-5 h-5" />}
                            label="Brand"
                            value={product.brand}
                        />
                        <InfoCard
                            icon={<TrendingUp className="w-5 h-5" />}
                            label="Discount"
                            value={`${product.discountPercentage}%`}
                        />
                        <InfoCard
                            icon={<Star className="w-5 h-5" />}
                            label="Rating"
                            value={product.rating.toString()}
                        />
                    </div>

                    {/* Additional Info */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <h3 className="font-semibold text-gray-900">Additional Information</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="text-gray-500">SKU:</span>
                                <span className="ml-2 font-medium">#{product.id}</span>
                            </div>
                            <div>
                                <span className="text-gray-500">Availability:</span>
                                <span className={`ml-2 font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// Info Card Component
function InfoCard({
    icon,
    label,
    value,
    valueColor = 'text-gray-900'
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    valueColor?: string;
}) {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
                {icon}
                <span className="text-sm">{label}</span>
            </div>
            <p className={`text-xl font-bold ${valueColor}`}>{value}</p>
        </div>
    );
}
// export default ProductPage;