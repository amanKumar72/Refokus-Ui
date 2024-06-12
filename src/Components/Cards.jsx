import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='flex gap-1 max-w-screen-xl w-[90%]  mx-auto justify-center'>
      <Card width={'33%'} project={false} hover={false}/>
      <Card width={'67%'} project={true} hover={true}/>
    </div>
  )
}

export default Cards
