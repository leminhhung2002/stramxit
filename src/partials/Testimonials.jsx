import React from "react";

import TestimonialImage01 from "../images/dev1.png";
import TestimonialImage02 from "../images/oki.jfif";
import TestimonialImage03 from "../images/oki1.jpg";

function Testimonials({ refHowItWork }) {
  return (
    <section ref={refHowItWork}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> How it work ? </h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage01}
                    width="48"
                    height="48"
                    alt="Testimonial 01"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Step 1{" "}
              </blockquote>
              <blockquote className="text-lg text-gray-400 grow">
                Please Register SMART MATRIX
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">
                  Starting to be gay
                </cite>{" "}
                -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Sign Up
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage02}
                    width="48"
                    height="48"
                    alt="Testimonial 02"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Step 2{" "}
              </blockquote>
              <blockquote className="text-lg text-gray-400 grow">
                Connect metaMask wallet
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic"></cite> -{" "}
                <a
                  className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  How to connect metaMask wallet
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div
              className="flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img
                    className="rounded-full"
                    src={TestimonialImage03}
                    width="48"
                    height="48"
                    alt="Testimonial 03"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                Step 3{" "}
              </blockquote>
              <blockquote className="text-lg text-gray-400 grow">
                Complete quests and get rewards
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                {/* <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
