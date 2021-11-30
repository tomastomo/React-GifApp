import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifApp = () => {

    const [categories, setCategories] = useState([' React', 'React Native', 'Next']);

    //const handleAdd = () => {
      //  setCategories([...categories, 'JavaScript']);
    //}

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            
            
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
            }   
            </ol>
        </>
    )
}
