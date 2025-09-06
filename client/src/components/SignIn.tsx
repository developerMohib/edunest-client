"use client"
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const callbackUrl = useSearchParams().get('callbackUrl') || '/';

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const user = { email, password };
  try {
    const response = await signIn('credentials', { ...user, redirect: false, callbackUrl });
    console.log('response fgchfgh', response);
    if (response?.error) {
      // Handle error (e.g., show message)
      console.error('Sign in error:', response.error);
    } else if (response?.ok) {
      // Redirect or update UI on success
      router.push(callbackUrl);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
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
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground"
                                        id="email"
                                        placeholder="name@example.com"
                                        required
                                        type="email"
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
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            {passwordVisible ? <FaEye onClick={togglePassword} /> : <FaEyeSlash onClick={togglePassword} />}
                                        </div>
                                    </div>
                                </div>
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-eduBlue text-primary-foreground hover:bg-eduBlue/90 h-10 px-4 py-2 w-full cursor-pointer">
                                    {loading ? "Logging..." : "Sign In"}
                                </button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="text-xs">
                                <h3 className="flex items-center w-full">
                                    <span className="flex-grow bg-eduGray/30 rounded h-[1px]" />
                                    <span className="mx-3 text-lg font-medium"> Or continue with</span>
                                    <span className="flex-grow bg-eduGray/30 rounded h-[1px]" />
                                </h3>

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <button type="button" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full border border-input cursor-pointer">
                                <FaGoogle className='mr-2' /> Google
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 w-full border border-input cursor-pointer">
                                <FaFacebook className='mr-2' /> Facebook
                            </button>
                        </div>
                    </div>

                    <p className="px-8 text-center text-sm text-muted-foreground mt-8">
                        Don&apos;t have an account?{" "}
                        <Link href="signup" className="underline underline-offset-4 hover:text-primary">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;