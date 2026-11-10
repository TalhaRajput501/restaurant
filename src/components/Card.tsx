import { Item, Reveal, Stepper } from '@/app/page';
import React from 'react'
const rs = (n: number) => `Rs. ${n.toLocaleString("en-US")}`;

type CardProps = {
  delay: number;
  item: Item;
  qty: number;
  onAdd: () => void;
  onDec: () => void;
};

export default function Card({ delay, item, qty, onAdd, onDec }: CardProps) {
  // thsi is how i should call it 

  return (
    // <Reveal key={item.id} delay={delay}>
    //   <div className="flex overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 flex-col max-w-[300px] mx-auto  ">
    //     <img src={item.image} alt={item.name} loading="lazy" className="h-auto  object-cover" />
    //     <div className="flex flex-1 flex-col p-5 z-30">
    //       <h3 className="text-lg font-bold">{item.name}</h3>
    //       <p className="mt-1.5 flex-1 text-sm leading-6 text-stone-400">{item.desc}</p>
    //       <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
    //         <span className="text-xl font-black text-amber-300">{rs(item.price)}</span>
    //         <Stepper qty={qty} onAdd={onAdd} onDec={onDec} />
    //       </div>
    //     </div>
    //   </div>
    // </Reveal>




    <Reveal key={item.id} delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/60">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-6 text-stone-400">{item.desc}</p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-xl font-black text-amber-300">{rs(item.price)}</span>
            <Stepper qty={qty} onAdd={onAdd} onDec={onDec} />
          </div>
        </div>
      </article>
    </Reveal>
  )


}
