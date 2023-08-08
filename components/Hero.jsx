import React from 'react';
import style from './Style.module.css';

const Hero = () => (
  <div className="relative overflow-hidden z-10 pt-36 md:pt-40 xl:pt-44 min-h-[85vh]" data-testid="hero">
    {/* <Logo testId="hero-logo" /> */}
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
  </div>
);

export default Hero;
