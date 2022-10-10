import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target: { value } }) => {
        setInputValue(value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const valor = inputValue.trim()
        if( valor <= 1 ) return;
        onAddCategory(valor)
        setInputValue('')
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
            {/* <button type="submit">Enviar</button> */}
        </form>
    )
}
