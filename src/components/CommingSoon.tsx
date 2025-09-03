import React from 'react';

const CommingSoon: React.FC = () => {
    return (
        <section>
            {/* Section 1 */}
            <div className="py-20 animate-[cbounce_4s_ease-in-out_infinite] z-10 flex flex-col justify-end items-center">
                <h1
                    className="sm:text-9xl text-7xl font-extrabold font-mono bg-gradient-to-r from-eduGreen via-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                    Coming</h1>

                <h1 className="sm:text-7xl text-6xl text-center font-mono font-extrabold bg-gradient-to-r from-eduGreen via-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                    Soon
                </h1>
            </div>
        </section>
    );
};

export default CommingSoon;