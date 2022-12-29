import React from 'react';
import { IconProps } from "phosphor-react";

type LinkProps = {
  href: string,
  value: string,
  icon?: React.FC<IconProps>,
};

export function MyLink({href, value, icon: Icon}: LinkProps){
  return(
    <a 
      href={href} 
      className='bg-neutral-800 hover:bg-neutral-700 flex justify-center gap-2 text-center md:text-base tracking-[1px] py-2 px-4 rounded-xl border-b-orange-400 border-neutral-800 hover:border-2 hover:shadow-2xl hover:shadow-neutral-800'
    >
      {Icon ? <Icon color="#fff" weight="fill" size={24} /> : ""}
      {value}
    </a>
  );
}