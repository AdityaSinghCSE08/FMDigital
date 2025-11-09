import * as React from "react";
import ProfileCard from "../ProfileCard";
import AddressCard from "../AddressCard";
import SocialMediaCard from "../SocialMediaCard";
import BillingCard from "../BillingCard";
import { GlobalFonts } from "../../../styles/globalFonts";

// Define interfaces for the props
interface ProfileData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  address: {
    line: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
}

interface SocialMediaData {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  linkedin: string;
}

interface BillingData {
  beneficiaryName: string;
  bankName: string;
  ibanAccount: string;
  ifscCode: string;
  swiftCode: string;
}

interface AccountOverviewProps {
  userData: ProfileData;
  socialMediaData: SocialMediaData;
  billingData: BillingData;
  onEditProfile: () => void;
  onEditSocialMedia: () => void;
  onUpgrade: () => void;
  onManageSubscription: () => void;
}

const AccountOverview: React.FC<AccountOverviewProps> = ({
  userData,
  socialMediaData,
  billingData,
  onEditProfile,
  onEditSocialMedia,
  onUpgrade,
  onManageSubscription,
}) => {
  return (
    <>
      <GlobalFonts />
      <div className="subscription-container">
        <div>
          <div className=" pl-6 pt-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Your Profile
            </h2>
          </div>
          {/* First Row - Profile, Address, Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProfileCard userData={userData} onEdit={onEditProfile} />
            <AddressCard userData={userData} onEdit={onEditProfile} />
            <SocialMediaCard
              socialMedia={socialMediaData}
              onEdit={onEditSocialMedia}
            />
          </div>

          {/* Second Row - Billing */}
          <div className="grid grid-cols-1 mt-12">
            <BillingCard
              billingData={billingData}
              onEdit={onEditProfile}
              onUpgrade={onUpgrade}
              onManageSubscription={onManageSubscription}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
