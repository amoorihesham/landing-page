import Navbar from "../navbar/Navbar"
import HeadingIntor from '../heading-intro/HeadingIntro'
import'./style.css'

const Header = () => {
  return (
    <header>
        <Navbar/>
        <div className="container mx-auto flex items-center h-full">
         <HeadingIntor text='Sample Heading Text'/>
        </div>
    </header>
  )
}

export default Header