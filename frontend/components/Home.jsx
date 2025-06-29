import React from 'react';

export default function Home() {
    return (
        <div className=" flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Employee Manager</h1>
                    <nav className="space-x-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Employees</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main>
                <div className="max-w-5xl mx-auto text-center py-6 px-4"> {/* py-20 → py-6 */}
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Manage Your Employees Efficiently
                    </h2>
                    <p className="text-gray-600 mb-6">
                        A simple and effective way to track employee information — name, email, role, salary.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </main>

        </div>
    );
}
