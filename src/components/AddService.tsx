'use client'
import { IService } from "@/types"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast"
import DatePicker from "./DatePicker"

export default function AddService() {
    const router = useRouter()
    const { data: session } = useSession()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IService>()
    const onSubmit: SubmitHandler<IService> = async (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[ 0 ]);
        const imgApi = "187d3aec661ecb2f9b3fa1a76eab6014";
        await fetch(`https://api.imgbb.com/1/upload?key=${imgApi}`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                const image = result.data.display_url;
                data.image = image;
                data.email = session?.user?.email as string;
                data.startDate = new Date(data.startDate).toISOString();
                data.endDate = new Date(data.endDate).toISOString();
                fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then(() => {
                        toast.success('Service added successfully');
                        router.push('/');

                    })
                    .catch(() => {
                        toast.error('Something went wrong!');
                        router.push('/');
                    });
            })
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new service</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                {errors.name && <small>Name field is required</small>}
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                {errors.price && <small>Price field is required</small>}
                                <input
                                    id="price"
                                    type="number"
                                    {...register("price", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                {errors.category && <small>This field is required</small>}
                                <select
                                    id="category"
                                    {...register("category", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected disabled>Select category</option>
                                    <option value="TV">TV</option>
                                    <option value="PC">PC</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Phone">Phone</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label htmlFor="start-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                {errors.startDate && <small>This field is required</small>}
                                <div id="start-date" {...register("startDate", { required: true })} >
                                    <DatePicker />
                                </div>
                                {/* <input
                                    type="date"
                                    {...register("date", { required: true })}
                                    id="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required /> */}
                            </div>

                            <div className="w-full">
                                <label htmlFor="end-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                {errors.endDate && <small>This field is required</small>}
                                <div id="end-date" {...register("endDate", { required: true })} >
                                    <DatePicker />
                                </div>
                                {/* <input
                                    type="date"
                                    {...register("date", { required: true })}
                                    id="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required /> */}
                            </div>
                            {/* <div>
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                {errors.status && <small>This field is required</small>}
                                <select
                                    id="status"
                                    {...register("status", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected disabled>Select status</option>
                                    <option value="upcoming">upcoming</option>
                                    <option value="available">available</option>
                                    <option value="stockout">stockout</option>
                                </select>
                            </div> */}
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                                {errors.image && <small>This field is required</small>}
                                <input
                                    id="image"
                                    {...register("image", { required: true })}
                                    type="file"
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                {errors.description && <small>This field is required</small>}
                                <textarea
                                    id="description"
                                    {...register("description", { required: true })}
                                    rows={8}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add product
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
