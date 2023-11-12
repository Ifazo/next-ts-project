import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'

type IReview = {
    id: string;
    rating: number;
    review: string;
    user: string;
    name: string;
    email: string;
    image: string;
    service: string;
    createdAt: string;
    updatedAt: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Reviews({ data }: { data: IReview[] }) {
    // console.log(data)
    return (
        <div className="bg-white my-10">
            <div>
                <h2 className="">Customer Reviews</h2>

                <div className="-my-4">
                    {data?.map((review, reviewIdx) => (
                        <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                            <div className="flex-none py-10">
                                <Image
                                    height={40}
                                    width={40}
                                    src={review.image || ""}
                                    alt="review"
                                    className="w-10 h-10 bg-gray-100 rounded-full" />
                            </div>
                            <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                                <h3 className="font-medium text-gray-900">{review.name || ""}</h3>

                                <div className="flex items-center mt-4">
                                    {[ 0, 1, 2, 3, 4 ].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{review.rating} out of 5 stars</p>

                                <div className="mt-4 prose prose-sm max-w-none text-gray-500">
                                {review.review}    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
