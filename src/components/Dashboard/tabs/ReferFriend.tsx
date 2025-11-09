import * as React from 'react';
import { GlobalFonts } from '../../../styles/globalFonts';





interface Tab {
    id: string;
    label: string;
}

interface ReferFriendProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}



const ReferFriend: React.FC<ReferFriendProps> = ({ tabs, activeTab, onTabChange }) => {
return (
    <>
    <GlobalFonts />
        <div className="subscription-container">
           
           
        <div className="max-w-4xl p-2 md:p-4">
            <p className="text-sm text-gray-900 mb-4">Referral benefits apply exclusively to paid sign-ups.</p>
            <div className="bg-purple-50 max-w-2xl  p-4 rounded-lg flex items-center justify-between mb-6">
                <div className="flex items-center flex-1">
                    <div className="bg-purple-50 p-2 rounded-full flex-shrink-0">
                        <img src='/images/StudentIcon.svg' alt="Student" className="w-5 h-5 text-white" />
                        {/* <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> */}
                    </div>
                    <div className="ml-3">
                        <p className="font-semibold text-purple-900 text-sm">Get students 50% off - Limited Time</p>
                        <p className="text-xs text-gray-600">Know a student who makes music? You get $10 for every paid signup.</p>
                    </div>
                </div>
                <button className="">
                    <img 
                        src="/images/ReferStudents.svg" 
                        alt="Refer students" 
                        className="w-32 h-20"  // Increased from w-12 h-12 to w-24 h-24
                    />
                </button>
                {/* <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 flex-shrink-0 ml-4">Refer students</button> */}
            </div>

            

            <div className="mb-6">
                <div className="mb-3">
                 <hr className="border-gray-200" />
                 <h2 className="text-base font-semibold mb-3 mt-3">Overall Stats</h2>
                 <hr className="border-gray-200 " />

                </div>
               
                <div className="flex gap-3 max-w-600px ">
                    <div className="bg-white  rounded-lg flex-1">
                        <div className="border border-gray-200 bg-white rounded-lg">
                          <p className="text-xs text-gray-500 p-1 mb-1">Earnings</p>
                          <p className="text-xl font-bold mb-1 p-1 ">$00.00</p>
                        </div>
                        <p className="text-xs text-gray-400 p-1">June: $0</p>
                    </div>

                    <div className="bg-white rounded-lg flex-1">
                        <div className="border border-gray-200 bg-white  rounded-lg">
                          <p className="text-xs text-gray-500 mb-1 p-1">Membership Plan</p>
                          <p className="text-xl font-bold mb-1 p-1">0</p>
                        </div>
                        <p className="text-xs text-gray-400 p-1">June: 0</p>
                    </div>

                    <div className="bg-white rounded-lg flex-1">
                        <div className="border border-gray-200 bg-white rounded-lg">
                          <p className="text-xs text-gray-500 mb-1 p-1">Clicks</p>
                          <p className="text-xl font-bold mb-1 p-1">0</p>
                        </div>
                        <p className="text-xs text-gray-400 p-1">June: 0</p>
                    </div>

                </div>
            </div>

            <p className="text-sm text-gray-800 mb-3">Share FM Digital Official & grab $10 per referral!</p>

            <div className="bg-white p-5 rounded-lg border border-gray-200 max-w-3xl">
                <p className="text-center font-semibold mb-1 text-[20px]">Refer FM Digital Official</p>
                {/* <h2 className="text-center font-semibold mb-1">Refer FM Digital Official</h2> */}
                <hr className="border-gray-200 mb-3" />
                <p className="text-sm text-gray-900 mb-4">Invite friends with this link - you'll earn $10 per paid signup, and they'll enjoy 7% off.</p>

                <div className="flex items-center gap-2 mb-3 max-w-xl">
                    <input 
                        type="text" 
                        value="https://fmdigitalofficial.com/vip/497512" 
                        readOnly 
                        className="flex-1 px-2 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm" 
                    />
                    <button className="bg-purple-600 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-purple-700 whitespace-nowrap">Copy Referral Code</button>
                </div>
                                <div className="max-w-xl">
                                    <div className="grid grid-cols-2 gap-2.5" style={{ width: 'calc(100% - 175px)' }}>
                                        <button className="flex items-center justify-center px-2 py-2 rounded-md hover:bg-gray-50 text-sm">
                                            <img src="/images/share/share on X.svg" alt="Share on X"  />
                                        </button>
                
                                        <button className="flex items-center justify-center px-2 py-2 rounded-md hover:bg-gray-50 text-sm">
                                            <img src="/images/share/share on FB.svg" alt="Share on FB"  />
                                        </button>
                
                                        <button className="flex items-center justify-center px-2 py-2 rounded-md hover:bg-gray-50 text-sm">
                                            <img src="/images/share/share on SMS.svg" alt="Share on SMS"  />
                                        </button>
                
                                        <button className="flex items-center justify-center px-2 py-2 rounded-md hover:bg-gray-50 text-sm">
                                            <img src="/images/share/Share on mail.svg" alt="Share on Mail"  />
                                        </button>
                                    </div>
                                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default ReferFriend;
