import ServiceFilter from '@/components/ServiceFilter'
import ServiceList from '@/components/ServiceList'

export default async function page() {
    const res = await fetch(`${process.env.BACKEND_URL}/api/services`)
    const data = await res.json()
    // console.log(data)
    return (
        <div>
            <ServiceFilter />
            <ServiceList data={data?.data} />
        </div>
    )
}
