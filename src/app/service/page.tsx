import ServiceFilter from '@/components/ServiceFilter'
import ServiceList from '@/components/ServiceList'

async function getData() {
    const res = await fetch('http://localhost:5000/api/v1/products')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function page() {
    const data = await getData()
    console.log(data)
    return (
        <div>
            <ServiceFilter />
            <ServiceList data={data}/>
        </div>
    )
}
