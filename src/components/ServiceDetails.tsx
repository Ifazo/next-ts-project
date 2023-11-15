'use client'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useState } from 'react'
import ReviewModal from './ReviewModal'
import { useSession } from 'next-auth/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type IService = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
    category: string;
    startDate: string;
    endDate: string;
};

export default function ServiceDetails({ data: service }: { data: IService }) {
    const { data: session } = useSession()
    const { token } = session as any
    const [ open, setOpen ] = useState(false)

    const handleOrder = async (service: IService) => {
        if (!session) {
            toast.error('User not authenticated');
            return;
        }
        await fetch(`https://prisma-postgres-ifaz.vercel.app/api/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                services: service,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!!data.success) {
                    toast.success('Order placed successfully')
                }
                else {
                    toast.error('Failed to place order')
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
            })
    }

    const handleWishlist = async (service: IService) => {
        if (!session) {
            toast.error('User not authenticated');
            return;
        }
        await fetch(`https://prisma-postgres-ifaz.vercel.app/api/wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify({
                service: service,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Added to wishlist')
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong')
            })
    }

    return (
        <div className="bg-white">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                {/* Image gallery */}
                <div className="w-full aspect-w-1 aspect-h-1">
                    <Image
                        layout="fill"
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                </div>
                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{service.name}</h1>

                    <div className="mt-3">
                        <h2 className="sr-only">Service information</h2>
                        <p className="text-xl font-medium text-gray-900">${service.price}</p>
                    </div>
                    {/* Reviews */}
                    {/* <div className="mt-3">
                        <h3 className="sr-only">Reviews</h3>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[ 0, 1, 2, 3, 4 ].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            product.rating > rating ? 'text-indigo-500' : 'text-gray-300',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                        </div>
                    </div> */}
                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>

                        <div className="text-base text-gray-700 space-y-6">
                            <p>{service.description}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="mt-3 flex sm:flex-col1">
                            <button
                                type="button"
                                onClick={() => handleOrder(service)}
                                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                            >
                                Book Now
                            </button>
                            <button
                                type="button"
                                onClick={() => handleWishlist(service)}
                                className="max-w-xs flex-1 bg-gray ml-4 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 sm:w-full"
                            >
                                <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                <p className='ml-2'>Wishlist</p>
                            </button>
                        </div>
                        <div className="mt-3">
                            <h3 className="m-3 text-base text-center font-medium text-gray-900">Share your thoughts</h3>
                            <button
                                type='button'
                                onClick={() => setOpen(true)}
                                className="inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                            >
                                Write a review
                            </button>
                            <ReviewModal open={open} setOpen={setOpen} id={service.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
