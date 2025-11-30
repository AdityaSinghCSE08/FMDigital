// index.tsx (Updated User Financial - using the reusable component)
import * as React from "react";
import Payouts from "./User/Payouts";
import UserFund from "./Admin/UserFund";
import Sales from "./User/Sales";
import { ChevronDown } from "lucide-react";
import VerticalLineTabs from "./Admin/VerticalLineTabs"; // Adjust path as needed

export default function Financial() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("all dates combined");

  const filterOptions = [
    "all dates combined",
    "today",
    "this week",
    "this month",
    "this year",
    "custom range"
  ];

  const handleFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
    // Add your filter logic here
    console.log("Filter selected:", option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.filter-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

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
    <div className="filter-dropdown-container relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-1 border border-blue-600 rounded-2xl bg-white text-sm mb-1 text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
      >
        {selectedFilter} <span className="border-l border-blue-600 h-6 mx-1"></span> 
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-blue-600 rounded-lg shadow-lg z-50 min-w-[200px]">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleFilterSelect(option)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                selectedFilter === option ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
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
