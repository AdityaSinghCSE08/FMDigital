// index.tsx (Updated User Financial - using the reusable component)
import * as React from "react";
import Fund from "./Fund";
import UserFund from "./UserFund";
import Bank from "./Bank";
import Sales from "./Sales";
import { ChevronDown } from "lucide-react";
import VerticalLineTabs from "./VerticalLineTabs"; // Adjust path as needed

export default function Financial() {
  const tabs = [
    {
      id: "Fund",
      label: "Fund",
      component: <Fund />,
    },
    {
      id: "UserFund",
      label: "User Fund",
      component: <UserFund />,
    },
    {
      id: "Bank",
      label: "Bank",
      component: <Bank />,
    },
    {
      id: "Sales",
      label: "Sales",
      component: <Sales />,
    },
  ];

  const dropdownButton = (
    <button className="flex items-center gap-2 px-4 py-1 border border-gray-300 rounded-2xl bg-white text-sm mb-1">
      all stores combined <span className="border-l border-gray-300 h-6 mx-1"></span> <ChevronDown size={16} />
    </button>
  );

  return (
    <>
      <div>
        <div className=" pl-4 pr-4 pt-1">
           <VerticalLineTabs 
      tabs={tabs} 
      defaultActiveTab="Fund"
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
