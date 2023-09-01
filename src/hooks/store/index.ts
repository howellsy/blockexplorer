/**
 * The ESLint rule `no-restricted-imports` is enabled for `useDispatch` and `useSelector` to ensure
 * that the rest of the codebase uses the typed hooks from this file instead of importing directly
 * from `react-redux`. This file is the exception.
 */
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
