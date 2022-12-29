// with postcss: 
//   npm install -D tailwindcss postcss autoprefixer 
//   npx tailwindcss init -p

// vscode extension: postcss, tailwind

import Image from 'next/image';

import { Line } from '../components/line';
import { MyFeatures } from '../components/myfeatures';
import { Project } from '../components/projetc';
import { MyLink } from '../components/link';

import logoPortfolio from '../assets/logo3.png';
import capa1png from '../assets/capa_nlwcopa.png';
import print1png from '../assets/capagame.png';
import print2png from '../assets/print2.png';

export default function Home() {

  return (

    <div className="max-w-[1440px] min-h-screen mx-auto flex flex-col items-stretch text-white">

      <div className="flex h-[60px] items-center justify-end pr-5 gap-10 text-white tracking-[5px] md:bg-transparent bg-black-700 z-50 absolute md:relative invisible md:visible">
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
            className="w-32 md:w-[400px] blur-3xl opacity-100 absolute brightness-100 -translate-y-3 -translate-x-5 z-0"
          />
          <Image 
            src={logoPortfolio} 
            alt="logo" 
            quality={100} 
            className="w-32 md:w-72 z-10 drop-shadow-2xl"
          />
        </div>
        
        <div className="flex items-center">
          <span className="font-baumans xs:text-3xl md:text-6xl tracking-[20px]">NEKURO DEV</span>
        </div>  
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="pt-14 px-14 md:p-5">
          <h1 className="font-baumans text-4xl tracking-[5px]">#EU</h1>
          <p className='mt-4 leading-5 md:leading-10 text-justify'>Olá Mundo! Eu me chamo <span className="shadow-2xl text-3xl tracking-[5px]">Guilherme Kodi Abe</span>, sou um programador de
          sistemas web e desenvolvedor de <span className="tracking-[5px] shadow-2xl text-3xl">jogos</span>. <br/><span className="tracking-[5px] shadow-2xl text-3xl">Sonho</span> em desenvolver jogos desde meus 12 anos de idade.
          Durante o técnico de <span className="shadow-2xl text-3xl tracking-[5px]">informática</span>, aos meus 16 anos,<br/>descubro a coisa mais <span className="tracking-[5px] shadow-2xl text-3xl">incrível</span> na minha vida. 
          A <span className="shadow-2xl text-3xl tracking-[5px]">programação</span>.
          E desde então nunca mais parei de me aventurar nos <span className="tracking-[5px] shadow-2xl text-3xl">códigos</span>.
          </p>
        </div>

        <div className="py-5 md:p-5 flex justify-center md:items-center">
          <Image 
            src='https://github.com/nekuro201.png'
            className="rounded-full w-auto h-auto max-h-[100px] md:max-h-[300px] shadow-gray-800 shadow-lg brightness-90" 
            width={200} 
            height={200} 
            alt="Guilherme Kodi Abe" 
            quality={100} 
          />
        </div>
      </div>

      <MyFeatures />

      <Line />

      <Project 
        imageBack={capa1png} 
        imageFront={capa1png}
        imageBackAlt="print do jogo"
        imageFrontkAlt="print do jogo"
        title='Projetos de alunos'
        value='Projeto desenvolvido com Html e Css para exibir uma contagem de pessoas nos eventos de volei.'
      >
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
      </Project>

      <Line />

      <Project 
        imageBack={print2png} 
        imageFront={print2png}
        imageBackAlt="print do jogo"
        imageFrontkAlt="print do jogo"
        title='Onmyoudou Origins'
        value='Jogo de aventura desenvolvido na Unity.'
      >
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
        <MyLink href='https://www.github.com/nekuro201' value="Super LINK"/>
      </Project>
      
      <div className="mt-16 pb-5 text-xs flex h-[60px] items-center justify-center pr-5 gap-10 text-gray-400 tracking-[5px] md:bg-transparent bg-black-700">
        Guilherme Kodi Abe
      </div>
    </div>
  )
}

