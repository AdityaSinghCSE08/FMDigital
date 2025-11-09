import * as React from 'react';
import CircularButton from '../../SharedComponent/CircularButton';
import { GlobalFonts } from '../../../styles/globalFonts';

interface Tab {
    id: string;
    label: string;
}

interface SubscriptionProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

const Subscription: React.FC<SubscriptionProps> = ({ tabs, activeTab, onTabChange }) => {
    const plans = [
        {
            title: 'Solo Creator',
            description: 'Upload unlimited tracks to every leading music platform.',
            price: '₹00/year',
            artistCount: 0, // 0 means don't show
            featuresHeading: "Whats's included",
            features: [
                'Unlimited Distribution for 1 Primary Artist',
                'Unlimited Distribution to 190+ DSPs',
                'Use Your UPC & ISRC',
                'Basic Track Credits',
                'Basic Release Edits',
                '70% Royalities',
                'Quarterly Royality Settlements',
                'Basic Playlist Pitching',
                'Assistance for Getting Verified on Spotify'
            ],
            action: 'Select Solo Creator'
        },
        {
            title: 'Career Artist',
            description: 'Go beyond Turn your music into opportunity.',
            price: '₹2599/year',
            artistCount: 3, // Show 'Artists: 3' for this plan
            featuresHeading: "Whats's included",
            features: [
                'Unlimited distribution to 190+ DSPs',
                'Use Your UPC & ISRC',
                'Advance Track Credits',
                'Advance Release Edits',
                '100% Royalities',
                'Monthly Financial Settlements',
                'Advance Playlist Pitching',
                'Assistance for Getting Verified on Spotify',
                'Assistance for Getting Verified on Apple Music',
                'Setup for YouTube Content ID and OAC'
            ],
            action: 'Select Career Artist'
        },
        {
            title: 'Label Executive',
            description: 'All-in-one label management: tools and access for multiple artists control.',
            price: '₹12000/Year',
            artistCount: 5, // Show 'Artists: 5' for this plan
            featuresHeading: "All Career Artists & Label Executive:",
            features: [
                'Unlimited Distribution & Services'
            ],
            action: 'Select Label Executive'
        }
    ];

    const handleSelectPlan = (plan: string) => {
        console.log(`Selected plan: ${plan}`);
        // Add your plan selection logic here
    };

    const handleManageSubscription = () => {
        console.log('Manage subscription clicked');
        // Add your manage subscription logic here
    };

    return (
        <div className="subscription-container mt-6">
            <GlobalFonts />
            <div className="bg-white rounded-lg  p-2 md:p-4 ">
                <div className="py-3">
                    {/* <h3 className="text-2xl font-semibold text-gray-900 mb-4">Subscription</h3>
                    <p className="text-gray-500 mb-6">
                        Choose the plan that best suits your music journey with FM Digital Official.
                    </p> */}

                    {/* Subscription Plans Grid */}
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[1100px] px-2 sm:px-4 lg:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                                {plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className={`relative rounded-lg border bg-white overflow-hidden flex flex-col ${
                                            index === 0 ? 'border-[#6530e5]' :
                                            index === 1 ? 'border-[#00b768]' :
                                            'border-yellow-500'
                                        } ${
                                            index === 1 ? 'transform md:scale-y-105 origin-top' : ''
                                        }`}
                                    >
                                        <div className="p-4 pb-0 flex-grow">
                                            <h4 className={`text-lg font-medium inline-block px-3 py-1 rounded-lg ${
                                                index === 0 ? 'bg-[#6530e5] text-white' : 
                                                index === 1 ? 'bg-[#00b768] text-white' : 
                                                'bg-[#00b768] text-white'
                                            }`}>
                                                {plan.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-3">{plan.description}</p>
                                            <p className="text-xl font-semibold mt-2">{plan.price}</p>
                                            
                                            {(index === 1 || index === 2) && (
                                                <div className="w-4/5 mx-auto my-6">
                                                    <div className="relative">
                                                        <div className="h-1.5 bg-gray-200 rounded-full">
                                                            <div 
                                                                className="h-full bg-blue-100 rounded-full"
                                                                style={{ width: '0%' }}
                                                            />
                                                        </div>
                                                        <div 
                                                            className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-black shadow-sm cursor-pointer hover:bg-gray-800 transition-colors"
                                                            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {plan.artistCount > 0 && (
                                                <div className="text-xs text-gray-500 mt-2 mb-1">
                                                    Artists: {plan.artistCount}
                                                </div>
                                            )}
                                            
                                            <hr className="border-t border-gray-200 my-3" />
                                            
                                            <h5 className="text-xs font-bold text-gray-700 mb-1">{plan.featuresHeading}</h5>
                                            <ul className="text-xs text-gray-600 space-y-1.5 mb-4">
                                                {plan.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-1">
                                                        <span className="text-gray-500">• </span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            {index === 1 && (
                                                <div className="text-center mb-1">
                                                    <button 
                                                        onClick={() => window.alert('Learn more about Career Artist')} 
                                                        className="text-blue-600 hover:text-blue-700 text-sm font-medium underline bg-transparent border-none cursor-pointer p-0"
                                                    >
                                                        Learn more about Career Artist
                                                    </button>
                                                </div>
                                            )}
                                            
                                            {index === 2 && (
                                                <div className="text-center mb-1 mt-48">
                                                    <button 
                                                        onClick={() => window.alert('Learn more about Label Owner')} 
                                                        className="text-blue-600 hover:text-blue-700 text-sm font-medium underline bg-transparent border-none cursor-pointer p-0"
                                                    >
                                                        Learn more about Label Owner
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                     
                                        <div className="px-4 pb-4 flex justify-center">
                                            <CircularButton
                                                text={plan.action}
                                                onClick={() => handleSelectPlan(plan.title)}
                                                color={index === 1 ? 'customblue' : 'customblue'}
                                                className="w-[80%]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Your Subscription Table */}
                    <div className="mt-16 md:mt-16">
                        <div className="text-center mb-2">
                            <h4 className="font-bold text-gray-900">Your Subscription</h4>
                        </div>
                        <div className="flex justify-center px-4">
                            <div className="w-full max-w-3xl border border-gray-300 rounded-md overflow-hidden">
                                <div className="flex flex-col sm:flex-row justify-between items-center p-4 font-medium text-center sm:text-left">
                                    <div className="text-black-900 mb-2 sm:mb-0 w-full sm:w-1/3">Career Artist</div>
                                    <div className="text-black-900 mb-2 sm:mb-0 w-full sm:w-1/3 flex justify-center">July 2025</div>
                                    <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
                                        <CircularButton
                                            text="Manage >"
                                            onClick={handleManageSubscription}
                                            color="none"
                                            className="px-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;