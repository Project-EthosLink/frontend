import Link from 'next/link';
import style from '../Style.module.css';

export default function BeACreator() {
    return (
        <main>
            <div className="relative overflow-hidden z-10 pt-36 md:pt-40 xl:pt-44 min-h-[100vh]" data-testid="hero">
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
                <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
                    <div className="text-center">
                        <a href="#" className={`${style.heroSubtitleGradient} relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4 rounded-full`}>
                            <span className={`${style.heroSubtitleText}`}>
                                Create your space
                            </span>
                        </a>
                        <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-6xl">
                            Get Started with {" "}
                            <span className='bg-gradient-to-r from-[#350f5c] to-[#923ce8] bg-clip-text text-transparent'>EthosLink</span>
                        </h1>
                        <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg text-gray-400">
                            Use a suite of publishing tools to share any media directly to your fans. No algorithms. No ads. When you share it, they see it.Offer a paid membership or sell digital products to start earning an income directly from your fans
                        </p>
                        <Link href="/be-a-creator/form" className={`${style.heroButtonGradient} inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80`}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}