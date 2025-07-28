import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value);

    }
    const onSubmit = (event) => {
        event.preventDefault();
        const inputval = inputValue.trim();
        if (inputval.length <= 1) return;
        onNewCategory(inputval);

        setinputValue("");
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type="text"
                placeholder="Search Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
