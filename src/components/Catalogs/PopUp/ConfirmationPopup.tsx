import { useState } from 'react';
import * as React from "react";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onConfirm: (data: { reason: string; description: string }) => void;
  onCancel: () => void;
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
  reasonOptions?: string[];
  showReason?: boolean;
  showDescription?: boolean;
  descriptionPlaceholder?: string;
}

// Confirmation Popup Component
const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ 
  isOpen, 
  onConfirm, 
  onCancel,
  title = "Are you sure you want to Reject Release ?",
  subtitle = "Please confirm the action before proceeding.",
  confirmText = "Yes, proceed",
  cancelText = "No, cancel",
  reasonOptions = [],
  showReason = false,
  showDescription = false,
  descriptionPlaceholder = "Enter description..."
}) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm({ reason: selectedReason, description });
    setSelectedReason("");
    setDescription("");
  };

  const handleCancel = () => {
    onCancel();
    setSelectedReason("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8">
        {/* Reason Dropdown */}
        {showReason && (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3 text-lg">Reason</label>
            <div className="relative">
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full p-4 pr-12 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 bg-white"
              >
                <option value="">Select Reason</option>
                {reasonOptions.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        {showDescription && (
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3 text-lg">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700"
              placeholder={descriptionPlaceholder}
            />
          </div>
        )}

        {/* Confirmation Message */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4  pb-2 w-[60%]">
          <button
            onClick={handleConfirm}
            className="flex-1 bg-green-100 text-green-700 py-3 rounded-xl font-medium hover:bg-green-200 transition-colors"
          >
            {confirmText}
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl font-medium hover:bg-red-200 transition-colors"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
