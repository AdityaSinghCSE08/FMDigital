import { useState } from 'react';
import * as React from "react";

interface PopupMessageProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (message: string) => void;
  title?: string;
  defaultMessage?: string;
}

// Reusable Popup Component
const PopupMessage: React.FC<PopupMessageProps> = ({ 
  isOpen, 
  onClose, 
  onUpdate, 
  title = "Messages", 
  defaultMessage = "" 
}) => {
  const [message, setMessage] = useState(defaultMessage);

  if (!isOpen) return null;

  const handleUpdate = () => {
    onUpdate(message);
    setMessage("");
  };

  const handleCancel = () => {
    onClose();
    setMessage("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8">
        {/* Close button in top right */}
        {/* <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button> */}

        {/* Header */}
        <div className="text-center  pb-4">
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        </div>

        {/* Message textarea */}
        <div className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-56 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2  text-gray-700"
            placeholder="We will be live on monday 12PM IST"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 pb-2 w-[60%]">
          <button
            onClick={handleUpdate}
            className="flex-1 bg-green-100 text-green-700 py-3 rounded-xl font-medium hover:bg-green-200 transition-colors"
          >
            Update Now
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl font-medium hover:bg-red-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;
