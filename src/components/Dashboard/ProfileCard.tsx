import * as React from "react";
import { FiEdit2, FiUser } from "react-icons/fi";
import CircularButton from "../SharedComponent/CircularButton";

interface ProfileCardProps {
    userData?: {
        fname?: string;
        lname?: string;
        email?: string;
        phone?: string;
        address?: {
            city?: string;
            state?: string;
            country?: string;
            pincode?: string;
        };
    };
    onEdit?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userData, onEdit }) => {
    return (
        <div className="bg-white rounded-lg p-6">

            <div className="py-4 mb-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-500 min-w-[150px]">Profile Picture</label>
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <FiUser className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Horizontal Line */}
            <hr className="border-gray-200" />

            <div className="space-y-0">
                {/* Name Field - Editable */}
                <div className="py-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <div className="flex items-center gap-4 mb-2 sm:mb-0">
                            <label className="text-sm font-medium text-gray-500">Name:</label>
                            <p className="text-gray-900">{(userData?.fname && userData?.lname) ? `${userData.fname} ${userData.lname}` : 'Aditya Rajput'}</p>
                        </div>
                        <CircularButton
                            text="Update"
                            onClick={onEdit}
                            color="white"
                            textColor="black"
                            className=""
                        />
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* Email Field - Read Only */}
                <div className="py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 ">
                            <label className="text-sm font-medium text-gray-500">Email:</label>
                            <p className="text-gray-900">{userData?.email || 'Aditya@gmail.com'}</p>
                        </div>
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* Current Password Field - Editable */}
                <div className="py-2">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                        <div className="flex items-center gap-4 mb-2 sm:mb-0">
                            <label className="text-sm font-medium text-gray-500">Current Password:</label>
                            <p className="text-gray-900">••••••••</p>
                        </div>
                        <CircularButton
                            text="Change Now"
                            onClick={onEdit}
                            color="white"
                            textColor="black"
                            className=""
                        />
                    </div>
                </div>
                
                {/* Horizontal Line */}
                <hr className="border-gray-200" />
                
                {/* Phone Field - Read Only */}
                <div className="py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium text-gray-500">Phone:</label>
                            <p className="text-gray-900">{userData?.phone || '+91 8003341496'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
