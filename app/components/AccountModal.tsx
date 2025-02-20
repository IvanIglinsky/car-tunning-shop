'use client';

import React, { useState } from 'react';

interface AccountModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-neutral-900">
                        {isLogin ? 'Login' : 'Register'}
                    </h2>
                    <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700">
                        ✕
                    </button>
                </div>

                <div className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-red-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-red-500"
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:border-red-500"
                        />
                    )}
                    <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors font-bold uppercase">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </div>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-red-600 hover:text-red-700 text-sm"
                    >
                        {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </div>
    );
}
