import React from 'react'
import Nav from './Nav'
import Todolist from './Todolist'

const App = () => {
  return (
   <div className='min-h-screen h-[100%] bg-[#202832] '>
    <Nav />
    <Todolist />
   </div>
  )
}

export default App