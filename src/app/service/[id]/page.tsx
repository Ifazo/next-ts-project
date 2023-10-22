import ServiceDetails from '@/components/ServiceDetails'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const url = process.env.NEXTAUTH_URL as string;
  const res = await fetch(`${url}/api/products/${id}`, {
    cache: 'no-store'
  })
  const data = await res.json()
  
  return (
    <div>
      <ServiceDetails data={data}/>
    </div>
  )
}
