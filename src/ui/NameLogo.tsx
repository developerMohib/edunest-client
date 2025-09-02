import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NameLogo: React.FC = () => {
    return (
        <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
                <Image
                    src="/images/edunest.new.logo.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="w-10 h-10 rounded-full mr-2"
                />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Edu
                </span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Nest
                </span>
            </Link>
        </div>
    );
};

export default NameLogo;