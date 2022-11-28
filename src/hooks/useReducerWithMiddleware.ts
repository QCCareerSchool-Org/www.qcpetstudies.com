import { Dispatch, DispatchWithoutAction, Reducer, ReducerWithoutAction, useCallback, useReducer } from 'react';

export type DispatchMiddleware<A> = (dispatch: Dispatch<A>) => (action: A) => void;
export type DispatchWithoutActionMiddleware = (dispatch: DispatchWithoutAction) => () => void;

export function useReducerWithMiddleware<S, A, I>(reducer: Reducer<S, A>, initialArg: I, middleWare: DispatchMiddleware<A>, initializer: (arg: I) => S): readonly [S, Dispatch<A>];

export function useReducerWithMiddleware<S, A>(reducer: Reducer<S, A>, initialState: S, middleWare: DispatchMiddleware<A>): readonly [S, Dispatch<A>];

export function useReducerWithMiddleware<S, I>(reducer: ReducerWithoutAction<S>, initialArg: I, middleWare: DispatchWithoutActionMiddleware, initializer: (arg: I) => S): readonly [S, DispatchWithoutAction];

export function useReducerWithMiddleware<S>(reducer: ReducerWithoutAction<S>, initialState: S, middleWare: DispatchWithoutActionMiddleware): readonly [S, DispatchWithoutAction];

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function useReducerWithMiddleware(reducer: any, initialState: any, middleware: any, initializer?: any): any {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [ state, dispatch ] = useReducer(reducer, initialState, initializer);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, react-hooks/exhaustive-deps
  const modifiedDispatch = useCallback(middleware(dispatch), [ middleware, dispatch ]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return [ state, modifiedDispatch ] as const;
}
