import { ArrowRightIcon } from '@heroicons/react/24/solid'

const HeadingIntro = ({ text }) => {
  return (
    <div className='heading'>
      <h1 className='text-5xl text-white font-bold'>{text}</h1>
      <button className='rounded-md border border-white py-3 px-5 text-white flex items-center mt-10 font-thin hover:scale-105 transition-all duration-300'>
        Discover More <ArrowRightIcon className='h-5 text-white ms-3 hover:bg-white hover:text-black rounded-full transition-all duration-300 hover:animate-pulse px-2'/>
      </button>
     
    </div>
  );
};

export default HeadingIntro;