'use client'
import { setUser } from "@/store/features/user/User";
import { useAppDispatch } from "@/store/hook";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

type Inputs = {
    email: string
    password: string
}

export default function SignIn() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const password = watch("password")
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        signIn("credentials", {
            email: data.email,
            password: data.password,
            callbackUrl: "/",
        })
        fetch("http://localhost:5000/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data?.token);
                const decoded = jwtDecode(data?.token);
                // console.log(decoded)
                dispatch(setUser(decoded))
                toast.success("Login Successfull")
                router.push("/")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Login Failed")
            })
    }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        height={40}
                        width={40}
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            {errors.email && <span>Email field is required</span>}
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Your E-mail"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            {errors.password && <span>Password field is required</span>}
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    {...register("password", { required: true })}
                                    placeholder="Your Password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link
                            href="/auth/signup"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
