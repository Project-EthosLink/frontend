import React from 'react';
import style from './Style.module.css';
import Link from 'next/link';

const Hero = () => (
  <div className="relative overflow-hidden z-10 pt-36 md:pt-40 xl:pt-44 min-h-[85vh]" data-testid="hero">
    {/* <Logo testId="hero-logo" /> */}
    <section>
      <div className="max-w-7xl mx-auto">
        <div className=" absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
          <div className={`absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 w-full h-[1282px] rounded-full max-w-[1282px] ${style.heroCircleGradient}`}>
          </div>
          <div className={`absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px] ${style.heroCircleGradient}`}>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img src="/blur-02.svg" alt="blur" className="max-w-none" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10">
            <img src="/blur-01.svg" alt="blur" className="max-w-none" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <a href="#" className={`${style.heroSubtitleGradient} relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full`}>
            <span className={`${style.heroSubtitleText}`}>
              Create your space
            </span>
          </a>
          <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-6xl">
            Directly reach your fans with {" "}
            <span className=' bg-gradient-to-t from-[#350f5c] to-[#923ce8] bg-clip-text text-transparent'>EthosLink</span>
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg text-gray-400">
            Use a suite of publishing tools to share any media directly to your fans. No algorithms. No ads. When you share it, they see it.Offer a paid membership or sell digital products to start earning an income directly from your fans
          </p>
          <Link href="/be-a-creator/page" className={`${style.heroButtonGradient} inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80`}>
            Become a Creator
          </Link>
        </div>
      </div>
    </section>
    <section className='text-white mt-[150px]'>
      <section id="features" class="overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 scroll-mt-17">
        <div class="max-w-[1222px] mx-auto px-4 sm:px-8 xl:px-0">
          <div class="wow fadeInUp text-center" style={{ visibility: "visible" }}>
            <span class={`${style.heroSubtitleGradient} relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full`}>
              {/* <img src="images/icon-title.svg" alt="icon" /> */}
              <span class={`${style.heroSubtitleText}`}> Some of Main Features </span>
            </span>
            <h2 class="text-white mb-4 text-2xl font-extrabold sm:text-4xl xl:text-6xl">
              Key Features of Our Tool
            </h2>
            <p class="max-w-[714px] mx-auto mb-5 font-medium text-gray-500">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process more efficient,
              accurate, and enjoyable.
            </p>
          </div>
          <div class="relative">
            <div class={`${style.featuresRowBorder} rotate-90 w-1/2 h-[1px] absolute top-1/2 left-1/2 -translate-y-1/2 lg:-translate-x-1/3 lg:left-1/4 hidden lg:block`}>
            </div>
            <div class={`${style.featuresRowBorder} rotate-90 w-1/2 h-[1px] absolute top-1/2 right-1/2 -translate-y-1/2 lg:right-[8.3%] hidden lg:block`}>
            </div>

            <div class="flex flex-wrap justify-center">

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-01.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Intelligent Writing Assistance
                  </h4>
                  <p class="font-medium text-gray-500">
                    Our AI writing tool analyzes your content, suggests
                    improvements,
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-02.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Grammar and Spell Check
                  </h4>
                  <p class="font-medium text-gray-500">
                    Say goodbye to embarrassing typos and grammar mistakes
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-03.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Plagiarism Detection
                  </h4>
                  <p class="font-medium text-gray-500">
                    Originality is key, and our AI writing tool helps you
                    maintain it
                  </p>
                </div>
              </div>
            </div>
            <div class={`${style.featuresRowBorder} w-full h-[1px]`}></div>

            <div class="flex flex-wrap justify-center">

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1 rotate-180`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-04.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Voice to Text Conversion
                  </h4>
                  <p class="font-medium text-gray-500">
                    Transform your spoken words into written text easily &amp;
                    effortlessly
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1 rotate-180`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-05.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Style and Tone Adaptation
                  </h4>
                  <p class="font-medium text-gray-500">
                    Whether you need a professional, or positive tone it has
                    everyone
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 lg:w-1/3">
                <div class="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
                  <span class={`group-hover:opacity-100 opacity-0 ${style.featuresBg} absolute w-full h-full left-0 top-0 -z-1 rotate-180`}></span>
                  <span class={`${style.iconBorder} relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto`}>
                    <img src="images/icon-06.svg" alt="icon" />
                  </span>
                  <h4 class="font-semibold text-lg text-white mb-4">
                    Content Generation
                  </h4>
                  <p class="font-medium text-gray-500">
                    Need inspiration or assistance with generating content?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
);

export default Hero;
