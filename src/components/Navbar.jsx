import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navRef = useRef(null);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (navRef.current && !navRef.current.contains(event.target)) {
            setNav(false);
          }
        }
    
        if (nav) {
          // Attach the event listener when the menu is open.
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          // Remove the event listener when the menu is closed.
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        // Clean up the event listener when the component unmounts.
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [nav]);




    return (
        <div className='flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white' id='navbar'>
            <Link to='hero' spy={true} smooth={true} duration={1000} className='cursor-pointer'>
             <h2 className='w-full text-3xl font-bold text-[#0098b0]'>Pace Connect</h2>
            </Link>

            <ul className='hidden md:flex '>
                <li className='p-4'>
                    <Link to='hero' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link to='service' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Services</Link>
                </li>
                <li className='p-4'>
                    <Link to='team' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Team</Link>
                </li>
                <li className='p-4'>
                    <Link to='about' spy={true} smooth={true} duration={1000} className='cursor-pointer'>About</Link>
                </li>
                <li className='p-4'>
                   <Link to='contact' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Contact</Link>
                </li>
                <li className='p-4'>
                    <Link to='pricing' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Price</Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}

            </div>
            <div  ref={navRef} className={nav ? 'fixed left-0 top-0 w-[60%] z-50 text-white border-r h-full border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h2 className='w-full text-3xl font-bold text-[#0098b0] m-4'>Pace Connect</h2>

                <ul className='p-2'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='hero' spy={true} smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='service' spy={true} smooth={true} duration={1000}>Services</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='team' spy={true} smooth={true} duration={1000}>Team</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='about' spy={true} smooth={true} duration={1000}>About</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to='contact' spy={true} smooth={true} duration={1000}>Contact</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar