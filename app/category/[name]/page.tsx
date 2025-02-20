'use client';

import { useParams } from 'next/navigation';

export default function CategoryPage() {
    const params = useParams();
    const categoryName = params.name;

    return (
        <div
            className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-200 p-8"
            data-oid="mkiqxu4"
        >
            <h1
                className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
                data-oid="pha:a19"
            >
                {decodeURIComponent(categoryName as string)}
            </h1>
            <div className="max-w-6xl mx-auto" data-oid="yjpfhhl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="-vkj64t">
                    {/* Placeholder items - you can replace with real data */}
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                            data-oid="8y:nquj"
                        >
                            <div
                                className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4"
                                data-oid="ml:sn:5"
                            ></div>
                            <h3
                                className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
                                data-oid="i-6wn07"
                            >
                                Item {item}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4" data-oid="ybbbt7s">
                                Product description goes here
                            </p>
                            <div className="flex justify-between items-center" data-oid="v.gh7r1">
                                <span
                                    className="text-purple-600 dark:text-purple-400 font-bold"
                                    data-oid="3x2:hl5"
                                >
                                    $99.99
                                </span>
                                <button
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                                    data-oid="usrx7qy"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
