import { BsCardChecklist, BsFileEarmarkText, BsPeople, BsTicket } from 'react-icons/bs';
import * as React from "react"
import useResponsiveIconSize from "../../hooks/useResponsiveIconSize"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import InputUrl from "../../ui/InputUrl"
import { GetDashBoardStatsApi, GetDashboardsLinksApi } from '../../api/releaseInfo';
import { BounceLoader } from 'react-spinners';
import AdminSpotifyList from './AdminSpotifyList';
import AdminYoutubeList from './AdminYoutubeList';
import UserDashboard from '../Dashboard';

interface PlayListUrl {
    url: string
}


export default function AdminHome() {
    const size = useResponsiveIconSize();
    const navigate = useNavigate();
    // Commented out API calls to prevent CORS errors
    // const { data: GetDashBoardStats, isLoading, isFetching } = GetDashBoardStatsApi()
    const GetDashBoardStats: any = null;
    const isLoading: boolean = false;
    const isFetching: boolean = false;

    let catalogs: any[] = []
    let labels: any[] = []

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        control,
        formState: { errors }
    } = useForm<PlayListUrl>({})

    const cardsData = [
        { title: 'Pending Catalogs', count: GetDashBoardStats?.data?.data?.pendingRelese || 0, icon: <BsFileEarmarkText className="text-5xl text-blue-500 mb-4" />, color: 'blue', route: '/Catalogs' },
        { title: 'Pending Labels', count: GetDashBoardStats?.data?.data?.pendingLabel || 0, icon: < BsCardChecklist className="text-5xl text-green-500 mb-4" />, color: 'green', route: '/Label' },
        { title: 'Total Artists', count: GetDashBoardStats?.data?.data?.totalArtist || 0, icon: < BsPeople className="text-5xl text-purple-500 mb-4" />, color: 'purple', route: '/ManageArtist' },
        { title: 'Financial Requests', count: GetDashBoardStats?.data?.data?.pendingFinancial || 0, icon: < BsPeople className="text-5xl text-purple-500 mb-4" />, color: 'purple', route: '/Financial' },
        { title: 'Pending Tickets', count: GetDashBoardStats?.data?.data?.pendingTickets || 0, icon: < BsTicket className="text-5xl text-red-500 mb-4" />, color: 'red', route: '/Tickets' },
    ];
    //pending catalogs
    //pending labels

    return (
        <>
            {(isLoading || isFetching) && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-100">
                    <BounceLoader size={150} color={"#000000"} />
                </div>
            )}
            <UserDashboard />
        </>
    );
}

