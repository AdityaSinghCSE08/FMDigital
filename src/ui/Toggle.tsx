import * as React from 'react';

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition
        ${enabled ? "bg-green-500" : "bg-gray-800"}
      `}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition
          ${enabled ? "translate-x-6" : "translate-x-1"}
        `}
      />
    </button>
  );
}