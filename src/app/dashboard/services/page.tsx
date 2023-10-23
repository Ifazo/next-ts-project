import ServiceTable from '@/components/ServiceTable'
import React from 'react'

export default async function page() {
  const url = process.env.NEXTAUTH_URL as string;
  const res = await fetch(`${url}/api/products`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return (
      <div>
          <ServiceTable data={data} />
    </div>
  )
}
