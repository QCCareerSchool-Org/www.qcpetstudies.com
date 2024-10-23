import { FC, Reducer, useRef } from 'react';
import { DispatchMiddleware, useReducerWithMiddleware } from '../hooks/useReducerWithMiddleware';

type Props = {
  defaultTab?: number;
  data: { tab: ReactElement; content: ReactElement }[];
};

type State = {
  tab: number;
  transitionStarted: boolean;
};

type Action = |
{ type: 'SET_TAB'; payload: number } |
{ type: 'START_TRANSITION' } |
{ type: 'END_TRANSITION' };

const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case 'SET_TAB':
      if (action.payload === prevState.tab) {
        return prevState;
      }
      return { ...prevState, tab: action.payload, transitionStarted: false };
    case 'START_TRANSITION':
      return { ...prevState, transitionStarted: true };
    default:
      return prevState;
  }
};

export const TabGroup: FC<Props> = ({ defaultTab = 0, data }) => {
  const id = useRef<NodeJS.Timeout | null>(null);

  const dispatchMiddleware: DispatchMiddleware<Action> = dispatch => action => {
    switch (action.type) {
      case 'SET_TAB':
        if (id.current !== null) {
          clearTimeout(id.current);
        }
        dispatch(action);
        id.current = setTimeout(() => {
          dispatch({ type: 'START_TRANSITION' });
        }, 0);
        break;
    }
  };

  const [ state, dispatch ] = useReducerWithMiddleware(reducer, { tab: defaultTab, transitionStarted: true }, dispatchMiddleware);

  return (
    <div>
      <div className="d-flex justify-content-center previewTabHeader">
        {data.map((d, i) => (
          <div key={i} onClick={() => dispatch({ type: 'SET_TAB', payload: i })} className={`previewTab ${state.tab === i ? 'selected' : 'unselected'}`}>
            {d.tab}
          </div>
        ))}
      </div>
      <div className="previewSectionGroup">
        {data.map((d, i) => (
          <div key={i} className={`previewSection ${state.tab === i ? 'selected' : ''} ${state.transitionStarted ? 'visible' : ''}`}>
            {d.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .previewTabHeader {
          border-bottom: 1px solid #ccc;
        }
        .previewSectionGroup {
          position: relative;
          padding-top: 0.5rem;
        }
        .previewSection {
          display: none;
          margin-top: 1rem;
          opacity: 0;
          transition: opacity 500ms;
        }
        .previewSection.selected {
          display: block;
        }
        .previewSection.visible {
          opacity: 1;
        }
        .previewTab {
          margin: 0 0.25rem;
          padding: 0 1rem 0.75rem;
          position: relative;
          top: 2px;
        }
        .previewTab.selected {
          border-bottom: 4px solid red;
        }
      `}</style>
    </div>
  );
};
