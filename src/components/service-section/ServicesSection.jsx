import gsap from 'gsap';
import SplitType from 'split-type'
const ServicesSection = () => {
    const ourText = new SplitType('p#tttr')
    const chars=ourText.chars
  gsap.fromTo(
  chars,
  { 
    y: 100,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 2,
    ease: 'power4.out',
  }
)
  return (
    <div className='py-16 flex flex-col gap-5 justify-center items-center'>
      <div className='line'>
        <p className=' text-white text-5xl font-bold' id='tttr'>Performance / Seo / Content Strategy</p>
      </div>
      <div className='line'>
        <p className='text-white text-5xl font-bold'>Performance / Seo / Content Strategy</p>
      </div>
    </div>
  );
};

export default ServicesSection;
