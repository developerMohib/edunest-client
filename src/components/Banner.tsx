import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser } from 'react-icons/fa';

const Banner: React.FC = () => {
    return (
        <section>
            <div className="grid pt-16 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12 lg:pt-28 items-end">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h4 className='text-xl'>welcome to EduNest</h4>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-wide md:text-6xl xl:text-7xl text-eduBlack">
                        Your Pathway to<br />Success &amp; <br/> Starts Here!
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-eduGray lg:mb-8 md:text-lg lg:text-xl">We counsel, understand the student and educational<br/> needs and  financial <br/> scenerio and the and guides you to the best.
                    </p>
                    <div className="flex sm:space-y-0 sm:space-x-4 gap-x-2">
                        <Link href="/signup" className="inline-flex items-center justify-center gap-x-3 md:w-full px-5 py-3 text-sm font-medium text-center text-eduBlack hover:text-eduWhite rounded-lg sm:w-auto bg-eduRed hover:bg-eduGreen">
                            <FaUser /> Register As Instructor
                        </Link>
                        <Link href="/signin" className="inline-flex items-center justify-center gap-x-3 md:w-full px-5 py-3 text-sm font-medium text-center text-eduBlack hover:text-eduWhite rounded-lg sm:w-auto bg-eduGreen hover:bg-eduRed">
                            <FaUser />Log in A Student
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-auto h-[500px]">
                    <Image src={"/images/banner.hero.present.png"} alt="hero image" width={500} height={500} />
                </div>
            </div>
        </section>

    );
};

export default Banner;