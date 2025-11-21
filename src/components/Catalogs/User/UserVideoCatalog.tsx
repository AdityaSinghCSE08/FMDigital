import * as React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserVideoCatalog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState("");
  const [filterAll, setFilterAll] = useState("All");

  const videoData = [
    {
      id: 1,
      title: "Summer Vibes",
      artist: "DJ Shadow",
      genre: "Electronic",
      label: "FM Digital",
      tracks: 1,
      date: "2025-03-15",
    },
    {
      id: 2,
      title: "Mountain Echo",
      artist: "Nature Sounds",
      genre: "Ambient",
      label: "FM Digital",
      tracks: 1,
      date: "2024-12-20",
    },
    {
      id: 3,
      title: "City Lights",
      artist: "Urban Beats",
      genre: "Hip Hop",
      label: "FM FEEL music",
      tracks: 1,
      date: "2024-10-10",
    },
    {
      id: 4,
      title: "Ocean Waves",
      artist: "Relaxation Pro",
      genre: "Meditation",
      label: "FM FEEL music",
      tracks: 1,
      date: "2024-08-05",
    },
    {
      id: 5,
      title: "Thunder Storm",
      artist: "Nature Sounds",
      genre: "Ambient",
      label: "FM Digital",
      tracks: 1,
      date: "2024-06-12",
    },
    {
      id: 6,
      title: "Sunset Drive",
      artist: "Chill Vibes",
      genre: "Chillout",
      label: "FM FEEL music",
      tracks: 1,
      date: "2024-04-18",
    },
    {
      id: 7,
      title: "Forest Path",
      artist: "Nature Walk",
      genre: "Ambient",
      label: "FM Digital",
      tracks: 1,
      date: "2024-02-22",
    },
    {
      id: 8,
      title: "Neon Dreams",
      artist: "Synthwave Pro",
      genre: "Synthwave",
      label: "FM FEEL music",
      tracks: 1,
      date: "2023-12-30",
    },
    {
      id: 9,
      title: "Jazz Night",
      artist: "Smooth Jazz",
      genre: "Jazz",
      label: "FM Digital",
      tracks: 1,
      date: "2023-10-14",
    },
    {
      id: 10,
      title: "Rock Festival",
      artist: "Power Rocks",
      genre: "Rock",
      label: "FM FEEL music",
      tracks: 1,
      date: "2023-08-08",
    },
  ];

  return (
    <div className=" bg-gray-50 overflow-hidden flex flex-col">
      <div className="w-full mx-auto p-4 flex-1 flex flex-col">
        {/* Header */}
        <div className=" text-white text-center  rounded-t-lg flex justify-between items-center mb-1">
          <div className="bg-indigo-700 w-[50%] px-6 py-1 rounded">
            <div className="flex items-start">
              <h1 className="text-xl font-semibold">Video Catalog</h1>
            </div>
          </div>

          <button
            onClick={() => navigate("/user/catalog/audio")}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Go To Audio Catalog
          </button>

         
        </div>

        {/* Search Bar */}
        <div className="bg-gray-100 rounded-md shadow-md w-full mt-1 mb-3 px-6 py-3 border-b flex items-center gap-4">
          <input
            type="text"
            placeholder="Search Title"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 max-w-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={filterAll}
            onChange={(e) => setFilterAll(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>All</option>
            <option>Electronic</option>
            <option>Ambient</option>
            <option>Hip Hop</option>
          </select>
          <div className="ml-auto text-sm text-gray-600">
            Total Releases : <span className="font-semibold">15</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white overflow-x-auto flex-1 rounded-lg border border-gray-200">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100 border-b text-xs text-gray-600 uppercase rounded">
                <th className="px-4 py-3 text-left w-24">NO.</th>
                <th className="px-4 py-3 text-left w-24">STATUS</th>
                <th className="px-4 py-3 text-left w-36">VIDEO THUMBNAIL</th>
                <th className="px-4 py-3 text-left w-40">TITLE</th>
                <th className="px-4 py-3 text-left w-40">ARTIST NAME</th>
                <th className="px-4 py-3 text-left w-40">GENRE</th>
                <th className="px-4 py-3 text-left w-40">LABEL</th>
                <th className="px-4 py-3 text-left w-40"># OF TRACKS</th>
                <th className="px-4 py-3 text-left w-40">RELEASE DATE</th>
                <th className="px-4 py-3 text-left w-40">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {videoData.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-green-500 stroke-[3]" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <img 
                        src="https://picsum.photos/200/300" 
                        alt="Album cover" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {item.artist}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {item.genre}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {item.label}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {item.tracks}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600">
                    {item.date}
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-1.5 rounded text-xs font-medium">
                      Stores
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-6 py-4 rounded-b-lg flex justify-end items-center gap-2">
          <button className="w-6 h-6 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-gray-700">
            <FiChevronLeft color="white" />
          </button>
          <span className="text-sm text-gray-600">Page 1</span>
          <button className="w-6 h-6 bg-gray-800 hover:bg-gray-900 rounded flex items-center justify-center text-white">
            <FiChevronRight color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserVideoCatalog;
