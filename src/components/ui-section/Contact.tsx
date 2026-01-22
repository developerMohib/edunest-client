import React from 'react';
import { VscCallIncoming } from "react-icons/vsc";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LiaBugSolid } from "react-icons/lia";

const Contact: React.FC = () => {
    return (
        <div className="container my-12 mx-auto">
            <section className="mb-32">
                {/* Title */}
                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl">
                        <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    {/* Contact Info */}
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                            {/* Card 1 */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-eduBlue/30 p-4 text-eduGray">
                                            {/* Phone Icon */}
                                            <VscCallIncoming />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Technical support</p>
                                        <p className="text-neutral-500">support@example.com</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-eduBlue/30 p-4 text-eduGray">
                                            {/* Sales Icon */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Sales questions</p>
                                        <p className="text-neutral-500">sales@example.com</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-eduBlue/30 p-4 text-eduGray">
                                            {/* Press Icon */}
                                            <HiOutlineNewspaper />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Press</p>
                                        <p className="text-neutral-500">press@example.com</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-eduBlue/30 p-4 text-eduGray">
                                            {/* Bug Icon */}
                                            <LiaBugSolid />
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">Bug report</p>
                                        <p className="text-neutral-500">bugs@example.com</p>
                                        <p className="text-neutral-500">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                        <div className="mb-3 w-full">
                            <label
                                className="block font-medium mb-[2px] text-eduGray"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="px-2 py-2 border w-full outline-none rounded-md"
                                placeholder="Name"
                            />
                        </div>

                        <div className="mb-3 w-full">
                            <label
                                className="block font-medium mb-[2px] text-eduGray"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="px-2 py-2 border w-full outline-none rounded-md"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="mb-3 w-full">
                            <label
                                className="block font-medium mb-[2px] text-eduGray"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                className="px-2 py-2 border rounded-md w-full outline-none"
                                placeholder="Write your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="mb-6 inline-block w-full rounded bg-eduBlue/85 px-6 py-2.5 font-medium uppercase leading-normal text-eduWhite hover:shadow-md hover:bg-eduBlue"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;