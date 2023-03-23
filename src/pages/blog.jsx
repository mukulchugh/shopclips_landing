import Layout from '../components/Layout'
import Seo from '../components/SEO'
import React from 'react'

const data = [
    {
        title: "An IT services company that can grow your business",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus.",
        image: "https://images.unsplash.com/photo-1611836924389-8b1b0b1b5f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        date: "April 20, 2021",
        category: "IT Services",
        author: "John Doe",
    },
    {
        title: "An IT services company that can grow your business",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus.",
        image: "https://images.unsplash.com/photo-1611836924389-8b1b0b1b5f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        date: "April 20, 2021",
        category: "IT Services",

        author: "John Doe",

    },
    {
        title: "An IT services company that can grow your business",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus.",
        image: "https://images.unsplash.com/photo-1611836924389-8b1b0b1b5f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        date: "April 20, 2021",
        category: "IT Services",

        author: "John Doe",

    },
    {
        title: "An IT services company that can grow your business",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor condimentum vitae vel purus.",
        image: "https://images.unsplash.com/photo-1611836924389-8b1b0b1b5f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        date: "April 20, 2021",
        category: "IT Services",
        author: "John Doe",

    },
]

const Blog = () => {
  return (
   <Layout nav={true}>
    <Seo title="Blog" />
    <section className="pt-36 pb-36 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <h2 className="mb-4 text-4xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">
      Our Blog
    </h2>
    <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">
      Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat
      tempor to the condimentum vitae vel purus.
    </p>
    <div className="flex flex-wrap -m-8">
     {data.map((item, index) => (
         <div key={index} className="w-full md:w-1/2 p-8">
         <div className="flex flex-wrap lg:items-center -m-4">
           <div className="w-auto p-4">
             <div className="overflow-hidden rounded-xl">
               <img
                 className="transform hover:scale-105 transition ease-in-out duration-1000"
                 src="https://random.imagecdn.app/250/250"
                 alt=""
               />
             </div>
           </div>
           <div className="flex-1 p-4">
             <div className="md:max-w-xs">
               <div className="flex flex-col justify-between h-full">
                 <div className="mb-6">
                   <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">
                        {item.category}
                   </p>
                   <a
                     className="inline-block hover:text-gray-800 hover:underline"
                     href="#"
                   >
                     <h3 className="text-xl font-semibold leading-normal">
                          {item.title}
                     </h3>
                   </a>
                 </div>
                 <div className="flex flex-wrap items-center -m-1">
                   <div className="w-auto p-1">
                     <img
                       src="https://random.imagecdn.app/30/30"
                       className="rounded-full"
                     />
                   </div>
                   <div className="w-auto p-1">
                     <p className="text-sm font-semibold leading-relaxed">
                        {item.author}
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
        )
     )}
    
    </div>
  </div>
</section>
   
    </Layout>

  )
}

export default Blog