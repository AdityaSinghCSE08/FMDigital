// components/VerticalLineTabs.tsx
import * as React from "react";
import { ChevronDown } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface VerticalLineTabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  dropdownButton?: React.ReactNode; // Optional dropdown button
}

const VerticalLineTabs: React.FC<VerticalLineTabsProps> = ({
  tabs,
  defaultActiveTab = '',
  dropdownButton,
}) => {
  const [activeTab, setActiveTab] = React.useState(
    defaultActiveTab || tabs[0]?.id || ''
  );

  const activeComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="bg-white  bg-gray-50">
      <div className="flex justify-between items-center mb-1 border-b border-gray-300 relative">
        <div className="flex ">
          {tabs.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-4 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  activeTab === tab.id
                    ? 'text-gray-500 font-semibold border-green-500'
                    : 'text-gray-500 border-transparent'
                }`}
              >
                {tab.label}
              </button>
              {/* Render vertical line except after the last tab */}
              {index < tabs.length - 1 && (
                <div className="w-px h-6 bg-gray-300 self-center"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        {dropdownButton && <div className="">{dropdownButton}</div>}
      </div>

      <div className="">
        {activeComponent}
      </div>
    </div>
  );
};

export default VerticalLineTabs;