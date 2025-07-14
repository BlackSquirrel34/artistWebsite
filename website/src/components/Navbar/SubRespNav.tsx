'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface SubRespNavProps {
  ownerName: string
}

export default function SubRespNav({ ownerName }: SubRespNavProps) {
  const [isOpen, setIsOpen] = useState(false) // mobile menu toggle
  const [activeMainIndex, setActiveMainIndex] = useState(null) // submenu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // should be called from global "navitems" that is popualted via a hook
  // whenever a new page is added
  // we should do this also server-side, inside the fetchNavData helper function
  const mainNavItems = [
    {
      label: 'Page',
      href: '/',
      subItems: [
        { label: 'Sub1', href: '/sub1' },
        { label: 'Sub2', href: '/sub2' },
        { label: 'Sub3', href: '/sub3' },
      ],
    },
    {
      label: 'About',
      href: '/about',
      subItems: [
        { label: 'SubA', href: '/subA' },
        { label: 'SubB', href: '/subB' },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
      subItems: [
        { label: 'SubX', href: '/subX' },
        { label: 'SubY', href: '/subY' },
      ],
    },
  ]

  const handleMainClick = (index) => {
    setActiveMainIndex(index === activeMainIndex ? null : index)
  }

  return (
    <nav className="bg-gray-900 text-white relative">
      {/* Desktop & Mobile Container */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Home */}
        <div className="text-xl font-bold">
          <Link href="/">{ownerName}</Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {mainNavItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Main link/button */}
              <button
                onClick={() => handleMainClick(index)}
                className="hover:text-gray-300 focus:outline-none"
              >
                {item.label}
              </button>
              {/* Submenu on hover or click */}
              <ul className="absolute hidden group-hover:block bg-gray-800 rounded shadow-lg py-2 min-w-max z-10">
                {item.subItems.map((subItem, subIdx) => (
                  <li key={subIdx} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <Link href={subItem.href}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-gray-900 z-20">
          <ul className="space-y-4 px-4 pb-4">
            {mainNavItems.map((item, index) => (
              <li key={index}>
                {/* Main item button */}
                <button
                  onClick={() => handleMainClick(index)}
                  className="w-full text-left px-2 py-1 hover:bg-gray-700 flex justify-between items-center"
                >
                  {item.label}
                  {/* Arrow indicator for submenu */}
                  <span>{activeMainIndex === index ? '▲' : '▼'}</span>
                </button>
                {/* Submenu, toggle open/close */}
                {activeMainIndex === index && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIdx) => (
                      <li key={subIdx} className="px-2 py-1 hover:bg-gray-700">
                        <Link href={subItem.href}>{subItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
