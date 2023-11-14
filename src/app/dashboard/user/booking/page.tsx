import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import OrderHistory from '@/components/OrderHistory'
import { useAppSelector } from '@/store/hook'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

export default async function page() {
    const session = await getServerSession(authOptions);
    console.log(session)
    const res = await fetch(`${process.env.BACKEND_URL}/api/bookings`, {
        headers: {
            'authorization': session?.token
        },
        cache: 'no-cache',
    })
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <OrderHistory data={data?.data} />
        </div>
    )
}
