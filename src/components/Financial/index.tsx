// index.tsx (Updated User Financial - using the reusable component)
import * as React from "react";
import Payouts from "./User/Payouts";
import UserFund from "./Admin/UserFund";
import Sales from "./User/Sales";
import { ChevronDown } from "lucide-react";
import VerticalLineTabs from "./Admin/VerticalLineTabs"; // Adjust path as needed

export default function Financial() {
  const tabs = [
    {
      id: "Payouts",
      label: "Payouts",
      component: <Payouts />,
    },
    {
      id: "Sales",
      label: "Sales",
      component: <Sales />,
    },
  ];

  const dropdownButton = (
    <button className="flex items-center gap-2 px-4 py-1 border border-blue-600 rounded-2xl bg-white text-sm mb-1 text-blue-600 ">
      all dates combined <span className="border-l border-blue-600 h-6 mx-1"></span> <ChevronDown size={16} />
    </button>
  );

  return (
    <>
      <div>
        <div className=" pl-4 pr-4 pt-1">
           <VerticalLineTabs 
      tabs={tabs} 
      defaultActiveTab="Payouts"
      dropdownButton={dropdownButton}
    />
         
        </div>


        {/* <div className="flex justify-between items-center bg-red-200 w-full">
          <div>
            <VerticalLineTabs tabs={tabs} defaultActiveTab="Fund" />
          </div>


        </div> */}
      </div>
     
    </>
  );
}
