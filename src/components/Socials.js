import React from 'react'
import {socialData} from '../data'

const Socials = () => {
  return (
    <div className=' flex gap-x-[10px]'>
      {socialData.map((item, index)=>{
        return(
          <a className=' border border-white/20 rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:border-accent hover:text-accent transition-all duration-300
          ' href={item.href} key={index}>{item.icon}</a>
        )
      })}
    </div>
  )
}

export default Socials