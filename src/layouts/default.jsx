import { Outlet } from "react-router-dom";
import { ClipboardList } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-2">
          <ClipboardList className="h-6 w-6" />
          <span className="text-xl font-bold">Todo App</span>
        </div>
      </header>
      <main className="flex-grow p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;