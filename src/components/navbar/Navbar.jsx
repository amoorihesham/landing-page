

const Navbar = () => {
  return (
    <nav className="py-4 text-white">
      <div className="md:container mx-auto flex items-center justify-between">
          <div className="logo">
            <img src="" alt="site logo" />
            <h1 className="text-2xl">logo</h1>
        </div>
        <ul className="navigation flex items-center space-x-5">
            <li><a href="/" className="text-3xl text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#About" className="text-3xl text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="#Works" className="text-3xl text-gray-300 hover:text-white transition-colors duration-300">Works</a></li>
            <li><a href="#Contact" className="text-3xl text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar