import {atom, useSetRecoilState} from 'recoil';
import {TODO_LIST} from '../constants/TODO';

export type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [...TODO_LIST],
});
