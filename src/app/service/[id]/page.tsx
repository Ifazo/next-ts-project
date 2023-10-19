import ServiceDetails from '@/components/ServiceDetails'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const data = await getData(id)
  return (
    <div>
      <ServiceDetails data={data}/>
    </div>
  )
}

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: 'no-store'
  })
  return res.json()
}