import Layout from '../components/Layout'
import React from 'react'
import Seo from '../components/SEO'

const PrivacyPolicy = () => {
  return (
    <Layout nav={true}>
        <Seo title="Privacy Policy" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
        <div className="py-30 h-auto flex flex-col justify-left text-left items-center px-24">
         
            <div>
                <React.Fragment>
                    <h2 className="block text-center">Our Privacy Policy</h2>
                    
                    <br></br>
                    <p className="block text-center">Shopclips website together with its content, subdomains, tools and services, the (“Site”).</p>      
                    <br></br>
                    <p>We value your privacy and your privacy is very important to us. To best protect your privacy, we provide this privacy policy (“Privacy Policy”) explaining our online information practices and the choices you can make about the way your information is collected and used at this Site.</p>             
                    <br></br>
                    <h4>Consent and Modification</h4>
                    <br></br>
                    <p> By using Shopclips (The Site), you consent to the terms of our Privacy Policy and our processing of Personal Information for the purposes as discussed in this Policy. We encourage you to periodically review this page for the latest information on our privacy practices. If you do not agree to this Privacy Policy, please do not use our Site or Service. We reserve the right to change this Privacy Policy at any time, and the change will be effective immediately following the revised Privacy Policy on the Site for both existing users and new users.</p>
                    <br></br>
                    <h4>Information We Collect</h4>
                    <br></br>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Personal Information: </span> When you install and use Shopclips, we may collect personal information, including but not limited to your name, email address, and Shopify store information. This information is necessary for app functionality and to provide you with customer support.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Usage Information: </span> We collect information related to your use of our app, including videos, images or any other media you submit on our app, data of the products you tag on those media, your traffic's activities and interactions with shoppable videos in order to give you the analytics of our plugin.</p>
                    <br></br>
                    <h4>How We Use Your Information</h4>
                    <br></br>
                    <p> <span className="font-semibold leading-7 text-gray-900"> To Provide and Improve the Service: </span> We use your information to operate, maintain, and enhance our app, including optimizing the user experience, developing new features, and troubleshooting issues.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Communication: </span> We may use your email address to send you important updates, notifications, and responses to your inquiries.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Customer Support: </span> We use your information to respond to your requests, comments, or questions and provide customer support.</p>
                    <br></br>
                    <h4>Data Sharing and Disclosure</h4>
                    <br></br>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Shopify: </span> Shopclips is designed for the Shopify platform, and we may share your information with Shopify as necessary to operate the app and comply with Shopify's policies.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Third-Party Service Providers: </span> We may use third-party service providers to assist with app functionality, analytics, and other services. These providers may have access to your personal information, but only to the extent required to perform their functions.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Legal Compliance: </span> We may share your information when required by law or to protect our rights, privacy, safety, or property.</p>
                    <br></br>
                    <h4>Your Choices</h4>
                    <br></br>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Opt-Out: </span> You may opt-out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</p>
                    <p> <span className="font-semibold leading-7 text-gray-900"> Access and Correction: </span> You have the right to access, update, or correct your personal information. You can do this by contacting us at team@shopclips.app.</p>
                    <br></br>
                    <h4>Data Security</h4>
                    <br></br>
                    <p>We implement security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of data transmission over the internet or electronic storage is completely secure, so we cannot guarantee its absolute security.</p>
                    <br></br>
                    <h4>Changes</h4>
                    <br></br>
                    <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                    <br></br>
                    <h4>Commitment</h4>
                    <br></br>
                    <p>Thank you for choosing Shopclips. Your privacy is important to us, and we are committed to protecting your data and providing you with a safe and enjoyable user experience. We are committed to protecting your privacy. Protecting your privacy online is an evolving area, and accordingly, we are constantly evolving the Site to meet these demands.</p>
                    <br></br>
                    <h4>Contact Us</h4>
                    <br></br>
                    <p>If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us:</p>
                    <ul>
                        <li>By Email: team@shopclips.app
                        </li>
                        <li>By Phone: 7620487415
                        </li>
                    </ul>
                    <br></br>
                    <p>Last Modified: Oct 6, 2023</p>

                </React.Fragment>
            </div>
        </div>
    </Layout>
  )
}

export default PrivacyPolicy