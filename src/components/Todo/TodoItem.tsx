import React, {ChangeEvent} from 'react';
import {useRecoilState} from 'recoil';
import {Todo, todoListState} from '../../atoms/todo';

const replaceItemAtIndex = (arr: Todo[], idx: number, newValue: Todo) => {
  return [...arr.slice(0, idx), newValue, ...arr.slice(idx + 1)];
};

function removeItemAtIndex(arr: Todo[], idx: number) {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
}

export default function TodoItem({item}: {item: Todo}) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const {id, text, isComplete} = item;
  const todoItemIndex = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: ChangeEvent<HTMLInputElement>) => {
    const todoItemValue = e.target.value;

    const newTodoList = replaceItemAtIndex(todoList, todoItemIndex, {
      ...item,
      text: todoItemValue,
    });

    setTodoList(newTodoList);
  };

  const toggleTodoIsComplete = () => {
    const newTodoList = replaceItemAtIndex(todoList, todoItemIndex, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newTodoList);
  };

  const deleteTodoItem = () => {
    const newTodoList = removeItemAtIndex(todoList, todoItemIndex);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleTodoIsComplete}
      />
      <button onClick={deleteTodoItem}>X</button>
    </div>
  );
}
