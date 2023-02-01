import { FC, MouseEventHandler, ReactNode, useEffect, useId, useReducer, useRef } from 'react';

import useReducerWithThunk from 'use-reducer-thunk';

type Props = {
  startOpen?: boolean;
  heading: ReactNode;
  children: ReactNode;
};

type State = {
  accordion: 'closed' | 'opening' | 'open' | 'closing';
  contentHeight: number;
};

type Action =
  | { type: 'SET_HEIGHT'; payload: number }
  | { type: 'OPEN_STARTED' }
  | { type: 'OPEN_FINISHED' }
  | { type: 'CLOSE_STARTED' }
  | { type: 'CLOSE_FINISHED' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_HEIGHT':
      return { ...state, contentHeight: action.payload };
    case 'OPEN_STARTED':
      if (state.accordion === 'closed') {
        console.log('opening');
        return { ...state, accordion: 'opening' };
      }
      return state;
    case 'OPEN_FINISHED':
      if (state.accordion === 'opening') {
        console.log('open');
        return { ...state, accordion: 'open' };
      }
      return state;
    case 'CLOSE_STARTED':
      if (state.accordion === 'open') {
        console.log('closing');
        return { ...state, accordion: 'closing' };
      }
      return state;
    case 'CLOSE_FINISHED':
      if (state.accordion === 'closing') {
        console.log('closed');
        return { ...state, accordion: 'closed' };
      }
      return state;
  }
};

export const AccordionItem: FC<Props> = ({ startOpen, heading, children }) => {
  const id = useId();
  const contentRef = useRef<HTMLDivElement>(null);
  const [ state, dispatch ] = useReducerWithThunk(reducer, { accordion: startOpen ? 'open' : 'closed', contentHeight: 0 });

  useEffect(() => {
    const handler = (): void => {
      dispatch({ type: 'SET_HEIGHT', payload: contentRef.current?.scrollHeight ?? 0 });
    };
    window.addEventListener('resize', handler);
    handler();
    return () => window.removeEventListener('resize', handler);
  }, []); // don't include dispatch in here because useReducerWithThunk's dispatch isn't a stable reference

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch((d, getState) => {
      const s = getState();
      if (s.accordion === 'closed') {
        d({ type: 'OPEN_STARTED' });
        setTimeout(() => {
          d({ type: 'OPEN_FINISHED' });
        }, 350);
      } else if (s.accordion === 'open') {
        d({ type: 'CLOSE_STARTED' });
        setTimeout(() => {
          d({ type: 'CLOSE_FINISHED' });
        }, 350);
      }
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`${id}accordionHeader`}>
        <button onClick={handleClick} className={`accordion-button ${state.accordion === 'closed' || state.accordion === 'closing' ? 'collapsed' : ''}`} type="button" aria-expanded={state.accordion === 'open' ? 'true' : 'false'} aria-controls={`${id}accordionCollapse`}>
          {heading}
        </button>
      </h2>
      <div ref={contentRef} id={`${id}accordionCollapse`} className={`accordion-collapse ${state.accordion === 'opening' || state.accordion === 'closing' ? 'collapsing' : 'collapse'} ${state.accordion === 'open' ? 'show' : ''}`} aria-labelledby={`${id}accordionHeader`} style={state.accordion === 'opening' ? { height: state.contentHeight } : undefined}>
        <div className="accordion-body">
          {children}
        </div>
      </div>
      <style jsx>{`
        .collapse:not(.show) {
          /** have to do it this way instead of the bootrap way in order to get the height **/
          display: block;
          height: 0;
          overflow: hidden;
        }
        .accordion-body { background: white; }
        button.focus, button:focus {
          outline: none;
          border: none;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};
