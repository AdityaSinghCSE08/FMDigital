import * as React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function ChatLayout() {
  const [query, setQuery] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [responseCharCount, setResponseCharCount] = React.useState(0);

  const handleSubmit = () => {
    if (query.trim()) {
      setSubmitted(true);
      // Add your submit logic here
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="p-2">
        <div className="chat-container mt-2 border-2 border-green-500 rounded-xl pl-4 pt-4 pr-4 pb-1 bg-white shadow-sm  max-w-[1400px] mx-auto">

      {/* <div className="chat-container border-2 border-green-500 rounded-xl pl-4 pt-4 pr-4 pb-1 bg-white shadow-sm max-w-[1400px] mx-auto"> */}
        {/* Dropdown - Hidden after submission */}
        {!submitted && (
          <div className="mb-6">
            <select 
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg text-gray-500 bg-white appearance-none pr-10 bg-no-repeat bg-right" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, 
                backgroundPosition: 'right 0.75rem center', 
                backgroundSize: '12px'
              }}
            >
              <option>Select a option</option>
            </select>
          </div>
        )}

        {/* Response input area */}
        <div className="border-gray-200">
          <div className="flex items-end gap-3">
            <div className="flex-1 pr-12">
              <textarea
                className="w-full h-12 p-2 bg-transparent border-b border-gray-300 focus:border-gray-500 focus:ring-0 resize-none outline-none text-sm"
                placeholder="Ask whatever you want..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setResponseCharCount(e.target.value.length);
                }}
                onKeyDown={handleKeyDown}
                maxLength={1000}
                rows={2}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center p-1 w-full mb-2">
            {/* Add Attachment Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <AddCircleOutlineOutlinedIcon />
                <span className="font-medium text-sm">Add Attachment</span>
                <span className="text-xs text-blue-600 underline">Supported file - PDF, Doc, JPG, PNG, or TXT</span>
              </button>
            </div>

            {/* Character Counter and Submit Button */}
            <div className="mt-4 sm:mt-0 flex items-center gap-2">
              <span className="text-sm text-gray-400">
                {responseCharCount}/1000
              </span>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={query.trim() === ""}
                aria-label="Send Response"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}