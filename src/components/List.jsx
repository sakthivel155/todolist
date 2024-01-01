import React from 'react'

const List = (props) => {
  return (
   <li className='mt-5 p-3  bg-[#324651d9] border-l-4 border-[#FED36A] text-white rounded-r-lg break-words font-inter text-sm list-none'>
    {props.note}
   </li>
  )
}

export default List