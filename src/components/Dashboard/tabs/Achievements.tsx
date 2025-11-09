import * as React from "react";
import { GlobalFonts } from "../../../styles/globalFonts";

// Custom CSS for checkbox
const checkboxStyles = `
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #9CA3AF;
    border-radius: 0.25rem;
    margin: 0;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input[type="checkbox"]:checked {
    background-color: #59bb6a;
    border-color: #10B981;
  }
  
  input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-1px, -1px);
  }
`;

const tenureAchievements = [
  {
    id: "1year",
    years: "1 Year",
    title: "FM Digital Official Starter",
    badge: "Bronze Badge",
    reward: "Digital Badge in Dashboard",
  },
  {
    id: "2year",
    years: "2 Year",
    title: "Trusted Partner",
    badge: "Silver Badge",
    reward: "Get Shoutout on FM Digital Official's Social Media",
  },
  {
    id: "3year",
    years: "3 Year",
    title: "Recognized Contributor",
    badge: "Gold Badge",
    reward: "Gold Badge + Social Media Mention",
  },
  {
    id: "5year",
    years: "5 Year",
    title: "Core Collaborator",
    badge: "Platinum Badge",
    reward: "Physical Trophy + Website Spotlight",
  },
  {
    id: "10year",
    years: "10 Year",
    title: "Legacy Partner",
    badge: "Diamond Badge",
    reward: "Premium Trophy + Honor Roll Tribute",
  },
];

const trackAchievements = [
  {
    id: "1track",
    tracks: "1 Track",
    title: "FM Digital Official Starter",
    reward: "Welcome Badge + Profile activation",
    locked: false,
    showApplyButton: false,
    showIcons: false,
  },
  {
    id: "3tracks",
    tracks: "3 Tracks",
    title: "Emerging Artist",
    reward: "Eligible to apply for YouTube OAC setup",
    locked: false,
    showApplyButton: true,
    buttonText: "Apply Now",
    showIcons: false,
  },
  {
    id: "10tracks",
    tracks: "10 Tracks",
    title: "Active Creator",
    reward:
      "Eligible for profile verification on major DSPs (Spotify, Apple Music, etc.)",
    locked: false,
    showApplyButton: false,
    showIcons: true,
  },
  {
    id: "50tracks",
    tracks: "50+ Tracks",
    title: "Pro Contributor",
    reward: "Eligible for Exclusive Campaign Deal + Channel Branding Support",
    locked: false,
    showApplyButton: true,
    buttonText: "Apply Now",
    showIcons: false,
  },
];

interface AchievementsProps {
  checkedAchievements: Record<string, boolean>;
  toggleAchievement: (achievementId: string, isLocked?: boolean) => void;
}

const Achievements: React.FC<AchievementsProps> = ({
  checkedAchievements,
  toggleAchievement,
}) => {
  const tenureRowsRef = React.useRef<HTMLDivElement>(null);
  const trackRowsRef = React.useRef<HTMLDivElement>(null);

  // Add the checkbox style to the document head
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = checkboxStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Function to equalize row heights
  const equalizeRowHeights = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const rows = ref.current.getElementsByClassName("achievement-row");
      let maxHeight = 0;
      Array.from(rows).forEach((row) => {
        (row as HTMLElement).style.minHeight = "auto"; // Reset
        maxHeight = Math.max(maxHeight, (row as HTMLElement).offsetHeight);
      });
      Array.from(rows).forEach((row) => {
        (row as HTMLElement).style.minHeight = `${maxHeight}px`;
      });
    }
  };

  // Equalize heights on mount and resize
  React.useEffect(() => {
    equalizeRowHeights(tenureRowsRef);
    equalizeRowHeights(trackRowsRef);

    const handleResize = () => {
      equalizeRowHeights(tenureRowsRef);
      equalizeRowHeights(trackRowsRef);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <GlobalFonts />
      <div className="subscription-container">
        <div className="bg-white rounded-lg ">
          <div className="ml-2 pt-1 pl-2 pr-2   md:pb-0">
            <div className="mb-1  ">
              <p className="text-black-800 text-sm mb-2">
                Celebrating your journey and growth with FM Digital Official
              </p>
              <h4 className="text-xl font-semibold text-black-900 ">
                Tenure Achievement Tiers
              </h4>
            </div>

            {/* Tenure Achievement Table */}
            <div className="mb-4 max-w-3xl ">
              {/* Header for larger screens */}
              <div className="hidden md:grid md:grid-cols-[18%_19%_22%_28%_13%] gap-3 px-2">
                <h3 className="text-sm font-medium text-black-900">
                  Years with Us
                </h3>
                <h3 className="text-sm font-medium text-black-900">
                  Achievement Title
                </h3>
                <h3 className="text-sm font-medium text-black-900">
                  Badge Type
                </h3>
                <h3 className="text-sm font-medium text-black-900">Reward</h3>
                {/* <h3 className="text-sm font-medium text-black-900 text-center">Status</h3> */}
              </div>
              {/* Achievement Rows */}
              
              <div className="space-y-2 mt-2" ref={tenureRowsRef}>
                {tenureAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="achievement-row border-2 border-[#00b768] rounded-lg p-2 hover:bg-gray-50 flex items-center"
                  >
                    <div className="w-full grid grid-cols-2 md:grid-cols-[18%_22%_22%_30%_12%] gap-x-2 gap-y-2">
                      {/* Data points with labels for mobile */}
                      <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                        <span className="font-medium text-xs text-gray-600 md:hidden">
                          Years with Us
                        </span>
                        <span className="text-xs text-black-900 break-words text-right md:text-left">
                          {achievement.years}
                        </span>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                        <span className="font-medium text-xs text-gray-600 md:hidden">
                          Achievement Title
                        </span>
                        <span className="text-xs text-black-900 break-words text-right md:text-left">
                          {achievement.title}
                        </span>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                        <span className="font-medium text-xs text-gray-600 md:hidden">
                          Badge Type
                        </span>
                        <span className="text-xs text-black-900 break-words text-right md:text-left">
                          {achievement.badge}
                        </span>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                        <span className="font-medium text-xs text-gray-600 md:hidden">
                          Reward
                        </span>
                        <span className="text-xs text-black-900 break-words text-right md:text-left">
                          {achievement.reward}
                        </span>
                      </div>
                      <div className="col-span-2 md:col-span-1 flex  pr-1 margin-auto items-center alignitems-center">
                        {/* <span className="font-medium text-sm text-gray-600 md:hidden">Status</span> */}
                        <input
                          type="checkbox"
                          checked={checkedAchievements[achievement.id] || false}
                          onChange={() => toggleAchievement(achievement.id)}
                          className="focus:ring-0 focus:ring-offset-0 w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                ))}
             
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-gray-200" />

          <div className="pl-2 pr-2 pt-2  md:pb-0">
            {/* Unlock Message */}
            <div className=" ">
              <p className="text-black-800 text-sm">
                Unlock new features and perks as you release more music with FM
                Digital Official.
              </p>
            </div>

            {/* Tracks Achievement Section */}
            <div className="">
              <h2 className="text-xl font-semibold text-black-900 mb-2 ">
                Tracks Achievement Tiers
              </h2>
              <div className="mb-4 max-w-3xl ">
                {/* Header for larger screens */}
                <div className="hidden md:grid md:grid-cols-[28%_18%_43%_5%] gap-3 px-2 py-1">
                  <h3 className="text-sm font-medium text-black-900">
                    Total Tracks Uploaded
                  </h3>
                  <h3 className="text-sm font-medium text-black-900">Title</h3>
                  <h3 className="text-sm font-medium text-black-900">
                    Reward / Unlocks
                  </h3>
                  {/* <h3 className="text-sm font-medium text-black-900 text-center">Status</h3> */}
                </div>
                {/* Achievement Rows */}
                
                  <div className="space-y-2 mt-2" ref={trackRowsRef}>
                  {trackAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`achievement-row border-2 border-[#00b768] rounded-lg p-2 hover:bg-gray-50 ${[1, 3].includes(trackAchievements.indexOf(achievement)) ? 'pt-4' : ''}`}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-[22%_18%_43%_16%] gap-x-3 gap-y-2 items-center">
                        <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                          <span className="font-medium text-sm text-gray-600 md:hidden">
                            Total Tracks Uploaded
                          </span>
                          <span className="text-xs text-black-900 break-words text-right md:text-left">
                            {achievement.tracks}
                          </span>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                          <span className="font-medium text-sm text-gray-600 md:hidden">
                            Title
                          </span>
                          <span className="text-xs text-black-900 break-words text-right md:text-left">
                            {achievement.title}
                          </span>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex justify-between items-center md:flex md:items-center">
                          <span className="font-medium text-sm text-gray-600 md:hidden">
                            Reward / Unlocks
                          </span>
                          <span className="text-xs text-black-900 break-words text-right md:text-left">
                            {achievement.reward}
                          </span>
                        </div>
                        <div className="col-span-2 md:col-span-1 flex  items-center justify-center gap-2 bg-red-500 relative">
                          {/* <span className="font-medium text-sm text-gray-600 md:hidden">Status</span> */}
                          <div className="flex items-center gap-1 md:gap-2 justify-center absolute top-100">
                            <input
                              type="checkbox"
                              checked={
                                checkedAchievements[achievement.id] || false
                              }
                              onChange={() =>
                                toggleAchievement(
                                  achievement.id,
                                  achievement.locked
                                )
                              }
                              disabled={achievement.locked}
                              className={`focus:ring-0 focus:ring-offset-0 ${
                                achievement.locked
                                  ? "opacity-50 cursor-not-allowed"
                                  : "cursor-pointer"
                              }`}
                            />
                            {/* {achievement.showApplyButton && (
                              <button
                                onClick={() => {
                                  // Add your click handler logic here
                                  console.log(`${achievement.buttonText} clicked`);
                                }}
                                className="bg-[#00b768] text-white px-3 pl-20 py-1 rounded-lg shadow-md text-sm whitespace-nowrap"
                              >
                                {achievement.buttonText}
                              </button>
                            )} */}
                            {achievement.showIcons && (
                              <div className="flex gap -mr-16  absolute left-16">
                                <div className="w-6 h-20  rounded-full flex items-center justify-center text-white text-xs">
                                  <img
                                    src="/images/achievement/Spotify.svg"
                                    alt="FM DIGITAL"
                                    className="h-20 "
                                  />
                                </div>
                                <div className="w-6 h-20  rounded-full flex items-center justify-center text-white text-xs">
                                  <img
                                    src="/images/achievement/JioSavan.svg"
                                    alt="FM DIGITAL"
                                    className="h-20  "
                                  />
                                </div>
                                <div className="w-6 h-15  rounded-full flex items-center justify-center text-white text-xs">
                                  <img
                                    src="/images/achievement/Apple-music.svg"
                                    alt="FM DIGITAL"
                                    className="h-20  "
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                          {achievement.showApplyButton && (
                            <button
                              onClick={() => {
                                // Add your click handler logic here
                                console.log(
                                  `${achievement.buttonText} clicked`
                                );
                              }}
                              className="bg-[#00b768] text-white px-3 ml-28 py-1 rounded-lg shadow-md text-sm whitespace-nowrap absolute left-0"
                            >
                              {achievement.buttonText}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
