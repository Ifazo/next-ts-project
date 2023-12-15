import ServiceList from "@/components/ServiceList"

export default async function page({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories/${id}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  // console.log(data)
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Service list</h1>
        <p className="mt-4 max-w-xl text-sm text-gray-700">
          Our thoughtfully designed services are crafted in limited runs. Improve your productivity and
          organization with these sale items before we run out.
        </p>
      </div>
      <ServiceList data={data?.data} />
    </div>
  )
}
