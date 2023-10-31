import OrderHistory from '@/components/OrderHistory'
import React from 'react'

export default async function page() {
    const url = process.env.NEXTAUTH_URL as string;
    const res = await fetch(`${url}/api/orders`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return (
        <div>
            <OrderHistory data={data}/>
        </div>
    )
}
