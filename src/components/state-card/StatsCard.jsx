

const StatsCard = ({number,name}) => {
  return (
    <div className="mt-5">
        <h3 className="border-b border-gray-300 text-white text-7xl py-8 font-bold ps-2 pe-2">{number}+</h3>
        <span className="text-gray-300 text-3xl py-3 block">{name}</span>
    </div>
  )
}

export default StatsCard