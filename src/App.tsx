import React,{useState} from 'react';
import './App.css';

export const Header = () => {
  
const [count, setCounter] = useState(0);
const state = { count: 0 };
const onIncrement = (): any => {
  console.log(state);
     setCounter(count+1);
};

const decrement = (): any => {
  console.log(state);
  setCounter(count -1);

};
  return(
    <div>
      <span>
        Increment: {count}
      </span>
      <button type="button" onClick={onIncrement}>
        {`Increment`}
      </button>
    </div>
  );
}


