"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Dashboard = () => {
    const router = useRouter();
    const onClickUrl = () => {
        router.push(`/play/dasd`)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-8">TicTacToe</h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={() => onClickUrl()}
                >
                    Play
                </button>
            </div>
        </div>
    );
};

export default Dashboard;