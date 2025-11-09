import * as React from "react";
import { FiCreditCard, FiEdit2, FiCheck } from "react-icons/fi";
import CircularButton from "../SharedComponent/CircularButton";

// Custom CSS for checkbox
const styles = `
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid #D1D5DB;
    border-radius: 0.25rem;
    margin: 0;
    cursor: pointer;
    position: relative;
  }
  
  input[type="checkbox"]:checked {
    background-color: #EC4899; /* pink-500 */
    border-color: #EC4899;
  }
  
  input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

interface BillingData {
    beneficiaryName?: string;
    bankName?: string;
    ibanAccount?: string;
    ifscCode?: string;
    swiftCode?: string;
}

interface BillingCardProps {
    billingData?: BillingData;
    onEdit?: () => void;
    onUpgrade?: () => void;
    onManageSubscription?: () => void;
}

const BillingCard: React.FC<BillingCardProps> = ({ 
    billingData, 
    onEdit,
    onUpgrade, 
    onManageSubscription 
}) => {
    // Add the style to the document head
    React.useEffect(() => {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return (
        <div className="bg-white rounded-lg pl-4 pb-2 ">
            <div className="mb-2">
                <h2 className="text-lg font-semibold text-gray-900">Billing & Plans</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                {/* Left Column - Billing Information */}
                <div className="space-y-2">
                    {/* Your Plan */}
                    <hr className="border-gray-200 mt-2" />
                    <div className="">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-500 min-w-[150px]">Your Plan:</label>
                                <p className="text-gray-900">Starter Plan</p>
                            </div>
                            <CircularButton
                                text="Upgrade Now"
                                onClick={onUpgrade}
                                color="white"
                                textColor="black"
                                className="w-42"
                            />
                            {/* <button
                                onClick={onUpgrade}
                                className="px-4 py-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-lg transition-colors"
                            >
                                Upgrade Now
                            </button> */}
                        </div>
                    </div>
                    
                    {/* Horizontal Line */}
                    <hr className="border-gray-200" />
                    
                    {/* Payment Due */}
                    <div className="">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <label className="text-sm font-medium text-gray-500 min-w-[150px]">Payment Due:</label>
                                <p className="text-gray-900">2548</p>
                            </div>
                            <CircularButton
                                text="Manage Subscription"
                                onClick={onManageSubscription}
                                color="white"
                                textColor="black"
                                className="w-42"
                            />
                            {/* <button
                                onClick={onManageSubscription}
                                className="px-4 py-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-lg transition-colors"
                            >
                                Manage Subscription
                            </button> */}
                        </div>
                    </div>

                    <hr className="border-gray-200 mt-2" />
                </div>

                {/* Right Columns - Policy Agreement */}
                <div className="lg:col-span-2 lg:-mt-20">
                    {/* Agreement Notice */}
                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-4 max-h-40 overflow-y-auto">
                        <div className="text-xs text-gray-800 space-y-4">
                            <h3 className="font-semibold text-base mb-1">FM Digital Official Distribution Agreement</h3>
                            <p className="mb-2">This Agreement, made on [Date] between:</p>
                            
                            <div className="space-y-2">
                                <p><strong>Artist/Label:</strong> [Artist Name]</p>
                                <p><strong>Address:</strong> [Artist Address]</p>
                                <p><strong>Agreement Period:</strong> [Start Date] to [End Date]</p>
                                <p className="my-4">(hereinafter referred to as the "Artist" or "Licensor")</p>
                                
                                <p className="">AND</p>
                                
                                <p className="mt-4">FM Digital, having its office at F-931/6, Raj Nagar, Uttar Pradesh - 201102, acting through its Managing Director Mr. Ashish Rajput,</p>
                                <p className="">(hereinafter referred to as "FM Digital" or "Licensee").</p>
                                
                                <p className="mt-4">WHEREAS the Artist owns and controls exclusive rights to certain musical works ("Said Works"), and FM Digital is engaged in the distribution, production, and promotion of music content, the parties hereby agree to the following terms:</p>
                                
                                <ol className="list-decimal pl-5 space-y-3 mt-4">
                                    <li><strong>Assignment of Rights</strong>
                                        <p>The Artist hereby assigns all copyright, performing, mechanical, and synchronization rights of the Said Works to FM Digital for the entire world and for the full term of copyright. This includes but is not limited to the rights to:</p>
                                        <ul className="list-disc pl-5 mt-1">
                                            <li>Reproduce, distribute, and communicate the works to the public.</li>
                                            <li>Create adaptations, translations, and synchronizations.</li>
                                            <li>Use the works for any digital/mobile content formats, including ringtones, ring-back tones, and more.</li>
                                        </ul>
                                    </li>
                                    
                                    <li><strong>Consideration</strong>
                                        <p>FM Digital agrees to pay the Artist:</p>
                                        <ul className="list-disc pl-5 mt-1">
                                            <li>A one-time lump sum royalty for the rights, upon signing.</li>
                                            <li>Additional compensation per the subscription model: 70% of revenue to the Artist in the Free Plan, and 100% in the Premium Plan.</li>
                                        </ul>
                                    </li>
                                    
                                    <li><strong>Territory</strong>
                                        <p>This Agreement applies globally, and FM Digital is authorized to distribute and license Said Works across all territories.</p>
                                    </li>
                                    
                                    <li><strong>Artist's Warranties</strong>
                                        <p>The Artist guarantees:</p>
                                        <ul className="list-disc pl-5 mt-1">
                                            <li>They are the exclusive owner of the Said Works.</li>
                                            <li>The works do not infringe on any third-party rights or contain any unlawful content.</li>
                                            <li>The Artist will indemnify FM Digital from any legal claims arising from the breach of this warranty.</li>
                                        </ul>
                                    </li>
                                    
                                    <li><strong>Term and Renewal</strong>
                                        <p>The Agreement is valid for a tenure of 2 years from the Artist's joining date. If the Artist does not respond to a renewal email from FM Digital by the end of the agreement period, the agreement will automatically renew for another 2-year term, under the same terms and conditions.</p>
                                    </li>
                                    
                                    <li><strong>Force Majeure</strong>
                                        <p>Neither party will be liable for delays caused by acts of God, strikes, or other uncontrollable events.</p>
                                    </li>
                                    
                                    <li><strong>Arbitration and Governing Law</strong>
                                        <p>Any disputes arising from this Agreement will be subject to arbitration in [Jurisdiction], and this Agreement will be governed by the laws of India.</p>
                                    </li>
                                    
                                    <li><strong>Takedown Fees</strong>
                                        <p>If a takedown request is made for a track less than 1 year old, the Artist will pay $3 per takedown.</p>
                                    </li>
                                    
                                    <li><strong>No Partnership</strong>
                                        <p>This Agreement does not constitute a partnership or joint venture between the parties.</p>
                                    </li>
                                    
                                    <li><strong>Application to Past and Future Artists</strong>
                                        <p>Note: This agreement shall apply to all current, past, and future artists working with FM Digital, regardless of when they started or ended their association with the company.</p>
                                    </li>
                                </ol>
                                
                                <div className="mt-8 space-y-4">
                                    <p>In witness whereof, the parties have executed this Agreement on the date first above written.</p>
                                </div>

                                <p>Artist/Label Signature: ________________________</p>
                                    <p>FM Digital Signature: Ashish Rajput</p>
                            </div>
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mb-2">
                        <input 
                            type="checkbox" 
                            id="agreement" 
                            className="w-4 h-2 cursor-pointer"
                        />
                        <label htmlFor="agreement" className="text-sm text-black-800">
                            I have read and agree to the terms of the FM Digital Official Distribution Agreement
                        </label>
                    </div>

                   
                    
                    {/* Save Button */}
                    <div className="text-center">
                    <CircularButton
                        text="Save"
                        onClick={onEdit}
                        color="blue"
                        textColor="white"
                        className="w-36"
                    />
                        {/* <button
                            onClick={onEdit}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                        >
                            Save
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingCard;
