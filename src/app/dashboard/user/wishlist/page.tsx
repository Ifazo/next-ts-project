import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import Wishlist from '@/components/Wishlist'
import { getServerSession } from 'next-auth';

export default async function page() {
    const session = await getServerSession(authOptions);
    const res = await fetch(`${process.env.BACKEND_URL}/api/wishlist`, {
        headers: {
            'authorization': session?.token
        },
        cache: 'no-cache'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <Wishlist data={data?.data} />
        </div>
    )
}
