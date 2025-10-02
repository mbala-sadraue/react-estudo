import { Bell, FileText, LayoutDashboard, LogOut, Package, Search, Users } from "lucide-react";

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
                    <div className="absolute bottom-0 border-t border-gray-200 w-full">
                        <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <LogOut className="w-4 h-4 mr-2" />
                            <span>Logout</span>
                        </button>
                    </div>
                </aside>

                
                  {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Search */}
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-96">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-sm">Admin User</p>
                  <p className="text-xs text-gray-500">admin@dashboard.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        </div>
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