import { Menu } from '@mantine/core';
import React from 'react';
import PopUp from "../assets/group-pop.png";
import BoyLaptop from "../assets/boy-with-nosemark.png";


export default function Demo() {
  return (
    <Menu transition="slide-up" offset={200} transitionDuration={150}>
        <Menu.Target> 
      <img src={PopUp} className='fixed w-10 bottom-6 right-6' alt="pop-up" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label className='w-[400px]'>
            <article className='bg-[#DC372F] border border-[#EAAEAD] rounded-tl-2xl rounded-tr-2xl flex gap-3 justify-start pl-8 py-4'>
                <div  className="p-2 rounded-full bg-[#EAAEAD]">
                    <img src={BoyLaptop} alt="Boy with Laptop" className='w-5'  />
                </div>
                <section className='flex flex-col gap-3'>
                    <div className='text-[1.125rem] text-bold text-white leading-3'>Ask_Deji</div>
                    <div className='text-white text-[0.875rem] font-normal leading-3'>Customer Representative</div>
                </section>
            </article>
        </Menu.Label>
        <Menu.Label>
            <article>Good morning</article>
        </Menu.Label>
        <Menu.Label>
            <article>How are you</article>
        </Menu.Label>
      </Menu.Dropdown>
      
    </Menu>
  );
}