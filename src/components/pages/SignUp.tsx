"use client"
import { getErrorMessage } from '@/utils/axiosErrorHanlder';
import { api } from '@/utils/axiosInstance';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Extract form data
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const image = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
        const role = "student"
        // Log form values (or process them as needed)
        const userData = { name, email, password, image, role }

        try {
            const response = await api.post('/signup/api', userData)
            console.log('Sign up successful:', response.data);
            // Handle successful sign-up (e.g., redirect, show message)
            if (response?.data.success) {
                toast.success('Sign up successful! Please sign in.');
                // Redirect to sign-in page after successful sign-up
                router.push('/signin');
            }
        } catch (error) {
            const message = getErrorMessage(error);
            console.error("Signup error:", message, error);
            toast.error(message);
        }
        setLoading(false)

    };
    return (
        <div className="p-4">
            <div className="grid grid-cols-2">
                <div className='grid-cols-1'>
                    <Image src={"/images/log.in.page.png"} alt='Login image' width={500} className='h-auto w-full' height={500} />
                </div>

                <div className='grid-cols-1'>
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold">
                            Welcome back
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to sign in to your account
                        </p>
                    </div>

                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                        type="name"
                                        name='name'
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
                                        id="email"
                                        placeholder="name@example.com"
                                        required
                                        type="email"
                                        name='email'
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                            Password
                                        </label>
                                        <Link href="/" className="ml-auto inline-block text-sm underline text-muted-foreground hover:text-primary">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
                                            id="password"
                                            required
                                            type={passwordVisible ? 'text' : 'password'}
                                            name='password'
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            {passwordVisible ? <FaEye onClick={togglePassword} /> : <FaEyeSlash onClick={togglePassword} />}
                                        </div>
                                    </div>
                                </div>
                                <button disabled={loading}
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-eduBlue text-primary-foreground hover:bg-eduBlue/90 h-10 px-4 py-2 w-full cursor-pointer">
                                    {loading ? "Creating Account..." : "Sign Up"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="px-8 text-center text-sm text-muted-foreground mt-8">
                        Already have an account?{" "}
                        <Link href="/signin" className="underline underline-offset-4 hover:text-primary">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;