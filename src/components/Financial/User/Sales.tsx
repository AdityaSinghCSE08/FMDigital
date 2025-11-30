import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FiPlusCircle } from "react-icons/fi";

// Payouts Page Component
const Sales = () => {
  const [activeTab, setActiveTab] = React.useState("fund");

  interface Sales {
    reportingMonth?: string;
    saleMonth?: string;
    label?: string;
    earning?: number;
    report?: string;
    status?: number;
  }

  const salesData: Sales[] = [
   {
      reportingMonth: "July 2025",
      saleMonth: "March 2025",
      label: "KP Music",
      earning: 50,
      report: "Download",
      status: 0
   },
   {
      reportingMonth: "June 2025",
      saleMonth: "February 2025",
      label: "RD Parmar",
      earning: 80,
      report: "Download",
      status: 1
   },


  ];


   const statusButton = (status: any) => {
        switch (status) {
            case 0:
                return (
                    <button
                        type="button"
                        className=" py-1 text-center bg-white border border-gray-700 text-black text-xs rounded hover:bg-gray-100 focus:outline-none w-full font-semibold"
                    >
                        Pending
                    </button>
                );
            case 1:
                return (
                     <button
                        type="button"
                        className=" py-1 text-center bg-white border border-green-600 text-green-600 text-xs rounded hover:bg-gray-100 focus:outline-none w-full font-semibold"
                    >
                        RECEIVED
                    </button>
                );
            case 4:
                return (
                    <button
                        type="button"
                        className=" py-1 text-center bg-white border border-black text-green-700 text-xs rounded hover:bg-gray-100 focus:outline-none w-full"
                    >
                      
                        DONE
                    </button>
                );
            default:
                return <></>;
        }
    };

  return (
    <div className="">
      <div className="max-w-8xl mx-auto pt-1">
        {/* <div className=" p-3 mb-6 text-sm text-gray-700 ">
          
          <span className="ml-1">📝</span>
          <br />
          to report sales, so recent earnings might not appear immediately.
        </div> */}

        <div className="flex  pt-1 mb-2 w-3/5    ">
          <div className="text-[14.6px] pr-16">
            View your detailed royalty earnings here. Please note, some platforms report 
            sales with a delay of up to 3 months. To ensure accuracy, we display the last 
            6 months of royalty data.
          </div>
        </div>

       

       

        <div className="mb-6">
          

          {/* Horizontal Line */}
          <hr className="border-green-700 mb-1 mt-6" />

          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Your History
            </h2>
          </div>

          {/* Horizontal Line */}
          <hr className="border-green-700 mb-4" />

          <div className="flex">
            <div
              className={`bg-white rounded-none ${
                salesData.length > 0 ? "shadow" : ""
              } overflow-hidden w-3/4`}
            >
              {/* Header (fixed, not scrollable) */}
              <table className="w-full table-fixed">
                {/* <thead className="bg-orange-400 text-white"> */}
                <thead 
                  className="text-white relative"
                  style={{
                    backgroundImage: 'url(/images/financial/OrangeBigBand.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium">
                      No
                    </th>
                    <th className="w-36 px-4 py-3 text-left text-sm font-medium">
                      Reporting Month
                    </th>
                    <th className="w-44 px-4 py-3 text-left text-sm font-medium">
                      Sale Month
                    </th>
                    <th className="w-48 px-4 py-3 text-left text-sm font-medium">
                      Label
                    </th>
                    <th className="w-40 px-4 py-3 text-left text-sm font-medium">
                      Earning
                    </th>
                    <th className="w-40 px-4 py-3 text-left text-sm font-medium">
                      Report
                    </th>
                    <th className="w-36 px-4 py-3 text-left text-sm font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
              </table>

              {/* Scrollable body (only rows scroll) */}
              <div className="max-h-64 overflow-y-auto">
                <table className="w-full table-fixed">
                  <tbody className="divide-y divide-gray-200">
                    {salesData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="w-12 px-4 py-3 text-sm text-gray-700">
                          {index + 1}
                        </td>
                        <td className="w-36 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                          {item.reportingMonth}
                        </td>
                        <td className="w-44 px-4 py-3 text-sm text-gray-700">
                          {item.saleMonth}
                        </td>
                        <td className="w-48 px-4 py-3 text-sm text-gray-700">
                          {item.label}
                        </td>
                        <td className="w-40 px-4 py-3 text-sm text-gray-700">
                          {item.earning}
                        </td>
                        <td className="w-40 px-4 py-3 text-sm text-gray-700">
                          {item.report}
                        </td>
                        <td className="w-36 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                          {statusButton(item.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
