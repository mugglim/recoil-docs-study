import {atom} from 'recoil';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});
