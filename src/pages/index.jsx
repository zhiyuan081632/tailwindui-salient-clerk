import Head from 'next/head'
import { SignedIn, SignedOut } from '@clerk/nextjs'
//import { withServerSideAuth } from '@clerk/nextjs/ssr'
import React from 'react'
import Link from 'next/link'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

//export const getServerSideProps = withServerSideAuth()

const SignupLink = () => (
  <Link href="/sign-up">
    <div className="">
      <img alt="Sign up" src="/icons/user-plus.svg" />
      <div>
        <h3>Sign up for an account</h3>
        <p>Sign up and sign in to explore all the features provided by Clerk out-of-the-box</p>
      </div>
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </div>
  </Link>
)

export default function Home() {
  
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta name="description" content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited." />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
