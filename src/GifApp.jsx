import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './GifGrid'
export const GifApp = () => {


  const [categories, setcategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories])

  }

  return (
    <>

      <h3 className='h3'>GifFinder</h3>


      <AddCategory onNewCategory={value => onAddCategory(value)} />




      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}

          />
        ))}








    </>
  )
}
