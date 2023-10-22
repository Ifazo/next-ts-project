import ServiceFilter from '@/components/ServiceFilter'
import ServiceList from '@/components/ServiceList'

export default async function page() {
    const url = process.env.NEXTAUTH_URL as string;
    const res = await fetch(`${url}/api/products`, {
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
