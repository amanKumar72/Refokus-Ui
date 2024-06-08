import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='flex gap-1 max-w-screen-xl  mx-auto justify-center'>
      <Card width={'basis-1/3'} project={false} hover={false}/>
      <Card width={'basis-2/3'} project={true} hover={true}/>
    </div>
  )
}

export default Cards
