import React from 'react';
import {render, screen, renderHook} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {RecoilRoot} from 'recoil';
import App from './App';

describe('App should be', () => {
  it('Render default todo list', async () => {
    render(<App />, {wrapper: RecoilRoot});
    const todoCounts = await screen.findAllByRole('listitem');

    expect(todoCounts).toHaveLength(3);
  });

  it('Add a todo Item', async () => {
    render(<App />, {wrapper: RecoilRoot});

    const $todoInput = screen.getByLabelText('input todo') as HTMLInputElement;
    const $todoSubmit = screen.getByText('Submit');

    userEvent.type($todoInput, 'todo4');
    userEvent.click($todoSubmit);

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });
});
