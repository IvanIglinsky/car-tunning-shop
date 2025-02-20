'use client';
import React, { useState } from 'react';
import AccountModal from './AccountModal';

export default function Page() {
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
    return (
        <div
            className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200"
            data-oid=".6.y2dy"
        >
            {/* Header */}
            <header
                className="fixed w-full z-50 bg-neutral-900/80 backdrop-blur-sm"
                data-oid="i7yty2b"
            >
                <div
                    className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
                    data-oid="cwk2vj_"
                >
                    <h2 className="text-2xl font-bold text-white" data-oid="dmwsu00">
                        AutoTuning
                    </h2>
                    <div className="flex items-center gap-6" data-oid="ytn-zb3">
                        <button
                            className="text-white hover:text-red-500 transition-colors"
                            data-oid="hjyvt-u"
                        >
                            Search
                        </button>
                        <button
                            className="text-white hover:text-red-500 transition-colors"
                            data-oid=":ck7.l5"
                        >
                            Cart (0)
                        </button>
                        <button
                            onClick={() => setIsAccountModalOpen(true)}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors uppercase font-bold text-sm"
                            data-oid="pp_8xcw"
                        >
                            My Account
                        </button>
                        <AccountModal
                            isOpen={isAccountModalOpen}
                            onClose={() => setIsAccountModalOpen(false)}
                            data-oid="nfnui90"
                        />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800"
                data-oid="w-0.9.l"
            >
                <div
                    className="absolute inset-0 bg-black/40 bg-[url('/grid-pattern.png')] bg-repeat opacity-30"
                    data-oid="yauvj2n"
                ></div>
                <div
                    className="relative z-10 text-center text-white p-8 max-w-6xl mx-auto"
                    data-oid="jo3sbi0"
                >
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-wider"
                        data-oid="n2u8p5b"
                    >
                        Performance & Tuning
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light" data-oid="tnty:8l">
                        Transform Your Vehicle with Premium Performance Parts
                    </p>
                    <div className="flex gap-4 justify-center" data-oid="q99iuvo">
                        <button
                            className="bg-white text-red-600 px-8 py-3 rounded-md font-bold hover:bg-red-600 hover:text-white transition-all uppercase"
                            data-oid=".khkn46"
                        >
                            Shop Now
                        </button>
                        <button
                            className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-red-600 transition-all uppercase"
                            data-oid="3d23ayg"
                        >
                            Car Selector
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-neutral-900" data-oid="8azl-uq">
                <h2
                    className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-wide"
                    data-oid="27dxn:w"
                >
                    Shop By Category
                </h2>
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
                    data-oid="i1z:07p"
                >
                    {[
                        { name: 'Turbo & Superchargers', icon: '🔧' },
                        { name: 'Performance Exhaust', icon: '💨' },
                        { name: 'Coilovers & Suspension', icon: '🔩' },
                        { name: 'ECU Tuning', icon: '💻' },
                        { name: 'Brake Kits', icon: '🛑' },
                        { name: 'Air Intakes', icon: '💨' },
                        { name: 'Body Kits', icon: '🏎' },
                        { name: 'Racing Seats', icon: '💺' },
                    ].map((category) => (
                        <div
                            key={category.name}
                            className="group cursor-pointer"
                            data-oid="bnzl-ie"
                        >
                            <div
                                className="aspect-square bg-neutral-800 rounded-lg mb-4 flex flex-col items-center justify-center hover:bg-red-600 transition-colors p-4"
                                data-oid="vx4uv5."
                            >
                                <span className="text-4xl mb-3" data-oid="s5a5-9.">
                                    {category.icon}
                                </span>
                                <span
                                    className="text-lg font-medium text-white text-center"
                                    data-oid="tmvwk8t"
                                >
                                    {category.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Items */}
            <section className="py-16 px-4 md:px-8 bg-white" data-oid="iffu-3y">
                <h2
                    className="text-3xl font-bold text-center mb-12 text-neutral-900 uppercase tracking-wide"
                    data-oid="qvrpl_q"
                >
                    Featured Products
                </h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    data-oid="r.:.mj5"
                >
                    {[
                        {
                            name: 'Garrett GTX3582R Gen II Turbocharger',
                            price: '1,299.99',
                            description: 'High-performance turbo for maximum boost and reliability',
                            brand: 'Garrett',
                        },
                        {
                            name: 'KW Variant 3 Coilover Kit',
                            price: '2,499.99',
                            description: 'Premium adjustable suspension for perfect handling',
                            brand: 'KW Suspensions',
                        },
                        {
                            name: 'Akrapovic Evolution Titanium Exhaust',
                            price: '3,199.99',
                            description: 'Lightweight titanium construction with aggressive sound',
                            brand: 'Akrapovic',
                        },
                    ].map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow border border-neutral-200"
                            data-oid=":xyyq8_"
                        >
                            <div
                                className="aspect-square bg-neutral-100 rounded-lg mb-4 relative"
                                data-oid="oo0b79a"
                            >
                                <span
                                    className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded"
                                    data-oid="_tjncqu"
                                >
                                    {product.brand}
                                </span>
                            </div>
                            <h3
                                className="text-xl font-bold mb-2 text-neutral-900"
                                data-oid="yg3y0ey"
                            >
                                {product.name}
                            </h3>
                            <p className="text-neutral-600 mb-4" data-oid="8261c47">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center" data-oid="hj1d-:w">
                                <span
                                    className="text-red-600 text-2xl font-bold"
                                    data-oid="y1jndsz"
                                >
                                    ${product.price}
                                </span>
                                <button
                                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-bold uppercase"
                                    data-oid="16ezx2-"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 px-4 md:px-8 bg-neutral-900" data-oid=":1wpx5e">
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
                    data-oid=":w-es99"
                >
                    {[
                        {
                            title: 'Authorized Dealer',
                            description: 'Official distributor for top performance brands',
                            icon: '🏆',
                        },
                        {
                            title: 'Professional Installation',
                            description: 'Network of certified installation partners',
                            icon: '🔧',
                        },
                        {
                            title: 'Price Match',
                            description: 'We match any authorized dealer price',
                            icon: '💰',
                        },
                        {
                            title: 'Technical Support',
                            description: 'Expert advice from racing enthusiasts',
                            icon: '🏎',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-neutral-800 rounded-lg border border-neutral-700"
                            data-oid="hihvy0h"
                        >
                            <span className="text-4xl mb-4 block" data-oid=".wwxqt0">
                                {item.icon}
                            </span>
                            <h3
                                className="text-xl font-bold mb-4 text-white uppercase"
                                data-oid="2i9tkl6"
                            >
                                {item.title}
                            </h3>
                            <p className="text-neutral-400" data-oid="8lksudz">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
