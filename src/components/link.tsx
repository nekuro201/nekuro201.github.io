

type LinkProps = {
  href: string,
  value: string,
};

export function MyLink({href, value}: LinkProps){
  return(
    <a 
      href={href} 
      className='bg-neutral-800 text-base tracking-[1px] py-2 px-4 rounded-xl border-b-orange-400 border-gray-800 hover:border-2 hover:shadow-2xl hover:shadow-neutral-800'
    >
      {value}
    </a>
  );
}