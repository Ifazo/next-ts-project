import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import ServiceTable from '@/components/ServiceTable'
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function page() {
  const session = await getServerSession(authOptions);
  // console.log(session)
  const res = await fetch(`${process.env.BACKEND_URL}/api/services`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  // console.log(data)
  return (
      <div>
          <ServiceTable data={data?.data} />
    </div>
  )
}
