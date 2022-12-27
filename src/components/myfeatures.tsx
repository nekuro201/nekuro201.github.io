import PhpIcon from '../assets/php.svg';
import NodeIcon from '../assets/node.svg';
import CssIcon from '../assets/css.svg';
import Html5Icon from '../assets/html5.svg';
import CIcon from '../assets/c.svg';

import UnityIcon from '../assets/unity.svg';
import ReactIcon from '../assets/react.svg';
import MysqlIcon from '../assets/mysql.svg';

export function MyFeatures(){

  const effectHoverSvg = 
    `
      w-5 
      h-5
      md:w-12
      md:h-12
    
      fill-gray-100
      group-hover:fill-black-700
      group-hover:delay-75
      delay-300   
    `;

    const effectHoverSvg2 = 
    `
      w-5 
      h-5
      md:w-10
      md:h-10

      fill-gray-100
      group-hover:fill-black-700
      group-hover:delay-75
      delay-300 
      mt-1
      md:mt-1.5
    `;

    const effectHoverSvg3 = 
    `
      w-5 
      h-5
      md:w-12
      md:h-12

      fill-gray-100
      group-hover:fill-black-700
      group-hover:delay-75
      delay-300 
      mr-2
    `;
  
  const effectHoverCircle = 
    `
      flex
      justify-center
      items-center
      bg-gray-700 
      rounded-full 
      w-8 
      h-8
      md:w-16
      md:h-16 
      group 
      hover:bg-gray-100 
      hover:-translate-y-2
      transition 
      duration-300
    `;

  return(

    <div className='flex justify-center  gap-5'>

      <div className={effectHoverCircle}>
        <PhpIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg}  
        />
      </div> 

      <div className={effectHoverCircle}>
        <NodeIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg} 
        />
      </div> 

      <div className={effectHoverCircle}>
        <CssIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg}
        />
      </div> 

      <div className={effectHoverCircle}>
        <Html5Icon 
          width={44} 
          height={44} 
          className={effectHoverSvg2}
        />
      </div> 

      <div className={effectHoverCircle}>
        <CIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg}
        />
      </div> 

      <div className={effectHoverCircle}>
        <MysqlIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg}
        />
      </div> 

      <div className={effectHoverCircle}>
        <ReactIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg}
        />
      </div> 

      <div className={effectHoverCircle}>
        <UnityIcon 
          width={50} 
          height={50} 
          className={effectHoverSvg3}
        />
      </div> 
    </div>
  );
}