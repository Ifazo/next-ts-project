import Wishlist from '@/components/Wishlist'

export default async function page() {
    const url = process.env.NEXTAUTH_URL as string;
    const res = await fetch(`${url}/api/wishlist`, { cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return (
        <div>
            <Wishlist data={data} />
        </div>
    )
}
