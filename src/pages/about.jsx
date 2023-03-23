import React from 'react'
import Seo from '../components/SEO'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'


function About() {
  return (
    <Layout nav={true}>
    <Seo title='About' />
    <AboutSection />
  </Layout>
  )
}

export default About