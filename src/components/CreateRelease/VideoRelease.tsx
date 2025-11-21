import * as React from "react";
import { CalendarClock } from 'lucide-react';
import MusicVideoGuidelinesModal from './MusicVideoGuidelinesModal';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const VideoPlatformForm = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [thumbnailError, setThumbnailError] = React.useState('');

  
  const [selectedPlatforms, setSelectedPlatforms] = React.useState({
    vevoCTV: true,
    comcastVevo: false,
    fetchVevo: false,
    netrangeVevo: false,
    plutoVevo: false,
    rokuVevo: false,
    shawVevo: false,
    vevoCTVCurated: false,
    vixVevo: false,
    youtubeVevo: false,
    localNowVevo: false,
    amazonFreevee: false,
    amazonFireTV: false,
    coxVevo: false,
    foxtelVevo: false,
    philoVevoCTV: false,
    rtlaxTV: false,
    philoVevo: false,
    slingVevo: false,
    vewdVevo1: false,
    vizioVevo: false,
    vewdVevo2: false,
    appleTVVevo: false,
    huluVevo: false,
    googleTVVevo: false,
    plexVevo: false,
    rogersIgnite: false,
    samsungTVPlus: false,
    tellyVevo: false,
    vidaaVevo1: false,
    xurnoPlay: false,
    vidaaVevo2: false,
    fity: false,
    boomplay: false,
    spotify: false,
    tidal: false,
    vi: false,
    xite: false,
    zingMP3: false,
    tencent: false,
    rokiVideo: false,
    lineMusic: false,
    facebookPMV: false
  });

  type PlatformId = keyof typeof selectedPlatforms;

  interface PlatformItem {
    id: PlatformId;
    label: string;
  }

  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [actorName, setActorName] = React.useState('');
  const [actressName, setActressName] = React.useState('');
  const [actorNameError, setActorNameError] = React.useState('');
  const [actressNameError, setActressNameError] = React.useState('');
  const [releaseDate, setReleaseDate] = React.useState<Date | null>(null);

  const handleCapitalizedCaseValidation = (value: string, fieldName: string) => {
    const capitalizedCaseRegex = /^[A-Z][a-z]*(?:\s[A-Z][a-z]*)*$/;
    if (value && !capitalizedCaseRegex.test(value)) {
      return `${fieldName} must be in capitalized case (e.g., John Doe).`;
    }
    return '';
  };

  const handleActorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setActorName(value);
    setActorNameError(handleCapitalizedCaseValidation(value, 'Actor Name'));
    };

    const handleActressNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setActressName(value);
    setActressNameError(handleCapitalizedCaseValidation(value, 'Actress Name'));
    };


  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setThumbnailError('File size must be less than 2MB.');
        setThumbnail(null);
      } else {
        setThumbnailError('');
        setThumbnail(file);
      }
    }
  };

  const handlePlatformToggle = (platform: keyof typeof selectedPlatforms) => {
    setSelectedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const platforms: PlatformItem[][] = [
    // Column 1
    [
      { id: 'vevoCTV', label: 'Vevo CTV (Curated)' },
      { id: 'comcastVevo', label: 'Comcast via Vevo CTV' },
      { id: 'fetchVevo', label: 'Fetch via Vevo CTV' },
      { id: 'netrangeVevo', label: 'NetRange via Vevo CTV' },
      { id: 'plutoVevo', label: 'Pluto TV via Vevo CTV' },
      { id: 'rokuVevo', label: 'Roku via Vevo CTV' },
      { id: 'shawVevo', label: 'Shaw TV via Vevo CTV' },
      { id: 'vevoCTVCurated', label: 'Vevo CTV (Curated)' },
      { id: 'vixVevo', label: 'VIX via Vevo CTV' },
      { id: 'youtubeVevo', label: 'YouTube via Vevo CTV' },
      { id: 'localNowVevo', label: 'Local Now via Vevo CTV' }
    ],
    // Column 2
    [
      { id: 'amazonFreevee', label: 'Amazon Freevee via Vevo CTV' },
      { id: 'amazonFireTV', label: 'Amazon Fire TV via Vevo CTV' },
      { id: 'coxVevo', label: 'COX via Vevo CTV' },
      { id: 'foxtelVevo', label: 'Foxtel via Vevo CTV' },
      { id: 'philoVevoCTV', label: 'Philo via Vevo CTV' },
      { id: 'rtlaxTV', label: 'rtlax TV via Vevo CTV' },
      { id: 'philoVevo', label: 'Philo via Vevo CTV' },
      { id: 'slingVevo', label: 'Sling via Vevo CTV' },
      { id: 'vewdVevo1', label: 'Vewd via Vevo CTV' },
      { id: 'vizioVevo', label: 'VIZIO via Vevo CTV' },
      { id: 'vewdVevo2', label: 'Vewd via Vevo CTV' }
    ],
    // Column 3
    [
      { id: 'appleTVVevo', label: 'Apple TV via Vevo CTV' },
      { id: 'huluVevo', label: 'Hulu via Vevo CTV' },
      { id: 'googleTVVevo', label: 'Google TV via Vevo CTV' },
      { id: 'plexVevo', label: 'Plex via Vevo CTV' },
      { id: 'rogersIgnite', label: 'Rogers Ignite TV via Vevo CTV' },
      { id: 'samsungTVPlus', label: 'Samsung TV Plus via Vevo CTV' },
      { id: 'tellyVevo', label: 'Telly via Vevo CTV' },
      { id: 'vidaaVevo1', label: 'VIDAA via Vevo CTV' },
      { id: 'xurnoPlay', label: 'Xumo Play via Vevo CTV' },
      { id: 'vidaaVevo2', label: 'VIDAA via Vevo CTV' },
      { id: 'fity', label: 'Fity' }
    ],
    // Column 4
    [
      { id: 'boomplay', label: 'Boomplay' },
      { id: 'spotify', label: 'Spotify' },
      { id: 'tidal', label: 'Tidal' },
      { id: 'vi', label: 'VI' },
      { id: 'xite', label: 'Xite' },
      { id: 'zingMP3', label: 'ZingMP3' },
      { id: 'tencent', label: 'Tencent' },
      { id: 'rokiVideo', label: 'ROKI Video' },
      { id: 'lineMusic', label: 'Line Music' },
      { id: 'facebookPMV', label: 'Facebook PMV' }
    ]
  ];

  return (
    <div className="pt-[40px] px-[80px]">
      <div className=" rounded-lg">
        <div className=" rounded-lg">
          {/* Top Section with Thumbnail and Form Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-[20%_75%] gap-8 mb-0 ml-32">
            {/* Left Column - Thumbnail Upload */}
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleThumbnailChange}
                className="hidden"
                accept="image/*"
              />
              <div 
                className="border-2 border border-gray-300 rounded-lg p-4 text-center bg-gray-50 cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Upload Video Thumbnail</p>
                <p className="text-gray-400 text-xs mt-1">Size - 1920px x 1080px</p>
              </div>
              {thumbnail && <p className="text-green-500 text-xs mt-1">{thumbnail.name}</p>}
              {thumbnailError && <p className="text-red-500 text-xs mt-1">{thumbnailError}</p>}
              <div className="text-center mt-3">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }} className="text-cyan-500 text-sm">Music Video Guidelines</a>
              </div>
            </div>

            {isModalOpen && <MusicVideoGuidelinesModal onClose={() => setIsModalOpen(false)} />}


            {/* Right Column - Form Fields */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Select Release<span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Select Release</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Select Audio<span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Select Audio</option>
                  </select>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700">
                    Download link to video<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Make Sure The File/transfer Is Unlocked."
                    className="w-full px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">Preferred sites : wetransfer, Dropbox, GoogleDrive, Formsmash</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-700">
                    Release date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <CalendarClock className="absolute left-3 top-2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                    <DatePicker
                      selected={releaseDate}
                      onChange={(date: Date | null) => setReleaseDate(date)}
                      placeholderText="Select release date"
                      dateFormat="MM/dd/yyyy"
                      className="w-full pl-10 pr-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      wrapperClassName="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 ">Video UPC</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 ">Video ISRC</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 ">
                    Actor Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Separate them using comma (,)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={actorName}
                    onChange={handleActorNameChange}
                  />
                  {actorNameError && <p className="text-red-500 text-xs mt-1">{actorNameError}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 ">Actress Name</label>
                  <input
                    type="text"
                    placeholder="Separate them using comma (,)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    value={actressName}
                    onChange={handleActressNameChange}
                  />
                  {actressNameError && <p className="text-red-500 text-xs mt-1">{actressNameError}</p>}
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700">
                    Language<span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Select Language</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 ">Secondary Language (Dubbing)</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500">
                    <option>Select Language</option>
                  </select>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                <label className="block text-sm text-gray-700">Video URL (If Released Previous)</label>
                <input
                  type="text"
                  placeholder="Paste Content Url If Released Previously"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                </div>
              </div>
            </div>
          </div>

          {/* Video Platform Section */}
          <div className="mt-0">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Video Platform (8+)</h2>
              <input
                type="checkbox"
                checked={Object.values(selectedPlatforms).filter(Boolean).length > 0}
                onChange={() => {}}
                className="w-5 h-5 accent-pink-500"
              />
            </div>

            {/* Platform Grid */}
            <div className="grid grid-cols-4 gap-2 ml-32">
              {platforms.map((column, colIndex) => (
                <div key={colIndex} className="space-y-1">
                  {column.map((platform) => (
                    <label key={platform.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedPlatforms[platform.id]}
                        onChange={() => handlePlatformToggle(platform.id)}
                        className="w-4 h-4 accent-pink-500"
                      />
                      <span className="text-sm text-gray-700">{platform.label}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>

            {/* Terms Checkbox */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 accent-pink-500"
              />
              <span className="text-sm text-gray-600">
                I understand and agree to the{' '}
                <a href="#" className="text-cyan-500 underline">FM Digital Distribution Terms & Privacy Policy.</a>
              </span>
            </div>

            {/* Submit Button */}
            <div className="mt-1 flex justify-center items-center">
              <button className="bg-gray-800 text-white px-8 py-1 rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2">
                <SaveOutlinedIcon className="text-grey" />
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlatformForm;