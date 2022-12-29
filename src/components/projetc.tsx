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

      <h1 className="w-full font-baumans text-4xl tracking-[5px] text-center md:hidden">#{props.title}</h1>

      <div className="md:mb-24 p-5 block md:flex">
        <div className="w-1/2 md:w-2/5 flex-none">
          <div className="min-h-[200px] h-full w-auto flex md:justify-center md:place-items-center">
            
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

        <div className="md:min-h-[300px] flex md:items-start md:flex-col md:grow md:ml-32 mt-2">
          <h1 className="font-baumans text-4xl tracking-[5px] hidden md:block">#{props.title}</h1>
          
          <div className="my-5 text-justify md:text-left">
            <p>{props.value}</p>
          </div>

          <div className="my-5 gap-5 items-center md:items-start hidden md:flex">
            {children}
          </div>
        </div>
      </div>
      
      <div className="my-5 gap-5 items-center justify-center flex md:hidden">
        {children}
      </div>
    </div>
  );
}