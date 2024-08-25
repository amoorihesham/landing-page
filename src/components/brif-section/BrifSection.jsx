import StateCard from '../state-card/StatsCard'
import './style.css'

const BrifSection = () => {
  return (
    <section className="py-10">
        <div className="container mx-auto">
        <h2 className="text-white text-7xl font-bold">Maximize Sales in Egypt, Saudi, UAE Through arqqa Digital Marketing Agency</h2>
        <p className="brif-desc text-left text-gray-300 mt-16 ms-auto text-2xl font-semiBold">As the leading digital marketing agency in Egypt, ARQQA ignites your brand’s growth with full-spectrum solutions tailored to accelerate your business. Our comprehensive suite of services includes crafting strategic digital roadmaps, designing captivating websites, optimizing user experiences, building strong brand identities, implementing data-driven performance marketing campaigns, improving SEO visibility, developing engaging content, leveraging social media, producing high-quality videos, and adding dynamism with motion graphics. Partner with ARQQA, the best in Egypt, reach out now and achieve unparalleled growth in the digital landscape.</p>
        <div className="stats flex items-center ms-auto flex-wrap justify-between mt-10 ">
            <StateCard number={100} name={'Client'}/>
            <StateCard number={100} name={'Client'}/>
            <StateCard number={100} name={'Client'}/>
            <StateCard number={100} name={'Client'}/>
        </div>
        </div>
    </section>
  )
}

export default BrifSection