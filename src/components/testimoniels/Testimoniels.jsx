import { StarIcon } from "@heroicons/react/24/solid"


const Testimoniels = () => {
  return (
    <section>
       <div className="container mx-auto">
         <p>Empowered by people, Driven by passion</p>
        <div className="testi flex  gap-5">
            <div className="card flex gap-3">
                <img src="" alt="logo" />
                <div className="info">
                    <h5 className="text-white font-bold my-3">Title</h5>
                    <div className="stars flex items-center gap-1">
                        <StarIcon color="gold" className="h-4"/>
                        <StarIcon color="gold" className="h-4"/>
                        <StarIcon color="gold" className="h-4"/>
                        <StarIcon color="gold" className="h-4"/>
                        <StarIcon color="gold" className="h-4"/>
                    </div>
                    <p>55 google review</p>
                    <button className="bg-blue-500 rounded-md font-bold">Write Review</button>
                </div>
            </div>
            <p className="text-white">carousel</p>
        </div>
       </div>
    </section>
  )
}

export default Testimoniels