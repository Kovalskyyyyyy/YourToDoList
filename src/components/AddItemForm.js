import React, { useState } from 'react';

function AddItemForm({ addItem }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        addItem(inputValue);
        setInputValue('');
    };

    return (
        <div className="add-item-form">
            <input
                type="text"
                placeholder="Add new item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Add Item</button>
        </div>
    );
}

export default AddItemForm;
