import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import MemberList from './components/MemberList';
import './App.css';

function App() {
    const [username] = useState('Username');
    const [lists, setLists] = useState([
        { id: 1, name: 'List 1', todos: ['Item 1'], members: ['Member 2', 'Member 3', 'Member 4'], isEditing: false }
    ]);
    const [newListName, setNewListName] = useState('');

    const addNewList = () => {
        if (newListName.trim()) {
            setLists([
                ...lists,
                { id: Date.now(), name: newListName, todos: [], members: [], isEditing: false }
            ]);
            setNewListName('');
        }
    };

    const updateTodos = (listId, newTodos) => {
        setLists(lists.map(list => list.id === listId ? { ...list, todos: newTodos } : list));
    };

    const updateMembers = (listId, newMembers) => {
        setLists(lists.map(list => list.id === listId ? { ...list, members: newMembers } : list));
    };

    const toggleEditMode = (listId) => {
        setLists(lists.map(list => list.id === listId ? { ...list, isEditing: !list.isEditing } : list));
    };

    const handleNameChange = (listId, newName) => {
        setLists(lists.map(list => list.id === listId ? { ...list, name: newName, isEditing: false } : list));
    };

    return (
        <div className="app">
            <Header username={username} />
            <div className="add-list-section">
                <input 
                    type="text" 
                    placeholder="Enter new list name" 
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)} 
                    className="new-list-input"
                />
                <button onClick={addNewList} className="add-list-btn">Add List</button>
            </div>
            <div className="content">
                {lists.map((list) => (
                    <div key={list.id} className="list-container">
                        <TodoList 
                            list={list}
                            onToggleEdit={() => toggleEditMode(list.id)}
                            onNameChange={(newName) => handleNameChange(list.id, newName)}
                            todos={list.todos}
                            setTodos={(newTodos) => updateTodos(list.id, newTodos)}
                        />
                      
                        <MemberList 
                            members={list.members} 
                            setMembers={(newMembers) => updateMembers(list.id, newMembers)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
