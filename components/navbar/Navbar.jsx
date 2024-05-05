"use client";
import React, { Fragment, useEffect, useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { LiaSignInAltSolid } from "react-icons/lia";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navScrollValue, setNavScrollValue] = useState(true);

    const products = [
        {
            name: "Analytics",
            description: "Get a better understanding of your traffic",
            href: "",
            icon: ChartPieIcon,
        },
        {
            name: "Engagement",
            description: "Speak directly to your customers",
            href: "",
            icon: CursorArrowRaysIcon,
        },
        {
            name: "Security",
            description: "Your customers’ data will be safe and secure",
            href: "",
            icon: FingerPrintIcon,
        },
        {
            name: "Integrations",
            description: "Connect with third-party tools",
            href: "",
            icon: SquaresPlusIcon,
        },
        {
            name: "Automations",
            description: "Build strategic funnels that will convert",
            href: "",
            icon: ArrowPathIcon,
        },
    ];
    const callsToAction = [
        { name: "Watch demo", href: "", icon: PlayCircleIcon },
        { name: "Contact sales", href: "", icon: PhoneIcon },
    ];

    useEffect(()=>{
        setDomLoaded(true)
    },[])
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setNavScrollValue(
                prevScrollPos > currentScrollPos || currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, navScrollValue]);

    return (
        <>
        {
            domLoaded ?
            <header
                className={`fixed inset-x-0 z-[10000] select-none transition-all duration-500 ${navScrollValue ? "top-0" : "-top-full"
                    } ${prevScrollPos <= 50
                        ? ""
                        : "backdrop-blur-3xl bg-white/50 dark:bg-theme2/30 *:md:py-5 *:py-3"
                    }`}
            >
                <nav
                    className="flex mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl transition-all duration-500 items-center justify-between md:py-10 py-6 lg:px-8 md:px-6 px-4"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link
                            href=""
                            className="-m-1.5 p-1.5 md:*:h-8 *:h-5 text-theme1 dark:text-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 176 40"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                                    clipRule="evenodd"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex lg:hidden order-last">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <CgMenuRight className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 focus:outline-none">
                                Product
                                <ChevronDownIcon
                                    className="size-5 flex-none text-gray-400 dark:text-gray-400"
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute -left-8 rtl:left-auto rtl:-right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-100/10">
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700 dark:group-hover:bg-gray-800">
                                                    <item.icon
                                                        className="h-6 w-6 text-gray-600 group-hover:text-theme1 dark:text-gray-400 dark:group-hover:text-gray-100"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <div className="flex-auto">
                                                    <Link
                                                        href={item.href}
                                                        className="block font-semibold text-gray-900 dark:text-gray-100"
                                                    >
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </Link>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-gray-100/10 dark:bg-gray-700">
                                        {callsToAction.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900"
                                            >
                                                <item.icon
                                                    className="size-5 flex-none text-gray-400 dark:text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Link
                            href=""
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                        >
                            Home
                        </Link>
                        <Link
                            href=""
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                        >
                            All Blog
                        </Link>
                        <Link
                            href=""
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                        >
                            About
                        </Link>
                        <Link
                            href=""
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                        >
                            Contact
                        </Link>
                    </Popover.Group>
                    <div className="flex lg:flex-1 lg:justify-end lg:items-center gap-3 max-lg:ml-auto rtl:max-lg:ml-3 rtl:max-lg:mr-auto max-lg:mr-3">
                        <Link
                            href=""
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hidden lg:inline-flex items-center gap-1 border-r border-gray-300 dark:border-gray-500 pr-4"
                        >
                            Log in{" "}
                            <span>
                                <LiaSignInAltSolid className="size-5" />
                            </span>
                        </Link>
                        <ThemeToggle />
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-[10000] w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-100/10">
                        <div className="flex items-center justify-between">
                            <Link
                                href=""
                                className="-m-1.5 p-1.5 md:*:h-8 *:h-5 text-theme1 dark:text-gray-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 176 40"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                    ></path>
                                </svg>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-100/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700">
                                                    Product
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open ? "rotate-180" : "",
                                                            "size-5 flex-none"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...products, ...callsToAction].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Link
                                        href=""
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href=""
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Marketplace
                                    </Link>
                                    <Link
                                        href=""
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Company
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <Link
                                        href=""
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            :
            <div
                className={`animate-pulse`}>
                <div
                    className="flex mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl transition-all duration-500 items-center justify-between md:py-10 py-6 lg:px-8 md:px-6 px-4"
                >
                    <div className="flex lg:flex-1">
                        <div
                            className="-m-1.5 p-1.5 md:h-10 h-8 w-52 skeleton-text"
                        >XXXXXXXXX
                        </div>
                    </div>
                    <div className="flex lg:hidden order-last">
                        <div
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 size-6 skeleton-text"
                        >
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">

                        <div
                            className="text-sm skeleton-text"
                        >
                            XXXX
                        </div>
                        <div
                            className="text-sm skeleton-text"
                        >
                            XXXXXXXX
                        </div>
                        <div
                            className="text-sm skeleton-text"
                        >
                            XXXXX
                        </div>
                        <div
                            className="text-sm skeleton-text"
                        >
                            XXXXXX
                        </div>
                    </div>
                    <div className="flex lg:flex-1 lg:justify-end lg:items-center gap-3 max-lg:ml-auto rtl:max-lg:ml-3 rtl:max-lg:mr-auto max-lg:mr-3">
                        <div className="text-sm skeleton-text hidden lg:inline-flex items-center gap-1 pr-4">
                            XXXXXXXXX
                        </div>
                        <div className="text-sm skeleton-text hidden lg:inline-flex items-center gap-1 pr-4">
                            XXXX
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Navbar;
