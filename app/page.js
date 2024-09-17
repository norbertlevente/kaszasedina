import { Suspense } from 'react';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import FeaturesAccordion from '@/components/FeaturesAccordion';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonial1Small from '@/components/Testimonial1Small';
import Testimonials3 from '@/components/Testimonials3';
import DemoSection from '@/components/DemoSection';
import FeaturesListicle from '@/components/FeaturesListicle';
import LatestBlogPosts from '@/components/LatestBlogPosts';
import ButtonExternal from '@/components/ButtonExternal';
import ParallaxImage from '@/components/ParallaxImage'; // Import the new component

export default function Home() {
  return (
    <>
      <Suspense>
        <Banner />
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesListicle />
        <Testimonial1Small />
        <ParallaxImage src="/assets/figurak1.png" alt="Parallax Image" />
        <LatestBlogPosts />
        <DemoSection />
        <Testimonials3 />
        <ParallaxImage src="/assets/figurak2.png" alt="Parallax Image" />
        <FAQ />
        
      </main>
      <Footer />
    </>
  );
}