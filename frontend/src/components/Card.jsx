import React from 'react'

function Card({ card }) {
  // console.log(card);
  return (
    <div className='my-5 '>
      <div className="card mr-5 space-x-1 text-center border rounded-xl bg-slate-200 hover:scale-105 ease-in-out duration-300 hover:shadow-lg">
  <figure >
    <img
      src={card.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className='flex justify-between'>
   <div className="card-title">
      {card.name}</div>
      <div className="badge badge-secondary">Free</div>
    
   </div>
    <p className='text-left'>{card.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{card.price}</div>
      <div className="badge badge-outline p-4  bg-green-600 text-white cursor-pointer hover:scale-125 ease-in-out duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card