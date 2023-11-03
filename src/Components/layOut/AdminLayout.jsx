import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 bg-green-300 min-h-screen w-full">
                   Admin lay out    
            </div>
            <div className="col-span-9 min-h-screen bg-red-300">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;