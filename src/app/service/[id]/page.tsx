import ServiceDetails from '@/components/ServiceDetails'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  
  return (
    <div>
      <ServiceDetails data={data}/>
    </div>
  )
}
