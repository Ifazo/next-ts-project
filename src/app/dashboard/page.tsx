import Dashboard from '@/components/Dashboard'

async function getUser() {
  const res = await fetch('http://localhost:3000/api/users', { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function page() {
  const user = await getUser()
  console.log(user)
  return (
      <div>
      <Dashboard user={user}/>
    </div>
  )
}
