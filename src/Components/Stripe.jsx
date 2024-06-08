import React from 'react'

function Stripe({stripe}) {
  return (
    <div className='w-[16.66%] flex lex-nowrap px-10 gap-3  py-5 justify-around items-center border-[1.2px] border-l-0 border-zinc-700 '> 
      <img className='' src={stripe.url} alt="" />
      <h1 className='text-xl text-semibold'>{stripe.number}</h1>
    </div>
  )
}

export default Stripe
