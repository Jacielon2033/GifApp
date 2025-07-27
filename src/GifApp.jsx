import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
export const GifApp = () => {


const [categories, setcategories] = useState(['One Punch'])

const onAddCategory=()=>{

setcategories([...categories ,"valorant"])
console.log(categories)
}
  
  return (
    <>
    {/*titulo*/}
    <div>GifApp</div>
    
     {/*input*/}
     <AddCategory/>
   <button onClick={onAddCategory}>agregar</button>
   
    {/*lista*/}
     <ol>
      {
      categories.map(category=>{
        return <li key={category}>{category} </li>

      })
}


    </ol>

    </>
  )
}
