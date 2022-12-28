// with postcss: 
//   npm install -D tailwindcss postcss autoprefixer 
//   npx tailwindcss init -p

// vscode extension: postcss, tailwind

import Image from 'next/image';

import { Line } from '../components/line';
import { MyFeatures } from '../components/myfeatures';
import { Project } from '../components/projetc';

import logoPortfolio from '../assets/logo3.png';

export default function Home() {

  return (

    <div className="max-w-[1440px] min-h-screen mx-auto flex flex-col items-stretch text-white ">

      <div className="flex h-[60px] items-center justify-end pr-5 gap-10 text-white tracking-[5px]">
        <a href='#' className="hover:text-gray-500">home</a>
        <a href='#' className="hover:text-gray-500">projects</a>
        <a href='#' className="hover:text-gray-500">contact</a>
      </div>

      <div className="flex justify-center ">
        <div className="">
          <Image 
            src={logoPortfolio} 
            alt="logo" 
            quality={100} 
            className="w-32 md:w-72 absolute"
          />
          <Image 
            src={logoPortfolio} 
            alt="logo" 
            quality={100} 
            className="w-32 md:w-80 blur-2xl opacity-40"
          />
        </div>
        
        <div className="flex items-center">
          <span className="font-baumans xs:text-3xl md:text-6xl tracking-[20px]">NEKURO DEV</span>
        </div>  
      </div>

      <div className="flex justify-between">
        <div className="p-5">
          <h1 className="font-baumans text-4xl tracking-[5px]">#EU</h1>
          <p className='mt-4 '>Olá Mundo! Eu me chamo <span className="shadow-2xl text-3xl tracking-[5px]">Guilherme Kodi Abe</span>, sou um programador de
          sistemas web e desenvolvedor de <span className="tracking-[5px] shadow-2xl text-3xl">jogos</span>. <br/><span className="tracking-[5px] shadow-2xl text-3xl">Sonho</span> em desenvolver jogos desde meus 12 anos de idade.
          Quando aos 17 anos de idade, durante técnico de informática, <br/>descubro a coisa mais <span className="tracking-[5px] shadow-2xl text-3xl">incrível</span> na minha vida. 
          A <span className="shadow-2xl text-3xl tracking-[5px]">programação</span>.
          E desde então nunca mais parei de me aventurar nos <span className="tracking-[5px] shadow-2xl text-3xl">códigos</span>.
          </p>
        </div>

        <div className="p-5 flex items-center">
          <Image 
            src='nekuro201.png'
            className="rounded-full w-auto h-auto max-h-[300px] shadow-gray-800 shadow-lg brightness-90" 
            width={200} 
            height={200} 
            alt="Guilherme Kodi Abe" 
            quality={100} 
          />
        </div>
      </div>

      <MyFeatures />

      <Line />

      <div className="p-5">
        <h1 className="font-baumans text-4xl tracking-[5px]">#Projetos</h1>
      </div>
    </div>
  )
}

