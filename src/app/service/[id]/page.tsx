import Reviews from '@/components/Reviews';
import ServiceDetails from '@/components/ServiceDetails'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/services/${id}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  console.log(data)
  // const response = await fetch(`${url}/api/reviews`, {
  //   cache: 'no-store'
  // })
  // const reviews = await response.json()
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <ServiceDetails data={data.data} />
      {/* <Reviews data={reviews}/> */}
    </div>
  )
}
