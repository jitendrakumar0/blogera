"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
    CheckIcon,
    SwatchIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/react/24/outline'

const ThemeToggle = () => {
    const initialTheme = typeof window !== 'undefined' ? localStorage.theme || 'system' : 'system';
    const [currentTheme, setCurrentTheme] = useState(initialTheme);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    },[initialTheme, loaded])
    
    const setTheme = (theme) => {
            localStorage.theme = theme;
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
            setCurrentTheme('light')
            localStorage.theme = 'light'
            document.documentElement.classList.add('light');
        } else if (theme === 'dark') {
            document.documentElement.classList.remove('light');
            setCurrentTheme('dark')
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark');
        } else {
            setCurrentTheme('system')
            localStorage.removeItem('theme')
            document.documentElement.classList.remove('light');
            document.documentElement.classList.remove('dark');
        }
    };
    
    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        <>
        {
            loaded ?
            <Listbox defaultValue={currentTheme} onChange={(e)=>{setTheme(e)}}>
                <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default sm:text-sm">
                    <span className="block truncate text-gray-800 dark:text-gray-200">
                        {loaded ?
                            (
                            currentTheme === "light" ? <SunIcon className='size-5' aria-hidden="true"/>: currentTheme === "dark" ? <MoonIcon className='size-5' aria-hidden="true"/>:<SwatchIcon className='size-5' aria-hidden="true"/>
                            )
                            : null
                        }
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    enter="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 right-0 rtl:right-auto rtl:left-0 overflow-auto rounded-md p-1 text-base bg-white shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-100/10 focus:outline-none sm:text-sm">
                        <Listbox.Option
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 flex items-center gap-3 rounded-md ${
                            active ? 'bg-theme1/10 text-theme1 dark:bg-theme2 dark:text-gray-200' : 'text-gray-900 dark:text-gray-100'
                            }`
                        }
                        value="light"
                        >
                        {({ selected }) => (
                            <>
                            <span>
                                <SunIcon className='size-5' aria-hidden="true"/>
                            </span>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                Light
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1 dark:text-white">
                                <CheckIcon className="size-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                        <Listbox.Option
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 flex items-center gap-3 rounded-md ${
                            active ? 'bg-theme1/10 text-theme1 dark:bg-theme2 dark:text-gray-200' : 'text-gray-900 dark:text-gray-100'
                            }`
                        }
                        value="dark"
                        >
                        {({ selected }) => (
                            <>
                            <span>
                                <MoonIcon className='size-5' aria-hidden="true"/>
                            </span>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                Dark
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1 dark:text-white">
                                <CheckIcon className="size-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option><Listbox.Option
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 flex items-center gap-3 rounded-md ${
                            active ? 'bg-theme1/10 text-theme1 dark:bg-theme2 dark:text-gray-200' : 'text-gray-900 dark:text-gray-100'
                            }`
                        }
                        value="system"
                        >
                        {({ selected }) => (
                            <>
                            <span>
                                <SwatchIcon className='size-5' aria-hidden="true"/>
                            </span>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                System
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-theme1 dark:text-white">
                                <CheckIcon className="size-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
            :
            null
        }
        </>
    )
}

export default ThemeToggle