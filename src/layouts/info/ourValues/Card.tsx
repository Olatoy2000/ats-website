import React from "react";

function Card(props: {
  initial_mesh: any;
  final_mesh: any;
  title: any;
  subtitle: any;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 bg-white shadow-sm rounded-xl mx-auto  px-20 group hover:scale-110">
      <div className="relative w-24 h-24">
        <div className="absolute grid">
          <img
            src={props.initial_mesh.src}
            alt={props.title}
            className="transition-all duration-500 group-hover:invisible group-hover:opacity-0 "
          />
        </div>
        <img
          src={props.final_mesh.src}
          alt={props.title}
          className="absolute invisible duration-500 opacity-0 transiition-all group-hover:visible group-hover:opacity-100"
        />
      </div>
      <p className="font-bold md:leading-10 leading-3 text-[2rem] text-[#47494E] group-hover:text-[#B2241C]">
        {props.title}
      </p>
      <p className="text-base text-[#47494E] font-normal leading-7 group-hover:text-[#B2241C]">
        {props.subtitle}
      </p>
    </div>
  );
}

export default Card;
function UseState(): [any, any] {
  throw new Error("Function not implemented.");
}
