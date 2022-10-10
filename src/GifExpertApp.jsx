import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['GYM', 'HardStyle', 'Zyzz'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>listado</h1>
            <AddCategory onAddCategory={onAddCategory} />
            <div>
                {categories.map((element) => (
                    <GifGrid key={ element } category={ element } />
                ))}
            </div>
        </>
    )
}