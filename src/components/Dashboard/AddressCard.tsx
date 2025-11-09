import * as React from "react";
import { FiEdit2 } from "react-icons/fi";
import CircularButton from "../SharedComponent/CircularButton";

interface AddressCardProps {
    userData?: {
        address?: {
            line?: string;
            city?: string;
            state?: string;
            country?: string;
            pincode?: string;
        };
    };
    onEdit?: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ userData, onEdit }) => {
    return (
        <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Address</h2>
                <CircularButton
                            text="Update"
                            onClick={onEdit}
                            color="white"
                            textColor="black"
                            className=""
                        />
            </div>

            <div className="space-y-0">
                {/* Address Line Field */}
                <div className="py-2">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500">Address line:</label>
                        <p className="text-gray-900">{userData?.address?.line || "5707 / Raj Nagar"}</p>
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* City Field */}
                <div className="py-2">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500">City:</label>
                        <p className="text-gray-900">{userData?.address?.city || "Ghaziabad"}</p>
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* State Field */}
                <div className="py-2">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500">State:</label>
                        <p className="text-gray-900">{userData?.address?.state || "Uttar Pradesh"}</p>
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* Country Field */}
                <div className="py-2">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500">Country:</label>
                        <p className="text-gray-900">{userData?.address?.country || "India"}</p>
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* Pincode Field */}
                <div className="py-2">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500">Pincode:</label>
                        <p className="text-gray-900">{userData?.address?.pincode || "201017"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressCard;
