import React from 'react'

export const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-[1]">
                <nav className="flex justify-between items-center px-[20px] py-[10px] shadow-md bg-blue-200">
                    <div className="heading">
                        <a href="#">
                            <h2 id="reload" className="text-2xl font-extrabold cursor-pointer text-black">NewsWeb</h2>
                        </a>
                    </div>

                    <div className="search">
                        <form>
                            <input type="text" name="" id="input" className="focus:outline-none w-[250px] py-[4px] px-[3.7px] text-black rounded-md" className="font-bold focus:outline-none w-[250px] py-[4px] px-[3.5px] text-black rounded-md" placeholder="Search News"/>
                                <button id="btn" className="bg-blue-600 px-[6px] py-[4.6px] rounded-md font-bold text-white">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    )
}
