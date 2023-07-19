import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Mario']);
  //console.log(categories);

  const onAddCategory = (newCategory) =>{
    //console.log(newCategory)
    if (categories.includes(newCategory)) return;    
    setCategories([newCategory,...categories]);
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />

        {/* Listado de gifs */}
        {
                        categories.map(category=>(
                          <GifGrid 
                            key={category} 
                            category={category}
                          />
                      ))
        }

        {/* <button onClick={onAddCategory}>Agregar categoria</button> */}
        {/* <ol> */}
            {
              // categories.map(category=>{
              //   // return <li key={category}>{category}</li>
              //   return (
              //     <div key={category}>
              //       <h3>{category}</h3>
              //       <li>{category}</li>
              //     </div>
              //   );
              // })
              // ****Otra opcion
              // categories.map(category=>(
              //     <div key={category}>
              //       <h3>{category}</h3>
              //       <li>{category}</li>
              //     </div>
              // ))
              //***Componente
            }
            {/* <li>1</li> */}
        {/* </ol> */}
            {/* gif item */}
    </> 
  )
}
