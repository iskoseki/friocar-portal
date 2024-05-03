import * as Constants from "../constants";
import { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//animation import
import "animate.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
export default function Navbar() {
  const navigation = Constants.Navigation;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navBeforeLogo = navigation.slice(0, 2);
  const navAfterLogo = navigation.slice(2);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      if (isShow !== isScrolled) setIsScrolled(isShow);
    },
    [isScrolled]
  );

  return (
    <header
      className={`flex justify-center animate__fadeInUp transition-all duration-700 ease-in-out  p-0 inset-x-0 top-0 z-40 fixed`}
    >
      <nav
        className="md:my-2 w-full md:w-[550px] bg-red-700  md:rounded-xl flex justify-center items-center py-2 "
        aria-label="Global"
      >
        <div className="hidden  md:flex lg:flex-1 justify-end">
          {navBeforeLogo.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 px-2 text-white hover:text-gray-100 hover:underline transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-start  lg:flex-1">
          <div className="mx-12">
            <span className="sr-only">Frio car</span>

            <img src="/logo.png" alt="" height={60} width={100} />
          </div>
        </div>

        <div className="absolute right-4 md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden  md:flex lg:flex-1">
          {navAfterLogo.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 px-2 text-white hover:text-gray-100 hover:underline transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="sm:hidden z-50 transition-all duration-700 ease-out"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="" src="/logo.png" alt="" width={110} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-900 hover:bg-gray-50 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
