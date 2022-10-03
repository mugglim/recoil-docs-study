import React from 'react';
import {useRecoilValue} from 'recoil';
import {todoListState} from '../../atoms/todo';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
}
