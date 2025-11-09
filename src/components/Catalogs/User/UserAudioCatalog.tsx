import * as React from "react";
import { useState } from 'react';
import { Check } from 'lucide-react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const UserAudioCatalog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTitle, setSearchTitle] = React.useState('');
  const [filterAll, setFilterAll] = React.useState('All');

  const audioData = [
    { id: 1, title: 'Baalam', artist: 'Sonu Bandiwal', genre: 'Indian', label: 'FM Digital', tracks: 1, date: '2025-04-20' },
    { id: 2, title: 'Call Je Hove', artist: 'Ajay', genre: 'Indie', label: 'FM Digital', tracks: 1, date: '2024-11-04' },
    { id: 3, title: 'Aij Kar', artist: 'Ajay', genre: 'Indian', label: 'FM FEEL music', tracks: 1, date: '2024-09-28' },
    { id: 4, title: 'Chand Mera', artist: 'Sonu Bandiwal', genre: 'Folk', label: 'FM FEEL music', tracks: 1, date: '2024-04-15' },
    { id: 5, title: 'Pagal Si Ladki', artist: 'Alok', genre: 'R & B', label: 'FM FEEL music', tracks: 1, date: '2023-01-07' },
    { id: 6, title: 'Bangla Bhadu', artist: 'Satpanth ji', genre: 'Electronic', label: 'FM FEEL music', tracks: 1, date: '2022-11-12' },
    { id: 7, title: 'Chunnea', artist: 'Ajit Datt', genre: 'Folk', label: 'FM FEEL music', tracks: 1, date: '2022-11-01' },
    { id: 8, title: 'Ganpati Bappa Ki Sawar', artist: 'Chandra Srivam', genre: 'Devotional', label: 'FM Digital', tracks: 1, date: '2022-08-30' },
    { id: 9, title: 'Violent Jatt', artist: 'Ajay', genre: 'Folk', label: 'FM Digital', tracks: 1, date: '2021-11-18' },
    { id: 10, title: 'Pyaar Nai', artist: 'Ajay', genre: 'Folk', label: 'FM Digital', tracks: 1, date: '2021-02-27' },
  ];

  return (
    <div className=" bg-gray-50 overflow-hidden flex flex-col">
      <div className="w-full mx-auto p-4 flex-1 flex flex-col">
        {/* Header */}
        <div className=" text-white text-center  rounded-t-lg flex justify-between items-center mb-1">
          {/* <h1 className="text-xl font-semibold">Audio Catalog</h1> */}
          <div className="bg-indigo-700 w-[50%] px-6 py-1">
            <div className="flex items-start">
              <h1 className="text-xl font-semibold">Audio Catalog</h1>
            </div>
          </div>

          <button 
            onClick={() => navigate('/user/catalog/video')}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Go To Video Catalog
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
            <option>Indian</option>
            <option>Folk</option>
            <option>Electronic</option>
          </select>
          <div className="ml-auto text-sm text-gray-600">
            Total Releases : <span className="font-semibold">15</span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100 border-b text-xs text-gray-600 uppercase">
                <th className="px-4 py-3 text-left w-24">NO.</th>
                <th className="px-4 py-3 text-left w-24">STATUS</th>
                <th className="px-4 py-3 text-left w-36">ALBUM ARTWORK</th>
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
              {audioData.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
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
                  <td className="px-4 py-3 text-sm text-gray-700">{item.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.artist}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.genre}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.label}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.tracks}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.date}</td>
                  <td className="px-4 py-3">
                    <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-1.5 rounded text-sm font-medium">
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
          <button className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-gray-700">
            <FiChevronLeft color="white" />
          </button>
          <span className="text-sm text-gray-600">Page 1</span>
          <button className="w-8 h-8 bg-gray-800 hover:bg-gray-900 rounded flex items-center justify-center text-white">
           <FiChevronRight color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAudioCatalog;