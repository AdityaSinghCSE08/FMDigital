import * as React from "react";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiEdit2 } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import CircularButton from "../SharedComponent/CircularButton";

interface SocialMediaData {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    spotify?: string;
    applemusic?: string;
}

interface SocialMediaCardProps {
    socialMedia?: SocialMediaData;
    onEdit?: () => void;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ socialMedia, onEdit }) => {
    const socialPlatforms = [
        {
            name: 'Instagram',
            icon: FiInstagram,
            value: socialMedia?.instagram,
            color: 'text-pink-500',
            bgColor: 'bg-pink-50'
        },
        {
            name: 'Facebook',
            icon: FiFacebook,
            value: socialMedia?.facebook,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            name: 'Youtube',
            icon: FaYoutube,
            value: socialMedia?.youtube,
            color: 'text-red-500',
            bgColor: 'bg-red-50'
        },
        {
            name: 'Spotify',
            icon: FiTwitter,
            value: socialMedia?.spotify,
            color: 'text-blue-400',
            bgColor: 'bg-blue-50'
        },
        {
            name: 'Apple Music',
            icon: FiLinkedin,
            value: socialMedia?.applemusic,
            color: 'text-blue-700',
            bgColor: 'bg-blue-50'
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Social Media</h2>
                <CircularButton
                    text="Update"
                    onClick={onEdit}
                    color="white"
                    textColor="black"
                    className=""
                />
                {/* <button
                    onClick={onEdit}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-300 rounded-lg transition-colors"
                >
                    <FiEdit2 size={14} />
                    Update
                </button> */}
            </div>

            <div className="space-y-0">
                {socialPlatforms.map((platform, index) => {
                    const IconComponent = platform.icon;
                    return (
                        <React.Fragment key={platform.name}>
                            <div className="py-2">
                                <div className="flex items-center gap-4">
                                    <label className="text-sm font-medium text-gray-500">{platform.name}:</label>
                                    <p className="text-gray-900 text-sm break-all">
                                        {platform.value || ''}
                                    </p>
                                </div>
                            </div>
                            {index < socialPlatforms.length - 1 && (
                                <hr className="border-gray-200" />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialMediaCard;
