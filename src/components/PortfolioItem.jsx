import React from 'react';

function PortfolioItem({ title, imgUrl, stack, desc, link, iconUrl, iconUrlMac, iconUrlLinux }) {
   return (
         <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-800"
         >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map(item => (
                  <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
          <p className='text-xs mt-2'>
            {desc}
          </p>
          <div className="flex mt-2">
              <img src={iconUrl} alt="Windows" className="w-5 h-5 mr-2" />
              <img src={iconUrlMac} alt="Mac" className="w-5 h-5 mr-2" />
              <img src={iconUrlLinux} alt="Linux" className="w-5 h-5 mr-2" />
            </div>
         </div>
      </a>
   )
}

export default PortfolioItem;