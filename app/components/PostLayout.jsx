/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "@remix-run/react";
import ButtonLink from "./ButtonLink";

import { AiOutlineClose } from "react-icons/ai";

export default function PostLayout({ menu, menuComponent, children, data }) {
  const Menu = menu;
  const MenuComponent = menuComponent;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Fragment>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <AiOutlineClose className="h-6 w-6 text-secondary" />
                      </button>
                

                    </div>
                  </Transition.Child>
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <Link
                        className="text-2xl text-primary hover:text-secondary font-bold"
                        to="/"
                      >
                        Remix Fun
                      </Link>
                    </div>
                    <nav className="mt-5 px-2 space-y-1">
                      <Menu
                        data={data.attributes.posts_in_group.data}
                        component={MenuComponent}
                        onClick={() => setSidebarOpen(false)}
                      />
                    </nav>
                  </div>
                  <div className="border-t border-base-200 p-4">
                    <div className="flex-shrink-0 group block">
                      <ButtonLink
                        to="add-post"
                        className="w-full"
                        onClick={() => setSidebarOpen(false)}
                      >
                        Recommend Topic
                      </ButtonLink>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-80 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-base-200 bg-base-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link
                  className="text-3xl text-primary hover:text-secondary font-bold"
                  to="/"
                >
                  Remix Fun
                </Link>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-base-200 space-y-1">
                <Menu
                  data={data.attributes.posts_in_group.data}
                  component={MenuComponent}
                />
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-base-200 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <ButtonLink to="add-post" className="w-full">
                    Recommend Topic
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pl-80 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-base-200">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div>{children}</div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}
