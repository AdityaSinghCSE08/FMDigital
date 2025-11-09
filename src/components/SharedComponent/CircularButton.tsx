import * as React from 'react';

interface CircularButtonProps {
    text: string;
    onClick: () => void;
    color?: 'blue' | 'customblue' | 'purple' | 'green' | 'yellow' | 'white' | 'none';
    textColor?: string;
    className?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
    text,
    onClick,
    color = 'blue',
    textColor,
    className = ''
}) => {
    const colorClasses = {
        blue: 'bg-blue-600 hover:bg-blue-700 text-white',
        purple: 'bg-purple-600 hover:bg-purple-700 text-white',
        green: 'bg-green-600 hover:bg-green-700 text-white',
        yellow: 'bg-yellow-600 hover:bg-yellow-700 text-white',
        white: 'bg-white hover:bg-gray-100 border border-gray-300',
        none: 'text-gray-800',
        customblue: 'bg-[#101f3c] text-white',
    };

    const textColorClass = textColor ? `text-${textColor}` : '';

   const buttonClasses = `
    px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 
    text-[9px] sm:text-[10px] md:text-xs lg:text-sm 
    whitespace-nowrap
    ${color === 'blue' ? 'rounded' : 'rounded-full'}
    font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
    ${colorClasses[color]}
    ${textColorClass}
    ${className}
`;


    return (
        <button onClick={onClick} className={buttonClasses.trim()}>
            {text}
        </button>
    );
};

export default CircularButton;
