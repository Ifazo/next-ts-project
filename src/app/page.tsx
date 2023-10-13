import CategoryPreview from '@/components/CategoryPreview'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import Trending from '@/components/Trending'
import Upcoming from '@/components/Upcoming'

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryPreview />
      <Trending />
      <Upcoming />
      <Testimonial />
      <Stats />
      <Newsletter />
    </main>
  )
}
