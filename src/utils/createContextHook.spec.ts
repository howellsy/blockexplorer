import { createContext } from 'react';
import { createContextHook } from './createContextHook';

describe('createContextHook', () => {
  it('should throw an error if context is not provided', () => {
    const Context = createContext<string | null>(null);
    const useContext = createContextHook(Context, 'Context');

    expect(() => useContext()).toThrowError('Context is not provided');
  });

  it('should return context if it is provided', () => {
    const Context = createContext<string | null>('test');
    const useContext = createContextHook(Context, 'Context');

    expect(useContext()).toBe('test');
  });
});
