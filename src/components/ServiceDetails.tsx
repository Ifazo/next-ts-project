'use client'
import { HeartIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { IService } from '@/types'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import ReviewModal from './ReviewModal'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function ServiceDetails({ data: product }: { data: IService }) {
    // console.log(product)
    const [ open, setOpen ] = useState(false)
    const { data: session } = useSession()
    const startDate = new Date(product.startDate)
    const endDate = new Date(product.endDate)

    const handleOrder = (product: IService) => {
        fetch(`${process.env.NEXTAUTH_URL}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: session?.user?.email,
                products: [ product ],
            })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order placed successfully')
            })
            .catch(err => {
                toast.error('Something went wrong')
            })
    }
    const handleWishlist = (product: IService) => {
        fetch(`${process.env.NEXTAUTH_URL}/api/wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: session?.user?.email,
                product: product,
            })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added to wishlist')
            })
            .catch(err => {
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
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                </div>

                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                    <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-xl font-medium text-gray-900">${product.price}</p>
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
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <div className="mt-6">

                        <div className="mt-3">
                            <div className="flex items-center justify-around">
                                <p className="text-sm font-medium text-gray-500 mt-2">
                                    Start at {' '}
                                    <time dateTime={product.startDate}>{startDate.toLocaleDateString()}</time>
                                </p>
                                <p className="text-sm font-medium text-gray-500 mt-2">
                                    End at {' '}
                                    <time dateTime={product.endDate}>{endDate.toLocaleDateString()}</time>
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex sm:flex-col1">
                            <button
                                type="button"
                                onClick={() => handleOrder(product)}
                                className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                            >
                                Order Now
                            </button>

                            <button
                                type="button"
                                onClick={() => handleWishlist(product)}
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
                            <ReviewModal open={open} setOpen={setOpen} id={product.id} />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
