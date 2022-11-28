import { useRouter } from 'next/router';
import { ChangeEventHandler, FC, MouseEventHandler, useEffect, useId, useReducer, useState } from 'react';
import { gaEvent } from '../lib/ga';

type State = {
  step: number;
  maxSteps: number;
  text: string;
  paused: boolean;
};

type Action =
  | { type: 'NEXT' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'NEXT': {
      if (state.paused) {
        return state;
      }
      const step = state.step >= state.maxSteps - 1 ? 0 : state.step + 1;
      return { ...state, step, text: '. '.repeat(step + 1) };
    }
    case 'PAUSE':
      return { ...state, paused: true };
    case 'RESUME':
      return { ...state, paused: false };
  }
};

const initialState: State = {
  step: 0,
  maxSteps: 5,
  text: '.',
  paused: false,
};

type Option = { id: string; url: string; text: string };

type Props = {
  label: string;
  options: Option[];
  multiLine?: boolean;
  sm?: boolean;
  /** the name of the select input, for accessability */
  name: string;
};

export const SearchBox: FC<Props> = ({ label, options, multiLine = false, sm = false, name }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [ url, setUrl ] = useState<string | null>(null);
  const id = useId();
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'NEXT' });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLSelectElement> = e => {
    dispatch({ type: 'PAUSE' });
  };

  const handleMouseLeave: MouseEventHandler<HTMLSelectElement> = e => {
    dispatch({ type: 'RESUME' });
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e => {
    console.log(e.target.value);
    if (e.target.value) {
      gaEvent('search_box_changed', { url });
      setUrl(e.target.value);
    } else {
      setUrl(null);
    }
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (url) {
      gaEvent('search_box_completed', { url });
      void router.push(url);
    }
  };

  return (
    <>
      <div className={`searchBox d-flex ${multiLine ? 'flex-column' : 'align-items-center'}`}>
        <label className="text flex-shrink-0" htmlFor={id}>{label}</label>
        <div className="search flex-grow-1">
          <select onChange={handleChange} value={url ?? ''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={id} name={name} className={`form-select ${sm ? 'form-select-sm' : ''}`} style={{ fontWeight: 600 }}>
            <option value="">{state.text}</option>
            {options.map(o => <option key={o.id} value={o.url}>{o.text}</option>)}
          </select>
        </div>
        <div className="flex-shrink-0">
          <button onClick={handleClick} className="btn btn-sm btn-dark" disabled={url === null}>Learn More</button>
        </div>
      </div>
      <style jsx>{`
        .searchBox {
          ${multiLine ? 'background: rgba(255, 255, 255, 0.75); padding: 0.5rem 1rem 1rem;' : 'background: rgba(255, 255, 255, 0.75); padding: 0.625rem 1.25rem 0.625rem 1.5rem; height: 4rem;'}
        }
        .text {
          ${multiLine ? `margin-bottom: 0.5rem;` : `padding-right: 1rem; border-right: 1px solid black; margin-right: 0.5rem;`}
        }
        .search {
          ${multiLine ? 'margin-bottom: 1rem;' : ''}
        }
        .form-select {
          ${multiLine ? '' : 'border: 0; background-color: inherit;'}
        }
        .form-select:focus {
          box-shadow: none;
          // box-shadow: 0 0 0 0.25rem rgba(#57c3d7, 0.25);
        }
      `}</style>
    </>
  );
};
