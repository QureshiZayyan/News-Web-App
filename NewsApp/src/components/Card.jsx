import React from 'react';

export const Card = () => {
    return (
        <>
            <div id="card" className="card md:w-[16vw] lg:w-[20vw] xl:w-[204.8px] my-[18px] shadow-bs hover:opacity-[5]">
                <div id="card-img" className="w-full">
                    <img src="" alt="" id="newsimg" className="md:h-[130px] sm:h-[80px] rounded-t-[8px] w-full" />
                </div>
                <div id="news-content" className="h-[180px] px-[5px] py-[5px] bg-white text-black rounded-b-[8px] text-sm">
                    <h2 id="news-desc"></h2>
                    <a href="" className="link inline-block hover:underline hover:text-blue-700 my-[2px]" target="_blank"
                        id="newslink"></a>
                    <p id="publishedat"></p>
                </div>
            </div>
        </>
    )
}

