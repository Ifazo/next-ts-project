import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import UserTable from '@/components/UserTable'
import { getServerSession } from 'next-auth';

export default async function page() {
    const session = await getServerSession(authOptions);
    // console.log(session)
    const res = await fetch(`${process.env.BACKEND_URL}/api/users`, {
        headers: {
            'authorization': session?.token
        },
        cache: 'no-cache',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <UserTable data={data?.data} />
        </div>
    )
}
