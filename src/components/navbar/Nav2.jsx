import React, { useState } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropdown] = useState(false);
  return (
    <nav className="bg-white">
      {dropDown && (
        <button
          className="absolute top-0 left-0 w-full h-full bg-black opacity-5"
          onClick={() => setDropdown(false)}
        ></button>
      )}
      <div className="container mx-auto px-3 sm:px-0 ">
        <div className=" flex items-center justify-between h-14">
          <button
            className="p-2 rounded-lg text-gray-700 text-2xl sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
          <div className="">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center space-x-10">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-600 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="#"
                className="h-14 leading-10 text-gray-600 border-b-2 border-white hover:border-gray-600 hover:text-gray-800 py-2 text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="h-14 leading-10 text-gray-600 border-b-2 border-white hover:border-gray-600 hover:text-gray-800 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="h-14 leading-10 text-gray-600 border-b-2 border-white hover:border-gray-600 hover:text-gray-800 py-2 text-sm font-medium"
              >
                Calendar
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className=" relative rounded-full  p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white">
              <RiNotification3Line className=" h-6 w-6" />
              <span className=" absolute ml-2 -mt-9 bg-violet-600 text-sm text-gray-100 font-semibold px-1 rounded-lg inline-block">
                10
              </span>
            </button>
            <div className="relative">
              <button
                className=" rounded-full focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => setDropdown(!dropDown)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
              {dropDown && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-semibold"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-600 hover:bg-gray-700 hover:text-white"           */}
          <a
            href="#"
            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-l-4 border-white hover:border-gray-400 block px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-l-4 border-white hover:border-gray-400 block px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 border-l-4 border-white hover:border-gray-400 block px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav2;
