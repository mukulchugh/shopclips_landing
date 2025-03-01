import React from "react"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { ArrowUpOnSquareIcon, ArrowUpTrayIcon, BoltIcon, ChartBarIcon, ChartPieIcon, ClipboardDocumentCheckIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

const features = [
  {
    name: 'Blazing Fast',
    description:
      'Optimized for mobile web, Doesn’t affect your site speed or Lighthouse scores. No need to worry about your SEO.',
    icon: BoltIcon,
  },
  {
    name: 'One-Click Migration/Import',
    description:
      'From your Instagram reels, Tiktok, or upload in bulk from your device. We support all major formats.',
    icon: ArrowUpTrayIcon,
  },
  {
    name: 'Insightful Analytics',
    description:
      'End to end analytics that cover engagement and conversion funnels. Get a complete overview of your users.',
    icon: ChartBarIcon,
  },
  {
    name: 'Easy Integration',
    description:
      'Download Shopify App -> Upload videos -> Arrange them in an order -> Tag Products -> Ready for launch!',
      //'Embed your shoppable videos on any page of your website. No need to worry about your SEO.',
    icon: ClipboardDocumentCheckIcon,   
  },
]

export default function Features() {
  return (
    <div className="py-12 sm:py-14 text-white mt-12" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase">features in short</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get Started by yourself in under 10 minutes!
          </p>
          <p className="mt-6 text-sm md:text-lg leading-6 text-gray-600">
          Best way to grow is by converting more people who are already visiting your website! 
          Simply improves the website efficiency, without spending a dime on products or marketing!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm md:text-base md:leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
