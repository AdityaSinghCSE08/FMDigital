import * as React from "react";
import Catalogs from "./index";
// import AdminCatalogsList from "./AdminCatalogsList";
import AdminCatalogsAudioList from "./AdminCatalogsAudioList";
import useAuthStore from "../../store/userstore";



export default function CatalogsPage(){
    const { userType, setUserType } = useAuthStore()

    
    return(
        <>
            {userType !== "user"  ? <AdminCatalogsAudioList /> : <Catalogs />}
        </>
    )
}