import React from 'react';

interface CardProps {
    title: string;
    date: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ title, date, description }) => {
    return (
        <div className="bg-white shadow-lg  p-6 max-w-md mx-auto my-4">
            <h2 className="text-2xl  text-gray-800">{title}</h2>
            <p className="text-blue-600 text-sm mt-2">{date}</p>
            <p className="text-gray-700 mt-4">{description}</p>
        </div>
    );
};

