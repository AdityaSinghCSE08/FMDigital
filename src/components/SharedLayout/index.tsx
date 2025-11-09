import * as React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Outlet } from 'react-router-dom';


export default function Index() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <div className="h-screen flex flex-col">
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                    <div className="flex-1 overflow-y-auto">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
        
    )
}