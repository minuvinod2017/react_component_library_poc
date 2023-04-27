import React, { useState} from 'react';

export interface IFeelingFormProps {
name: string;
counter: number;
onClick?: (value: number) => void;
}

const FeelingForm: React.FC<IFeelingFormProps> = (props : IFeelingFormProps) => {
const {counter: propsCounter, onClick, name} = props;

const [stateCounter, setStateCounter] = useState(propsCounter);

const increment = () => {
   setStateCounter(stateCounter + 1);
   if (onClick) {
     onClick(stateCounter + 1);
   }
};

const decrement = () => {
   setStateCounter(stateCounter - 1);
   if (onClick) {
     onClick(stateCounter - 1);
   }
};

return (
   <div>
     <div>
       <button type="button" onClick={increment}>+</button>
       <button type="button" onClick={decrement}>-</button>
       <div>({name}) State counter: {stateCounter}</div>
     </div>
   </div>
);
};

export default FeelingForm;