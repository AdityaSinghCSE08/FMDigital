import * as React from "react";
import { useNavigate } from 'react-router-dom';


export default function MusicReleaseCards() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-60px)] bg-gray-50 flex items-center justify-center pl-8 pr-8">
      <div className="flex flex-wrap gap-24 justify-center max-w-12xl -mt-40">
        {/* Audio Release Card */}
        <div
          className="bg-[#262626] rounded-3xl p-8 w-80 h-[28rem] relative overflow-hidden shadow-2xl cursor-pointer"
          onClick={() => navigate('/ReleaseInfo/AudioRelease')}
        >
          <img src="/images/release/Full Card.svg" alt="Audio Release" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Video Release Card */}
        <div
          className="bg-[#262626] rounded-3xl p-8 w-80 h-[28rem]  relative overflow-hidden shadow-2xl cursor-pointer"
          onClick={() => navigate('/ReleaseInfo/VideoRelease')}
        >
          <img src="/images/release/Full Card Video.svg" alt="Video Release" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}