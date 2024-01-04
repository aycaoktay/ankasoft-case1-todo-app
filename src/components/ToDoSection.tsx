import React, { useState } from 'react';

const ToDoSection = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex flex-col items-center mt-3'>
        <div className='relative flex'>
          <input
            type='text'
            value={todoText}
            onChange={handleInputChange}
            className='font-roboto text-lg border-2 w-[387px] border-gray-300 rounded-md p-2 mr-2'
            placeholder='Add ToDo...'
          />
          <button
            onClick={handleAddTodo}
            className='bg-white border-2 text-gray text-lg w-15 px-5 h-15 rounded-md'
          >
            +
          </button>
        </div>
        <div className='w-[442px] mt-[12px]'>
          {todos.map((todo, index) => (
            <div
              key={index}
              className='rounded-md border-2 p-2 bg-white shadow-lg text-lg text-black mt-5 mb-5'
            >
              {`Todo-${index + 1}: ${todo}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoSection;
