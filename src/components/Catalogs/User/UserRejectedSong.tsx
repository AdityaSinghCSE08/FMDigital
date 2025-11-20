import * as React from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { X, Check } from 'lucide-react';
const UserRejectedSong = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Extract data from navigation state or use empty values
  const rowData = location.state || {};
  
  // Status: 0 = Accepted/Approved, 1 = Rejected
  // Handle both number and string types for status
  const statusValue = rowData.status !== undefined ? rowData.status : 1;
  const status = typeof statusValue === 'string' ? parseInt(statusValue) : statusValue;
  const isApproved = status === 0;
  const publicImageBase = `${process.env.PUBLIC_URL}/images`;
  const approvedBadgeSrc = `${publicImageBase}/catalog/${encodeURIComponent('Approved Button.png')}`;
  const pendingBadgeSrc = `${publicImageBase}/catalog/${encodeURIComponent('Pending button.png')}`;

  const platformIconMap: Record<string, { label: string; src: string }> = {
    spotify: { label: 'Spotify', src: `${publicImageBase}/achievement/Spotify.png` },
    gaana: { label: 'Gaana', src: `${publicImageBase}/ganna.png` },
    ganna: { label: 'Gaana', src: `${publicImageBase}/ganna.png` }, // safeguard for spelling
    soundcloud: { label: 'SoundCloud', src: `${publicImageBase}/soundcloud.png` },
    youtubemusic: { label: 'YouTube Music', src: `${publicImageBase}/youtubemusic.png` },
    apple: { label: 'Apple Music', src: `${publicImageBase}/achievement/AppleMusic.png` },
    applemusic: { label: 'Apple Music', src: `${publicImageBase}/achievement/AppleMusic.png` },
    wynk: { label: 'Wynk', src: `${publicImageBase}/wynk.png` },
    saavn: { label: 'Saavn', src: `${publicImageBase}/achievement/JioSavan.png` },
    anghami: { label: 'Anghami', src: `${publicImageBase}/anghami.png` },
  };

  const defaultMajorPlatforms = ['Spotify', 'Saavn','Apple Music'];

  const normalizeKey = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normalizeMajorPlatforms = (value: unknown) => {
    if (Array.isArray(value)) {
      return value.filter((platform) => typeof platform === 'string' && platform.trim().length).map((platform) => platform.trim());
    }

    if (typeof value === 'string') {
      return value
        .split(',')
        .map((platform) => platform.trim())
        .filter(Boolean);
    }

    return [];
  };
  
  // Debug log to verify status (can remove later)
  console.log('Row Data:', rowData);
  console.log('Status Value:', statusValue, 'Parsed Status:', status, 'Is Approved:', isApproved);
  
  // Format date from YYYY-MM-DD to DD/MM/YYYY
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } catch {
      return dateStr;
    }
  };

  const songData = {
    id: id || rowData.id || '',
    label: rowData.label || '',
    primaryArtist: rowData.artist || '',
    releaseTitle: rowData.title || '',
    genre: rowData.genre || '',
    explicitVersion: '', // Not available in row data
    numberOfTracks: rowData.tracks || '',
    primaryDate: formatDate(rowData.date) || '',
    priceTier: '', // Not available in row data
    rejectionNote: 'This song is already live on all the DSPs, URL - https://gemini.google.com/u/2/app/5c22703b97af52f9',
    tracks: [
      {
        no: 1,
        title: rowData.title || '',
        artist: rowData.artist || '',
        genre: rowData.genre || '',
        catalogueNumber: '', // Not available in row data
        status: isApproved ? 'Approved' : 'Rejected',
        majorPlatforms: normalizeMajorPlatforms(rowData?.majorPlatforms)
      }
    ]
  };

  return (
    <div className="bg-gray-50 overflow-hidden flex flex-col">
      <div className="w-full mx-auto p-4 flex-1 flex flex-col">
        {/* Header */}
        {/* <div className="bg-indigo-700 text-white px-6 py-3  mb-1">
          <h1 className="text-xl font-semibold">Audio Catalog</h1>
        </div> */}
         <div className="bg-indigo-700 w-[50%] px-6 py-3 text-white mb-2">
            <div className="flex items-start">
              <h1 className="text-xl font-semibold">Audio Catalog</h1>
            </div>
          </div>

        {/* Status Notice */}
        {isApproved ? (
          <div className="bg-green-400 px-6 py-4 flex items-center gap-4 mb-1">
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-green-700 stroke-[3]" />
            </div>
            <span className="text-green-700 text-lg font-semibold">Approved</span>
          </div>
        ) : (
          <div className="bg-[#F1A4B1] px-6 py-4 flex items-center gap-4 mb-1">
            <div className="w-8 h-8 bg-[#F1A4B1] rounded-full border-2 border-red-700 flex items-center justify-center flex-shrink-0">
              <X className="w-5 h-5 text-red-600 stroke-[3]" />
            </div>
            <span className="text-red-600 text-lg font-semibold">Rejected</span>
            <span className="text-black text-sm">
              Note: {songData.rejectionNote}
            </span>
          </div>
        )}

        {/* Song Details Section */}
        <div className="bg-white p-6 flex gap-6 mb-1 border border-gray-200 rounded-md ">
          {/* Album Art */}
          <div>
          <div className="w-48 h-48 flex-shrink-0 rounded overflow-hidden ml-32 mr-16">
            <img 
              src="https://picsum.photos/400/400" 
              alt="Album cover" 
              className="w-full h-full object-cover"
            />
            </div>
          </div>

          {/* Metadata */}
          <div className="flex-3 flex  gap-12">
           
            {/* Left Column */}
            <div className="space-y-3 flex-1 min-w-[500px]">
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Label:</p>
                <p className="text-sm  text-gray-600">{songData.label || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Primary Artist:</p>
                <p className="text-sm  text-gray-600">{songData.primaryArtist || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Release Title:</p>
                <p className="text-sm  text-gray-600">{songData.releaseTitle || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Genre:</p>
                <p className="text-sm  text-gray-600">{songData.genre || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold text-gray-800 w-36">Explicit Version:</p>
                <p className="text-sm  text-gray-600">{songData.explicitVersion || '-'}</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3 flex-1 ">
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Number Of Tracks:</p>
                <p className="text-sm  text-gray-600">{songData.numberOfTracks || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Primary Date:</p>
                <p className="text-sm  text-gray-600">{songData.primaryDate || '-'}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-semibold w-36">Price Tier:</p>
                <p className="text-sm  text-gray-600">{songData.priceTier || '-'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracks Section */}
        <div className="px-1 py-4 border-b ">
            <h2 className="text-lg font-semibold text-gray-800">Tracks</h2>
          </div>
        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
         
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b text-xs text-gray-600 uppercase">
                  <th className="px-4 py-3 text-left">No.</th>
                  <th className="px-4 py-3 text-left">Title</th>
                  <th className="px-4 py-3 text-left">Artist</th>
                  <th className="px-4 py-3 text-left">Genre</th>
                  <th className="px-4 py-3 text-left">Catalogue Number</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Major Platforms</th>
                </tr>
              </thead>
              <tbody>
                {songData.tracks.map((track) => (
                  <tr key={track.no} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-600">{track.no}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{track.title || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{track.artist || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{track.genre || '-'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{track.catalogueNumber || '-'}</td>
                    <td className="px-4 py-3">
                      <img
                        src={isApproved ? approvedBadgeSrc : pendingBadgeSrc}
                        alt={track.status}
                        className="h-8 w-auto"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {isApproved ? (
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-0">
                            {(track.majorPlatforms && track.majorPlatforms.length ? track.majorPlatforms : defaultMajorPlatforms).map((platform) => {
                              const key = normalizeKey(platform);
                              const iconInfo = platformIconMap[key];

                              if (!iconInfo) {
                                return (
                                  <span key={`${track.no}-${platform}`} className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600 border">
                                    {platform}
                                  </span>
                                );
                              }

                              return (
                                <div
                                  key={`${track.no}-${platform}`}
                                  className="  flex items-center justify-center"
                                  title={iconInfo.label}
                                >
                                  <img src={iconInfo.src} alt={iconInfo.label} className="w-5 h-5 object-contain" />
                                </div>
                              );
                            })}
                          </div>
                          <p className="text-[11px] text-gray-500 flex items-center gap-1">
                            <span className="text-gray-400 text-base leading-none">ℹ</span>
                            Some stores do not provide direct links. Visit the store and search manually.
                          </p>
                        </div>
                      ) : (
                        <div className="h-6" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserRejectedSong;

