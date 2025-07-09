import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {

    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="glass-effect w-[95%] h-[90%] px-4 py-2 rounded-2xl overflow-hidden flex md:block">
                    <div className="flex items-center md:items-center md:justify-around">
                        <div className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl text-Snow font-bold gradient-text">
                                Hello, Explore My Portfolio
                            </h1>
                            <div className="py-4 font-cascadia-normal text-Snow text-sm sm:text-base xl:text-lg h-20 lg:h-auto">
                                <span>{"<"}<span className="text-Green font-bold">code</span>{">"}
                                    <span className="text-Snow font-bold">  I am a  
                                        <span className="inline-block ml-2">
                                             <Typewriter
                                                options={{
                                                    strings:
                                                        [ 'Software Engineer',
                                                            'MERN Stack Developer',
                                                            'NextJs & Java Developer',
                                                            'AI Trainer'
                                                        ],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </span>
                                {"</"}<span className="text-Green font-bold">code</span>{">"}</span>
                            </div>
                            <Link 
                                to='intro' 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                offset={-50} 
                                className="button inline-block hover:scale-105 transform transition-all duration-300"
                            >
                                Explore
                            </Link>
                        </div>
                        <div className="w-48 h-52 relative hidden md:block">
                            <img 
                                className='absolute top-8 w-full h-full object-cover filter drop-shadow-lg transition-all duration-500 hover:scale-110' 
                                src="images/avatarY.png" 
                                alt="avatar" 
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16 mt-8">
                    {[
                        { count: "10+", text: "CompletedProjects" },
                        { count: "8+", text: "FreelanceWork" },
                        { count: "12+", text: "certificates" },
                        { count: "10+", text: "opensourceProjects" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-x-2 animated-border p-4">
                            <span className='text-xl md:text-2xl text-Green font-bold'>{item.count}</span>
                            <span className='text-xs md:text-sm text-Snow'>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </BannerLayout>
    );
};

export default Banner;