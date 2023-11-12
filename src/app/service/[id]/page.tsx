import Reviews from '@/components/Reviews';
import ServiceDetails from '@/components/ServiceDetails'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/services/${id}`, {
    cache: 'no-store'
  })
  const service = await res.json()
  // console.log(service)
  const response = await fetch(`${process.env.BACKEND_URL}/api/reviews/${id}`, {
    cache: 'no-store'
  })
  const reviews = await response.json()
  // console.log(reviews)
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <ServiceDetails data={service.data} />
      <Reviews data={reviews.data}/>
    </div>
  )
}
