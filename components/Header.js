import Image from 'next/image'
import { useState } from 'react'
import logo from '../public/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [active, setActive] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className="sm:sticky top-0 z-50 bg-red-850">
      <div className="flex justify-end bg-white sm:absolute sm:top-0 sm:right-0 sm:z-50">
        <div className="flex bg-blue-850 text-white text-xs sm:text-sm md:text-base font-bold px-4 py-2">
          <Link href="/newsletters">
            <a className="px-1 sm:px-4">Newsletters</a>
          </Link>
          <Link href="/news">
            <a className="px-1 sm:px-4">News &amp; Events</a>
          </Link>
          <Link href="/contact">
            <a className="px-1 sm:px-4">Contact Us</a>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-row bg-white items-center">
        <div className="ml-3 flex-2 sm:hidden">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="SSGSA Logo"
              priority={true}
            />
          </Link>
        </div>
        <div className="ml-3 flex-2 hidden sm:flex">
          <Link href="/">
            <Image
              width={160}
              height={160}
              src={logo}
              alt="SSGSA Logo"
              priority={true}
            />
          </Link>
        </div>
        <div className="flex-1 text-lg text-center sm:text-2xl md:text-3xl justify-center px-4 sm:mt-12 sm:mb-6 lg:mr-24 items-center font-black text-red-850">
          SIR SYED GLOBAL SCHOLAR AWARD
        </div>
      </div>
      <div className="mx-2 md:mx-5 lg:mx-10 px-4">
        <div className="md:hidden flex justify-between">
          <div className="text-white m-1 text-xl font-bold">SSGSA</div>

          <div className="flex items-center">
            <button
              className="mobile-menu-button hover:bg-red-500 text-white"
              onClick={handleClick}
            >
              <div className="flex justify-end ...">
                <div>
                  <svg
                    className="w-7 h-7 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`${
            active ? 'py-1 md:py-0' : 'hidden'
          } md:flex md:justify-between `}
        >
          <div className="flex space-x-2">
            <div className="flex flex-col w-full md:flex-row md:items-center md:space-x-1">
              <div
                className={`md:flex md:flex-col md:justify-center h-full hover:bg-blue-850 ${
                  router.pathname == '/' && 'bg-blue-850'
                }`}
              >
                <Link href="/">
                  <a className="py-4 px-2 text-white text-sm">HOME</a>
                </Link>
              </div>
              <div
                className={`group h-full hover:bg-blue-850 ${
                  router.pathname == '/about' && 'bg-blue-850'
                }`}
              >
                <div className="md:flex md:flex-col md:justify-center md:h-full">
                  <a className="py-4 px-2 text-white text-sm cursor-pointer">
                    ABOUT
                  </a>
                </div>

                <div className="flex-col md:absolute md:top-full bg-red-850 md:bg-gray-200 hidden group-hover:flex w-auto">
                  <Link href="/about#Foundation">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Foundation Of SSGSA
                    </a>
                  </Link>
                  <Link href="/about#Mission">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Mission
                    </a>
                  </Link>
                  <div className="navgroup hover:bg-blue-850">
                    <div className="flex">
                      <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 navgroup-text text-sm w-full cursor-pointer">
                        Members
                      </a>
                    </div>

                    <div className="flex-col md:absolute md:left-full md:top-2/5 bg-red-850 md:bg-gray-200 hidden navgroup-box w-full">
                      <Link href="/about#Members">
                        <a className="px-6 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                          Executive Committee
                        </a>
                      </Link>
                      <Link href="/about#Advisory">
                        <a className="px-6 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                          Advisory Board
                        </a>
                      </Link>
                      <Link href="/about#Leadership">
                        <a className="px-6 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                          Leadership History
                        </a>
                      </Link>
                      <Link href="/about#Donors">
                        <a className="px-6 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                          Donors And Contributors
                        </a>
                      </Link>
                    </div>
                  </div>

                  <Link href="/about_sirsyed">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      About Sir Syed
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`group h-full hover:bg-blue-850 ${
                  router.pathname == '/apply' && 'bg-blue-850'
                }`}
              >
                <div className="md:flex md:flex-col md:justify-center md:h-full">
                  <a className="py-4 px-2 text-white text-sm cursor-pointer">
                    APPLY
                  </a>
                </div>

                <div className="flex-col md:absolute md:top-full bg-red-850 md:bg-gray-200 hidden group-hover:flex w-auto">
                  <Link href="/apply#WhoCanApply">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Who can apply?
                    </a>
                  </Link>
                  <Link href="/apply#Timeline">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Application Timeline
                    </a>
                  </Link>
                  <Link href="/faq">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      FAQs
                    </a>
                  </Link>
                  <Link href="/application-portal">
                    <a className="px-4 md:py-4 md:px-2 text-white hover:bg-blue-850 md:hover:bg-red-850 md:bg-red-850 text-white text-sm">
                      Start Your Application!
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`group h-full hover:bg-blue-850 ${
                  router.pathname == '/alumni' && 'bg-blue-850'
                }`}
              >
                <div className="md:flex md:flex-col md:justify-center md:h-full">
                  <a className="py-4 px-2 text-white text-sm cursor-pointer">
                    ALUMNI
                  </a>
                </div>

                <div className="flex-col md:absolute md:top-full bg-red-850 md:bg-gray-200 hidden group-hover:flex w-auto">
                  <Link href="/alumni#Testimonials">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Testimonials
                    </a>
                  </Link>
                  <Link href="/alumni#Awardees">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Awardees
                    </a>
                  </Link>
                  <Link href="/alumni#Scholars">
                    <a className="px-4 md:py-4 md:px-2 text-white md:text-blue-850 hover:bg-blue-850 hover:text-white text-sm">
                      Successful Scholars
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`md:flex md:flex-col md:justify-center h-full hover:bg-blue-850 ${
                  router.pathname == '/resources' && 'bg-blue-850'
                }`}
              >
                <Link href="/resources">
                  <a className="py-4 px-2 text-white text-sm">RESOURCES</a>
                </Link>
              </div>
              <div
                className={`md:flex md:flex-col md:justify-center h-full hover:bg-blue-850 ${
                  router.pathname == '/policiesAndProcedures' && 'bg-blue-850'
                }`}
              >
                <Link href="/policiesAndProcedures">
                  <a className="py-4 px-2 text-white text-sm">
                    POLICIES AND PROCEDURES
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center md:space-x-1">
            <div
              className={`flex flex-col justify-center h-full hover:bg-blue-850 ${
                router.pathname == '/donate' && 'bg-blue-850'
              }`}
            >
              <Link href="/donate">
                <a className="py-4 px-2 text-white text-sm">DONATE</a>
              </Link>
            </div>
            {/* <div
              className={`flex flex-col justify-center h-full hover:bg-blue-850 ${
                router.pathname == '/isra' && 'bg-blue-850'
              }`}
            >
              <Link href="/isra">
                <a className="px-2 md:py-4 md:px-1 text-white text-sm">
                  International Summer Research Award (ISRA)
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
