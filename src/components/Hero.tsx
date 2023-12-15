import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

    return (
        <div className="bg-white">
                <section className="flex flex-col border-b border-gray-200 lg:border-0">
                    <div className="relative">
                        <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
                        <div className="relative bg-gray-100 lg:bg-transparent">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                                    <div className="lg:pr-16">
                                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                            <span className="block">For your help</span>
                                            <span className="block text-indigo-600">online service</span>
                                        </h1>
                                        <p className="mt-4 text-xl text-gray-600">
                                            Services of all kinds are available here. You can get any service you want from here. You can also provide services here.
                                        </p>
                                        <div className="mt-6">
                                            <Link
                                                href="/auth/signin"
                                                className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                                            >
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                            <Image
                                width={192}
                                height={384}
                                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
                </section>
        </div>
    )
}
