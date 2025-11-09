import * as React from "react";
import { UpdateTicketAdminApi } from "../../../api/ticket";



export default function ListRow({ data, index, onRowClick, isSelected }: { data: any, index: number, onRowClick?: () => void, isSelected?: boolean }) {

    const rowNumber = index + 1;

    const { mutate: UpdateYoutubeClaims } = UpdateTicketAdminApi()

    const handleDownload = (link: any) => {
        const fileUrl = `https://api.fmdigitalofficial.com/${link}`;

        // Open a new window with the file URL
        const newWindow = window.open(fileUrl, '_blank');
    };
    const statusButton = (status: any) => {
        switch (status) {
            case 0:
                return (
                    // <button
                    //     type="button"
                    //     className="px-3 py-1 text-center bg-yellow-500 text-xs text-white rounded hover:bg-yellow-600 focus:outline-none w-full"
                    // >
                    //     Pending
                    // </button>
                    <button
                        type="button"
                        className="px-3 py-1 text-center bg-white border border-black text-black text-xs rounded hover:bg-gray-100 focus:outline-none w-full"
                    >
                        Pending
                    </button>
                );
            case 2:
                return (
                     <button
                        type="button"
                        className="px-3 py-1 text-center bg-white border border-black text-black text-xs rounded hover:bg-gray-100 focus:outline-none w-full"
                    >
                        Pending
                    </button>
                );
            case 4:
                return (
                    <button
                        type="button"
                        className=" py-1 text-center bg-white border border-green-700 text-green-700 text-xs rounded hover:bg-gray-100 focus:outline-none w-full"
                    >
                      
                        DONE
                    </button>
                );
            default:
                return <></>;
        }
    };
    return (
        <>
            <tr 
                onClick={onRowClick}
                className={`cursor-pointer hover:bg-gray-50 transition-colors ${
                    isSelected ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
            >
                <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
                    {rowNumber}
                </td>
                {/* <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-700">
                    {data.users_id || '--'}
                </td>
                <td className="px-2 py-4 text-sm text-gray-700">
                    {data.users[0]?.fname + " " + data.users[0]?.lname || '--'}
                </td>
                <td className="px-2 py-4 text-sm text-gray-700 break-words">
                    {data.users[0].email || '--'}
                </td> */}
                <td className="px-2 py-4 text-sm text-gray-700 break-words">
                    {data.reason || '--'}
                </td>
                <td className="px-2 py-4 text-sm text-gray-700 break-words">
                    {data.discreption || '--'}
                </td>
                <td className="px-6 py-4 whitespace text-sm text-gray-700">
                    {data.ticket_id || '--'}
                </td>
                <td className="px-2 py-4 whitespace text-sm text-gray-700">
                    {data.created_at || '14/02/2025 10:33 PM'}
                   
                </td>

                <td className="px-2 py-4 text-sm text-gray-700 break-words">
                    {data.created_at || '14/02/2025 10:33 PM'}
                </td>

                <td className="px-2 py-4 text-sm text-gray-700">
                    {statusButton(data.Status)}
                </td>
              
               
            </tr>
        </>
    )
}