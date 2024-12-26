import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion"; // ShadCN Accordion components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { CardHoverEffectDemo } from "../components/ui/CardHoverEffectDemo";
import { Banner } from "../components/ui/Banner";

function Home() {
  return (
  
    <div>
          <Banner></Banner>
    
<CardHoverEffectDemo></CardHoverEffectDemo>
      {/* Feature Section */}
      <section id="features" className="py-24 bg-white dark:bg-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold dark:text-white text-gray-800 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-gray-100 dark:bg p-8 rounded-lg shadow-lg transition-all hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Authentication</h3>
              <p className="text-gray-600">
                Secure login and registration with email/password and Google OAuth for enhanced security.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Assignment Management</h3>
              <p className="text-gray-600">
                Effortlessly create, view, and grade assignments with full functionality.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transition-all hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Responsive Design</h3>
              <p className="text-gray-600">
                Seamlessly access the platform from mobile, tablet, or desktop with a fully responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section id="faq" className="py-24 bg-gray-50 dark:bg-transparent ">
        <div className="container mx-auto text-center ">
          <h2 className="text-4xl font-semibold text-gray-800  dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {/* Question 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full text-left dark:text-white text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
                  How do I create an assignment?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
                  To create an assignment, go to the "Create Assignment" page, fill out the form with the required details, and submit it for review.
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="w-full text-left text-xl font-semibold dark:text-white text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
                  Can I submit assignments from other users?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
                  Yes, you can view assignments submitted by others and submit feedback on pending assignments.
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="w-full dark:text-white text-left text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 transition-all">
                  How do I toggle between light and dark mode?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
                  Toggle between light and dark mode easily by clicking the mode switcher button in the navigation bar.
                </AccordionContent>
              </AccordionItem>

              {/* Question 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="w-full dark:text-white text-left text-xl font-semibold text-gray-800 py-4 px-6 border-b border-gray-200 hover:bg-gray-100  dark:hover:bg-gray-500 transition-all">
                  How do I update my profile?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 dark:text-white text-gray-600">
                  You can update your profile by navigating to the "My Profile" section, where you can edit your details and upload a new profile picture.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
