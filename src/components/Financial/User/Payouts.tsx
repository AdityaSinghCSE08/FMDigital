import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FiPlusCircle } from "react-icons/fi";

// Payouts Page Component
const Payouts = () => {
  const [activeTab, setActiveTab] = React.useState("fund");

  interface Payout {
    amount?: number;
    date?: string;
    earning?: string;
    vendor?: string;
    requestedBy?: string;
    commission?: number;
  }

  const payoutData: Payout[] = [
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
    // {
    //   amount: 100,
    //   date: "1x/30/2025 10:33 PM",
    //   earning: "Audio Distribution",
    //   vendor: "Fuga",
    //   requestedBy: "Admin",
    //   commission: 20,
    // },
  ];

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
            Here, you can access detailed royalty reports for your music
            earnings. Some stores may take up to three months to report sales,
            so recent earnings might not appear immediately.
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 mb-4 text-center w-1/2 border-gray-300 border-2">
          <div className="text-gray-700 text-sm sm:text-base md:text-lg mb-2">
            Total Balance
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            $ 00.00
          </div>
        </div>

        <div className="flex justify-between items-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-1 mb-2 text-center w-1/2 border-gray-300 border-2">
          <div className="pl-4">Your Current Balance $ 00.00</div>

          <div className="pr-4">Withdrawals $ 00.00</div>
        </div>

        <div className="mb-6">
          {/* Add search bar here */}
          <div className="max-w-xl ">
            <div className="text-lg font-semibold text-gray-800 mb-4">
              Withdrawal Earning
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="text"
                // readonly
                placeholder="Minimum Amount Should be 10$"
                className="flex-1 min-w-[250px] px-4 py-3 text-sm text-gray-600 bg-white border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
              />
              <button className="px-8 py-3 text-base font-bold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors whitespace-nowrap">
                Withdraw
              </button>
            </div>
          </div>

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
                payoutData.length > 0 ? "shadow" : ""
              } overflow-hidden w-3/4`}
            >
              {/* Header (fixed, not scrollable) */}
              <table className="w-full table-fixed">
                <thead className="bg-orange-400 text-white">
                  <tr>
                    <th className="w-12 px-4 py-3 text-left text-sm font-medium">
                      No
                    </th>
                    {/* <th className="w-28 px-4 py-3 text-left text-sm font-medium">
                      Amount
                    </th> */}
                    <th className="w-44 px-4 py-3 text-left text-sm font-medium">
                      Date
                    </th>
                    {/* <th className="w-48 px-4 py-3 text-left text-sm font-medium">
                      Earning Resources
                    </th>
                    <th className="w-40 px-4 py-3 text-left text-sm font-medium">
                      Vendor
                    </th> */}
                    <th className="w-40 px-4 py-3 text-left text-sm font-medium">
                      Requested Amount
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
                    {payoutData.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="w-12 px-4 py-3 text-sm text-gray-700">
                          {index + 1}
                        </td>
                        {/* <td className="w-28 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                          $ {item.amount}.00
                        </td> */}
                        <td className="w-44 px-4 py-3 text-sm text-gray-700">
                          {item.date}
                        </td>
                        {/* <td className="w-48 px-4 py-3 text-sm text-gray-700">
                          {item.earning}
                        </td>
                        <td className="w-40 px-4 py-3 text-sm text-gray-700">
                          {item.vendor}
                        </td> */}
                        <td className="w-40 px-4 py-3 text-sm text-gray-700">
                          {item.requestedBy}
                        </td>
                        <td className="w-36 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                          $ {item.commission}.00
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals row — perfectly aligned with table columns */}
              {(() => {
                if (payoutData.length === 0) {
                  return (
                    <div className=" py-4">
                      You Haven't made any payout request yet.
                    </div>
                  );
                }

                const totalAmount = payoutData.reduce(
                  (acc, cur) => acc + Number(cur.amount || 0),
                  0
                );
                const totalCommission = payoutData.reduce(
                  (acc, cur) => acc + Number(cur.commission || 0),
                  0
                );

                return (
                  <table className="w-full table-fixed mt-2">
                    <tfoot>
                      <tr className="bg-purple-200">
                        <td className="w-12 px-4 py-3 font-semibold text-gray-800">
                          Totals
                        </td>
                        <td className="w-28 px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                          $ {totalAmount.toFixed(2)}
                        </td>
                        <td className="w-44"></td>
                        <td className="w-48"></td>
                        <td className="w-40"></td>
                        <td className="w-40"></td>
                        <td className="w-36  py-3 text-sm text-gray-700 whitespace-nowrap">
                          $ {totalCommission.toFixed(2)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                );
              })()}
            </div>

            {/* <div className="ml-8">
              <button className="flex items-center gap-2 border-2 rounded-3xl border-gray-900 text-gray-900 px-4 py-2  text-sm">
              <span><FiPlusCircle /></span> Add Fund
            </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
