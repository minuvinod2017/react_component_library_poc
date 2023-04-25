import React, { useCallback, useEffect, useRef, useState} from 'react';

export interface IFeelingFormProps {
  name: string;
  counter: number;
  onClick?: () => void;
}

const FeelingForm: React.FC<IFeelingFormProps> = (props : IFeelingFormProps) => {
//   const [currentFeeling, setCurrentFeeling] = useState('Happy');
//   const timerHandle = useRef<number | null>(null);
//   const [stateCounter, setStateCounter] = useState(42);
//   const onFeelingChange = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setCurrentFeeling(event.currentTarget.value);
//     },
//     []
//   );

//     useEffect(() => {
//     timerHandle.current = +setInterval(() => {
//       setStateCounter(stateCounter + 1);
//     }, 2500);

//     return () => {
//       if (timerHandle.current) {
//         clearInterval(timerHandle.current);
//         timerHandle.current = null;
//       }
//     };
//   });

  const {counter: propsCounter, onClick} = props;

  const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
  
    const increment = () => setCount((count) => count + 1);
    const decrement = () => setCount((count) => count - 1);
  
    return { count, increment, decrement };
  }
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
//   const onSubmitEvent = useCallback(() => {
//     onSubmit(`${name} is feeling: ${currentFeeling}`);
//   }, [name, currentFeeling]);

  return (
    //<form onSubmit={onSubmitEvent}>
    <div >

        <label htmlFor="feeling-input">How are you feeling?</label>
        <a href="https://pluralsight.com">Visit Pluralsight</a>
       {/* <input
        id="feeling-input"
        onChange={onFeelingChange}
        value={currentFeeling}
      />  */}
      <div>
        <button type="button" onClick={handleClick}>click to increase</button>
        <div>State counter: {stateCounter}</div>
      </div>
    </div>
  );
};

export default FeelingForm;