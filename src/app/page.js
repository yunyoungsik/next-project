"use client"
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Port from '@/components/Port'
import Site from '@/components/Site'
import Skill from '@/components/Skill'
import Skip from '@/components/Skip'
import link from '@/utils/links'
import smooth from '@/utils/smooth'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    smooth()
    link()
  }, [])
  return (
    <>
      <Skip />
      <Header />
      <main id='main' role='main'>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
