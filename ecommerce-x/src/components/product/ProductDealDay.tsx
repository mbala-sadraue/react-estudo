const ProductDealDay = ({ icon: Icon, label: label }: { icon: React.ElementType, label: string }) => {
    return (
        <div className="text-sm flex justify-between items-center border-b border-gray-300 pb-3 my-4">
            <div > <Icon className="text-2xl text-gray-400" /></div>
            <div>
                <h4 className="text-xs">{label}</h4>
                <p className="text-black font-semibold mt-1">$399.00</p>
            </div>
            <div className="w-15 h-15 rounded-lg bg-gray-300">

            </div>
        </div>
    );
};

export default ProductDealDay;
