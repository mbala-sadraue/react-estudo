import { FileText, LayoutDashboard, LogOut, Package, Users } from "lucide-react";

export default function DashboardAdminPage({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <div className="min-h-screen bg-gray-50">

                <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 ">
                    {/* Logo */}
                    <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-400">
                        <LayoutDashboard className="w-8 h-8 text-blue-600" />
                        <span className="font-bold text-xl">Admin Dashboard</span>
                    </div>
                    <nav className="p-4">
                        <NavLink href="/dashboard" icon={<LayoutDashboard className="w-4 h-4" />}  >Dashboard</NavLink>
                        <NavLink href="/dashboard/products" icon={<Package className="w-4 h-4" />}  >Products</NavLink>
                        <NavLink href="/dashboard/users" icon={<Users className="w-4 h-4" />}  >Users</NavLink>
                        <NavLink href="/dashboard/posts" icon={<FileText className="w-4 h-4" />}  >Posts</NavLink>
                    </nav>


                  
            

            </aside>
        </div>
        </div >
    )
}


function NavLink({ href, icon, children }: { children: React.ReactNode, icon: React.ReactNode, href: string }) {

    return (
        // <a href={href} className="flex items-center gap-2 p-2 text-gray-700 rounded hover:bg-gray-100">
        //     {icon}
        //     {children}
        // </a>
        <a href={href} className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-blue-600 rounded-lg transition-colors">
            {icon}
            {children}
        </a>
    )
}