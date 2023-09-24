import React from 'react'

const Tab = ({ tab }) => {
  return (
    <li role="presentation" className="flex-grow basis-0 text-center">
      <a
        href="#tabs-home02"
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-red-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-home02"
        data-te-nav-active
        role="tab"
        aria-controls="tabs-home02"
        aria-selected="true"
      >{tab}</a>
    </li>
  )
}

export default Tab