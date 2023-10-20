import UserTable from '@/components/UserTable'

export default async function page() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  // console.log(data)
  return (
      <div>
      <UserTable data={data} />
    </div>
  )
}
