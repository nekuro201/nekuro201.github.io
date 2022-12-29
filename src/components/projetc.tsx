import React from 'react';
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  imageBack: StaticImageData,
  imageFront: StaticImageData,
  imageBackAlt?: string,
  imageFrontkAlt?: string,
  title: string,
  value: string,
  children?: React.ReactNode,
};

export function Project({imageBack, imageFront, children, ...props}: ProjectProps){
  return(
    <div>
      <div className="md:mb-24 p-5 flex">
        <div className="w-1/2 md:w-2/5 flex-none">
          <div className="h-full w-auto flex justify-center place-items-center">
            
            <div className="max-w-7xl h-52 absolute -translate-x-6 -translate-y-6 md:-translate-x-16 md:-translate-y-16">
              <Image 
                src={imageBack}
                className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-orange-300 shadow-2xl blur-md" 
                width={500} 
                height={500} 
                alt={props.imageBackAlt ? props.imageBackAlt : "null"}
                quality={100} 
              />
            </div>

            <div className="max-w-7xl h-52 absolute translate-x-6 translate-y-12 md:translate-x-16 md:translate-y-16">
              <Image 
                src={imageFront}
                className="w-auto h-auto max-h-[150px] md:max-h-[290px] shadow-gray-300 shadow-2xl" 
                width={500} 
                height={500} 
                alt={props.imageFrontkAlt ? props.imageFrontkAlt : "null"} 
                quality={100} 
              />
            </div>
          </div>
        </div>

        <div className="min-h-[300px] grow">
          <h1 className="font-baumans text-4xl tracking-[5px]">#{props.title}</h1>
          
          <div className="py-5 pl-16 pr-2 md:px-28 px-2">
            <p>{props.value}</p>
          </div>

          <div className="py-5 pl-16 pr-2 md:px-28 px-2 flex gap-5 items-center invisible md:visible">
            {children}
          </div>
        </div>
      </div>
      
      <div className="md:px-28 flex gap-5 justify-center items-center visible md:invisible">
        {children}
      </div>
    </div>
  );
}