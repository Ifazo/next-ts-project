import ServiceFilter from '@/components/ServiceFilter'
import ServiceList from '@/components/ServiceList'

export default async function page() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store'
    })
    const data = await res.json()
    // console.log(data)
    return (
        <div>
            <ServiceFilter />
            <ServiceList data={data}/>
        </div>
    )
}
