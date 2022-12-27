import Image from "next/image";

export function Project(){
  return(
    <div className="flex w-3/4 gap-10">
      <Image 
        src='https://github.com/nekuro201.png' 
        className="opacity-70 w-48 shadow-gray-800 shadow-lg" 
        width={200} 
        height={200} 
        alt="Guilherme Kodi Abe" 
      />

      <div>
        <h1 className="font-baumans text-4xl tracking-[5px]"># projects</h1>
        
        <p className='mt-5'>
          Olá Mundo! Eu me chamo Guilherme Kodi Abe, Sou um programador de
          sistemas web <br/>e desenvolvedor de jogos.
        </p>

        <br/>

        <a href='#'>LINK</a>
      </div>
    </div>
  );
}