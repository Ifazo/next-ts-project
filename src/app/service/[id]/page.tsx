import ServiceDetails from '@/components/ServiceDetails'

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  return res.json()
}

export default async function page({ params: { id } }: { params: { id: string } }) {
  const data = await getData(id)
  console.log(data)
  return (
    <div>
      <ServiceDetails data={data}/>
    </div>
  )
}
