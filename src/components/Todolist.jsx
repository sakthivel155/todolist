import React from 'react'
import List from "./List";

const Todolist = () => {
let count=0
const [text , setText] = React.useState("");//get the input sequance
const [arr , setArr] = React.useState([]);//
  
  function handleInput(event){
    const Input = event.target.value;
      setText(Input);
 }
 function addList(){
  if(text){
    setArr((prevalue)=>{
      return [ text,...prevalue]  
    });
  setText("");//after click the add task
  }
  
}
  return (
     <div className='flex justify-center'> 
        <div className="flex flex-col w-[450px]">
          <div className=' mt-[50px] flex bg-[#455A64]  justify-between rounded-l-lg rounded-br-lg'>
               <div className='flex pl-2  items-center'>
               <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                             <path d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21V21Z" stroke="#6F8793" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                <input onChange={handleInput} type="text" name="input" id="input" value={text} placeholder='Enter the Notes' className='w-[330px] p-2 outline-none bg-[#455A64] text-white font-inter text-sm'/>
               </div>
              <div>
                <button onClick={addList} className='bg-[#FED36A] p-2 rounded-tl-3xl rounded-br-lg font-inter font-medium text-[16px]' >Add Task</button>
              </div>
          </div> 
          <ul>
            {arr.map((text)=> <List note={text} key={count++}/>)}
          </ul>
        </div>
     </div>
     
  )
  }
export default Todolist