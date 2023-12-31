'use client'
import { useAppSelector } from "@/store/hook"
import { IService } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function ServiceTable({ data }: { data: IService[] }) {
    const router = useRouter()
    const { user } = useAppSelector(state => state.user)
    const { token } = user as { token: string }
    const handleDelete = (id: string) => {
        fetch(`${process.env.BACKEND_URL}/api/services/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': token,
            },
            cache: 'no-cache'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (!!data.success) {
                    toast.success(data.message)
                    router.refresh()
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Services</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the services in your company including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href="/service/add"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add service
                    </Link>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Title
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Delete
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Details</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data?.map((service) => (
                                        <tr key={service.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <Image
                                                            height={40}
                                                            width={40}
                                                            className="h-10 w-10 rounded-full"
                                                            src={service.image} alt="logo" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{service.name}</div>
                                                        <div className="text-gray-500">Start at: {service.startDate}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{service.category}</div>
                                                <div className="text-gray-500">${service.price}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    available
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-indigo-600 hover:text-indigo-900">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(service.id)}
                                                    className="text-red-600 hover:text-red-900">
                                                    Delete<span className="sr-only">, {service.name}</span>
                                                </button>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="#" className="text-green-600 hover:text-green-900">
                                                    Details
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
