import ContactForm from '../components/ContactForm/index.js'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = () => {
  return (
    <Layout nav={true}>
    <Seo />
    <div className='h-screen'>
    <ContactForm /> 
    </div>
    </Layout>
  )
}

export default Contact