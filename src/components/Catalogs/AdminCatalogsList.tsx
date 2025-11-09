import * as React from "react";
import AdminListRow from "./AdminListRow";
import { GetAdminAllCatalogsApi } from "../../api/catalogs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GetAllUsersDataApi } from "../../api/user";
import { BounceLoader } from "react-spinners";
import { Pencil } from "lucide-react";
import Select from "react-select";
import Toggle from "../../ui/Toggle";
import PopupMessage from "./PopUp/PopupMessage";

export default function AdminCatalogsList() {
  //filters
const [userId, setUserId] = React.useState("");
  const [statusId, setStatusId] = React.useState("");
  const [catalogs, setCatalogs] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isToggled, setIsToggled] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const {
    data: getCatalogs,
    isLoading: isLoadingGetCatalogs,
    isFetching,
  } = GetAdminAllCatalogsApi(userId, statusId);

  const { data: allUsersData } = GetAllUsersDataApi();

  const PAGE_SIZE = 6;
  React.useEffect(() => {
    if (getCatalogs) {
      setCatalogs(getCatalogs.data.data);
      setCurrentPage(1);
    }
  }, [getCatalogs]);

  const handleFilter = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const filterRecords = (data: any, term: any) => {
    return data.filter(
      (row: any) =>
        row?.ReleaseTitle.toLowerCase().includes(term) ||
        row?.LabelName.toLowerCase().includes(term) ||
        row?.user_name?.toLowerCase().includes(term) ||
        row?.email?.toLowerCase().includes(term)
    );
  };

  const handleToggle = async (newValue: boolean) => {
  try {
    setIsToggled(newValue);
    // Add your API call here to update the catalog's status
    // For example:
    // await updateCatalogStatus(catalogId, newValue);
    console.log(`Catalog status updated to: ${newValue ? 'enabled' : 'disabled'}`);
  } catch (error) {
    console.error('Failed to update catalog status:', error);
    // Revert the toggle if the API call fails
    setIsToggled(!newValue);
  }
};


  const getCurrentPageData = () => {
    const filteredRecords = filterRecords(catalogs, searchTerm);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const slicedRecords = filteredRecords.slice(startIndex, endIndex);
    return { slicedRecords, totalFilteredRecords: filteredRecords.length };
  };

  const { slicedRecords, totalFilteredRecords } = getCurrentPageData();
  const totalPages = Math.ceil(totalFilteredRecords / PAGE_SIZE);

  return (
    <>
      {(isLoadingGetCatalogs || isFetching) && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-100">
          <BounceLoader size={150} color={"#000000"} />
        </div>
      )}
      
      {/* Popup Message */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-full max-w-md">
           {/* Edit Catalog Popup */}
{/* <PopupMessage 
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
  onUpdate={(message) => {
    // Handle update logic here with the message
    console.log('Updated message:', message);
    setIsPopupOpen(false);
  }}
  title="Messages"
  defaultMessage=""
/> */}
          </div>
        </div>
      )}
      <div className="pt-2 pl-4 ">
        <div className="catalog-header flex h-18 items-center bg-green-500 bg-gradient-to-r from-indigo-700 to-purple-300 h-full rounded-md">
          {/* <div className="flex-1 text-end bg-red-500 text-[28px]">
            Go to Video Catalog | 
          </div>

          <div className="flex-1 text-start bg-red-500 text-[28px]">
            5
          </div> */}

          <div className="flex-1 flex items-center justify-center space-x-4  text-[40px] text-white text-semibold">
            <div className="grid grid-cols-1 gap-2 w-[70%]  h-full ml-4  pt-2 pb-2">
              <div className=" rounded-lg px-4 py-2 flex justify-center items-center w-full">
                <span className="">Go to Video Catalog</span>
                {/* <span>5</span> */}
              </div>
            </div>

            <div>|</div>
            <div>5</div>
          </div>

          <div className="w-[3px] h-[84px] bg-white"></div>

          <div className="flex-1 flex items-center justify-center space-x-4 ">
            <div className="grid grid-cols-2 gap-2 w-[85%] h-full ml-4 text-white pt-2 pb-2 mr-8">
              <div className="max-w-md bg-gradient-to-r from-pink-600 to-fuchsia-500 rounded-lg px-4 py-2 flex justify-center items-center w-full">
                <span className="mr-4">Tickets</span>
                <span>5</span>
              </div>
              <div className="max-w-md bg-gradient-to-r from-pink-600 to-fuchsia-500 rounded-lg px-4 py-2 flex justify-center items-center">
                <span className="mr-4">Labels</span>
                <span>3</span>
              </div>
              <div className="max-w-md bg-gradient-to-r from-pink-600 to-fuchsia-500 rounded-lg px-4 py-2 flex justify-center items-center w-full">
                <span className="mr-4">UGC</span>
                <span>2</span>
              </div>
              <div className="max-w-md bg-gradient-to-r from-pink-600 to-fuchsia-500 rounded-lg px-4 py-2 flex justify-center items-center w-full">
                <span className="mr-4">Profile Linking</span>
                <span>4</span>
              </div>
            </div>

            {/* <div className="bg-green-400">
                <div className="bg-green">Hello-1</div>
                <div className="bg-yellow">Hello-2</div>

            </div> */}

            <div className="relative h-32 w-[50px] rounded-lg ">
              {/* Top-right edit icon */}
              <button 
                className="absolute top-5 right-2 bg-white/30 p-1 rounded-md hover:bg-white/50"
                // onClick={() => setIsPopupOpen(true)}
              >
                <Pencil size={16} className="text-black" />
              </button>

            
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Toggle enabled={isToggled} onChange={(value) => handleToggle(value)} />
                {/* <Toggle enabled={isToggled} onChange={setIsToggled} /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-start items-center pt-4 pb-2  bg-white rounded-md  w-full mb-2 gap-2 ">
          <div className="flex flex-col sm:flex-row items-center gap-4  w-full">
            <div className="w-[30%] ">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border-gray-300 outline-none ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-300"
                id="search"
                placeholder="Search.."
                defaultValue={""}
                onChange={handleFilter}
              />
            </div>
            <div className="w-[30%]">
              <select
                className="w-full px-4 py-2 rounded-md border-gray-300 outline-none ring-2 ring-gray-300 focus:border-blue-500"
                onChange={(e: any) => setStatusId(e.target.value)}
                value={statusId}
              >
              <option value="">All</option>
              <option value={4}>Approved</option>
              <option value={0}>Draft</option>
              <option value={1}>Pending</option>
              <option value={2}>Rejected</option>
              <option value={3}>Corrections</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="flex flex-col">
            <div className=" ">
              <div className="py-2 align-middle inline-block min-w-full pr-4">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          NO.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          TITLE
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          USER ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          STATUS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          User Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          EMAIL
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          LABEL
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          # OF TRACKS
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-xs text-black font-semibold uppercase "
                        >
                          RELEASE DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {slicedRecords?.length === 0 ? (
                        <tr className="w-full">
                          <td className="text-center py-4" colSpan={8}>
                            No records found.
                          </td>
                        </tr>
                      ) : (
                        slicedRecords?.map((catalog: any, index: any) => {
                          return (
                            <React.Fragment key={index}>
                              <AdminListRow
                                catalog={catalog}
                                index={index}
                                currentPage={currentPage}
                                PAGE_SIZE={PAGE_SIZE}
                              />
                            </React.Fragment>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-end items-center mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-md bg-neutral-700 text-gray-600 hover:bg-neutral-800  disabled:opacity-50"
              >
                <FiChevronLeft color="white" />
              </button>
              <span className="mx-4 text-gray-600">{`Page: ${currentPage}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md bg-neutral-700 text-gray-600 hover:bg-neutral-800  disabled:opacity-50"
              >
                <FiChevronRight color="white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
