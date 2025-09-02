import Image from 'next/image';
import React from 'react';

const Testominal: React.FC = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <section className="">
                <div className="py-8 mx-auto text-center lg:py-24">
                    <figure className="">
                        <svg className="h-16 mx-auto text-eduGray/30" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-eduBlack md:text-2xl">
                                &quot;Landwind is just awesome. It contains tons of predesigned components <br/> and pages starting from login screen to complex dashboard.<br/> Perfect choice for your next SaaS application.&quot;</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <Image className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" width={500} height={500} />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-eduBlack">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-eduGray/65">CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>

    );
};

export default Testominal;