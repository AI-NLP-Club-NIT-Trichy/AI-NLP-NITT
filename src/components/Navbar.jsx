import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'
import clsx from 'classnames'

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false)

  const navlinks = [
    {
      labe: 'Home',
      link: '/',
    },
    {
      labe: 'About',
      link: '/about',
    },
    {
      labe: 'Teams',
      link: '/teams',
    },
    {
      labe: 'Events',
      link: '/events',
    },
    {
      labe: 'Gallery',
      link: '/gallery',
    },
  ]
  return (
    <nav className="w-full top-0 sticky flex px-8 items-center py-4 bg-black z-50">
      <div className="w-[min(1100px,100%)] mx-auto flex flex-row justify-between items-center gap-8">
        <section className="flex items-center gap-4">
          {/* Logo*/}
          <Link to="/" className="text-4xl font-mono">
            <img
              className=" h-[2.2rem] sm:h-[3rem] mx-4  rounded-[100%] "
              src="images/club-logo.jpg"
            />
          </Link>
          <h2 className="text:2xl sm:text-3xl text-white">AI & NLP</h2>
        </section>

        <div className="hidden lg:block ">
          {navlinks.map((links, index) => (
            <NavLink
              key={index}
              style={{ textDecoration: 'none' }}
              className="group relative text-xl text-[#8b8888] px-5 py-2 transition  hover:text-[#0ef] duration-500"
              to={links.link}
            >
              {links.labe}
              <span className="group-hover:transform  group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full border-b-2 border-[#0ef] opacity-0  rounded-2xl transform scale-0 translate-y-10  transition duration-500"></span>
            </NavLink>
          ))}
        </div>

        <FiMenu
          onClick={() => setMenu(true)}
          className="text-3xl text-white cursor-pointer lg:hidden"
        />
      </div>

      {/* sidebar mobile menu */}
      <div
        className={clsx(
          'lg:hidden fixed top-0 left-0 h-full w-screen backdrop-blur-sm bg-black/50',
          isSideMenuOpen ? '  ' : 'hidden'
        )}
      >
        <section className="absolute flex flex-col top-0 right-0 w-56 text-white bg-black h-screen p-8 gap-8 z-50 ">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-0 self-end  mb-8 text-3xl cursor-pointer"
          />

          {navlinks.map((links, index) => (
            <NavLink
              key={index}
              onClick={() => setMenu(false)}
              style={{ textDecoration: 'none' }}
              className="group relative text-xl text-[#8b8888] px-5 py-2 transition  hover:text-[#0ef] duration-500"
              to={links.link}
            >
              {links.labe}
              <span className="group-hover:transform  group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full border-b-2 border-[#0ef] opacity-0  rounded-2xl transform scale-0 translate-y-10  transition duration-500"></span>
            </NavLink>
          ))}
        </section>
      </div>
    </nav>
  )
}
