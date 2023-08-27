import React from 'react'

export default function Element({
  number,
  en,
  zh,
  aw,
  type,
  bl, br, bb, bt
}: {
  number: number
  en: string
  zh: string
  aw: number
  type: 'h' | 'x' | 'l' | 'g' | 'lx' | 'ax' | 'jt' | 'j'
  bl?: boolean
  br?: boolean
  bb?: boolean
  bt?: boolean
}) {
  let style
  switch(type) {
    case 'h':
      style = 'hover:bg-green-500/90 text-green-500';
      break;
    case 'x':
      style = 'hover:bg-purple-500/90 text-purple-500';
      break;
    case 'l':
      style = 'hover:bg-cyan-500/90 text-cyan-500';
      break;
    case 'g':
      style = 'hover:bg-orange-500/90 text-orange-500';
      break;
    case 'lx':
      style = 'hover:bg-lime-500/90 text-lime-500';
      break;
    case 'ax':
      style = 'hover:bg-red-500/90 text-red-500';
      break;
    case 'jt':
      style = 'hover:bg-yellow-500/90 text-yellow-500';
      break;
    case 'j':
      style = 'hover:bg-amber-500/90 text-amber-500';
      break;
  }
  return (
    <div>
      <div className={`
        p-1 mx-auto border-slate-800 group transition-all hover:scale-110 hover:text-white 
        ${style} 
        ${bl && 'border-l'}
        ${br && 'border-r'}
        ${bt && 'border-t'}
        ${bb && 'border-b'}
      `}>
        <div className='flex items-center justify-between px-1'>
          <div className='text-right text-sm'>{number}</div>
          <div className='text-right text-sm'>{en}</div>
        </div>
        <div className=' font-bold text-2xl text-center'>{zh}</div>
        <div className='text-xs opacity-80 text-center'>{aw}</div>
      </div>
      {/* <div className='max-w-[45px]'>
        <div className='text-right text-sm'>1</div>
        <div className='text-green-500 font-bold text-2xl text-center'>H</div>
        <div className='text-xs/80 text-center'>1.008</div>
      </div> */}
    </div>
  )
}
