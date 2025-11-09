import * as React from "react";
import Catalogs from "./index";
import AdminCatalogsList from "./AdminCatalogsList";
import useAuthStore from "../../store/userstore";
import UserAudioCatalog from "./User/UserAudioCatalog";



export default function CatalogsPage(){
    const { userType, setUserType } = useAuthStore()

    
    return(
        <>
            {userType !== "user"  ? <AdminCatalogsList /> : <UserAudioCatalog />}
        </>
    )
}