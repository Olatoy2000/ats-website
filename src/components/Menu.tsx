import { Menu } from '@mantine/core';
import React from 'react';
import PopUp from "../assets/group-pop.png";
import BoyLaptop from "../assets/boy-with-nosemark.png";


export default function Demo() {
  return (
    <Menu transition="slide-up" transitionDuration={150}>
        <Menu.Target>
        
      <img src={PopUp} className='absolute right-6 bottom-[-30px]' alt="pop-up" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
            <article className='bg-[#DC372F] border border-[#EAAEAD] rounded-tl-2xl rounded-tr-2xl flex gap-3 justify-start p-3'>
                <div  className="p-3 rounded-full bg-[#EAAEAD]">
                    <img src={BoyLaptop} alt="Boy with Laptop" />
                </div>
                <section className='flex flex-col'>
                    <div className='text-[1.125rem] text-bold leading-3'>Ask Deji</div>
                    <div className=''>Customer Representative</div>
                </section>
            </article>
        </Menu.Label>
        <Menu.Label>
            <article></article>
        </Menu.Label>
        <Menu.Label>
            <article></article>
        </Menu.Label>
      </Menu.Dropdown>
      
    </Menu>
  );
}