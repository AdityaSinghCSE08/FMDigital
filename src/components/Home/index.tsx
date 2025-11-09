import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Dashboard from "./Dashboard";
import AdminHome from "./AdminHome";
import UserDashboard from "../Dashboard";
import { GetUserDataApi } from "../../api/authentication";
import useAuthStore from "../../store/userstore";
import { BounceLoader } from "react-spinners";
import LoadUserHome from "./LoaduserHome";



export default function Index() {
    const [userData, setUserData] = useState("");
    const [showNewDashboard, setShowNewDashboard] = useState(true); // Toggle for new dashboard
    const navigate = useNavigate();
    const token = localStorage.getItem("token")
    const { userType, setUserType } = useAuthStore()
    // Commented out API calls to prevent CORS errors
    // const { data: getUserData, isLoading: isLoadinggetUserData } = GetUserDataApi(setUserData, navigate, setUserType, token);

    const isLoadinggetUserData: boolean = false;
    const getUserData: any = null; // No API data

    console.log("Index.tsx is loading")


    if (isLoadinggetUserData) {
        return <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-100">
            <BounceLoader size={150} color={"#000000"} />
        </div>
    }

    // For now, always show UserDashboard regardless of user type
    // if (getUserData?.data?.data?.userType !== "User") {
    //     return <AdminHome />;
    // }

    console.log("show new dashboard:",showNewDashboard)
    console.log("usertype is",userType)

   

    if (userType === "user") {
        return <>
        <div>
            {/* Render User Dashboard */}
            <LoadUserHome/>
        </div>
        </>
    // Add your logic here
}
    // For regular users, show new dashboard or old dashboard
    return showNewDashboard ? <UserDashboard /> : <Dashboard userData={userData} />;
}
