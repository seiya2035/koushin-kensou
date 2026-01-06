import React, { useEffect, useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState('aaaaaaa');
    useEffect(()=>{
        console.log(todos)
    },[todos])
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        setTodos([...todos, newTodo]); //...todosでnewtodoの新しいタスクをtodoリストの最後に入れるよ。 ...<==スプレット構文
        setInputValue('');
    };

    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => { 
        setTodos(todos.filter((todo) => todo.id !== id)); // !==　もし〇〇じゃなかった時
    };

    return (
        <div className="todo-wrapper">
            <h2 className="todo-header">Mission Log</h2>
            <div className="input-group">
                <input
                    type="text"
                    className="brutalist-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="INITIATE NEW PROTOCOL..."
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <button
                    onClick={handleAddTodo}
                    className="brutalist-btn add-btn"
                    aria-label="Add"
                >
                    +
                </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => ( //箱からtodoを取り出す
                    <li
                        key={todo.id}
                        className="todo-item"
                    >
                        <span
                            onClick={() => handleToggleTodo(todo.id)}
                            className={`todo-text ${todo.completed ? 'completed-text' : ''}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="brutalist-btn delete-btn"
                        >
                            [X]
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
