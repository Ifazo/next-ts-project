'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useAppSelector } from '@/store/hook'

const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: true },
]

const userNavigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: true },
    { name: 'Booking', icon: FolderIcon, href: '/dashboard/user/booking', current: true },
    { name: 'Wishlist', icon: InboxIcon, href: '/dashboard/user/wishlist', current: false },
]

const adminNavigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: true },
    { name: 'Users', icon: UsersIcon, href: '/dashboard/admin/users', current: true },
    { name: 'Services', icon: CalendarIcon, href: '/dashboard/admin/services', current: false },
]

const superAdminNavigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '/dashboard', current: true },
    { name: 'Admins', icon: CalendarIcon, href: '/dashboard/super_admin/admins', current: false },
    { name: "Categories", icon: CalendarIcon, href: '/dashboard/super_admin/categories', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user } = useAppSelector(state => state.user)
    const role = user?.role
    const [ sidebarOpen, setSidebarOpen ] = useState(false)
    return (
        <section>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <Link href={'/'}>
                                            <Image
                                                height={32}
                                                width={32}
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                                alt="Workflow"
                                            />
                                        </Link>
                                    </div>
                                    <nav className="mt-5 px-2 space-y-1">
                                        {navigation.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className='active:bg-gray-100 active:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            // className={classNames(
                                            //     item.current
                                            //         ? 'bg-gray-100 text-gray-900'
                                            //         : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                            //     'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            // )}
                                            >
                                                <item.icon
                                                    className='text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6 active:text-gray-500'
                                                // className={classNames(
                                                //     item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                //     'mr-4 flex-shrink-0 h-6 w-6'
                                                // )}
                                                // aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                    <Link href='/' className="flex-shrink-0 group block">
                                        <div className="flex items-center">
                                            <div>
                                                <Image
                                                    height={40}
                                                    width={40}
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">{''}</p>
                                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{''}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <Link href={'/'}>
                                    <Image
                                        height={32}
                                        width={32}
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                                        alt="Workflow"
                                    />
                                </Link>
                            </div>
                            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                                {/* {
                                    navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className='active:bg-gray-100 active:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'

                                        >
                                            <item.icon
                                                className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 active:text-gray-500'

                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    ))
                                } */}
                                {
                                    role === "user" &&
                                    userNavigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className='active:bg-gray-100 active:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'

                                        >
                                            <item.icon
                                                className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 active:text-gray-500'

                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    ))
                                }
                                {
                                    role === "admin" &&
                                    adminNavigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className='active:bg-gray-100 active:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'

                                        >
                                            <item.icon
                                                className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 active:text-gray-500'

                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>))
                                }
                                {
                                    role === "super_admin" &&
                                    superAdminNavigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className='active:bg-gray-100 active:text-gray-900 text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md'

                                        >
                                            <item.icon
                                                className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6 active:text-gray-500'

                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>))
                                }
                            </nav>
                        </div>
                        {/* <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                            <a href="#" className="flex-shrink-0 w-full group block">
                                <div className="flex items-center">
                                    <div>
                                        <Link href={'/'}>
                                            <Image
                                                height={36}
                                                width={36}
                                                className="inline-block h-9 w-9 rounded-full"
                                                src={image || ''}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{name}</p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{email}</p>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="md:pl-64 flex flex-col flex-1">
                    <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1">
                        <div className="py-6">
                            {/* Replace with your content */}
                            {children}
                            {/* /End replace */}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}