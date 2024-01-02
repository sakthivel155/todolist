import React from 'react'
import List from "./List";
import Input from './Input';
const Todolist = () => {
const [arr , setArr] = React.useState([]);

 function addList(text){
  if(text){
    setArr((prevalue)=>{
      return [ text,...prevalue]  
    });
   
  }
  
}
function deleteItem(id){
 setArr((preValues)=>{
        return preValues.filter((item,index)=>{
                                   return index !== id
                             })})}
  return (
     <div className='flex justify-center'> 
        <div className="flex flex-col w-[450px]">
         <Input addlist={addList}/>
          <ul>
            {arr.map((text,index)=> <List key={index} id={index} note={text} whenDelete={deleteItem} />)}
          </ul>
        </div>
     </div>
     
  )
  }
export default Todolist
