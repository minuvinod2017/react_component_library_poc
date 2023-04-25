/// <reference types="react" />
import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface IFeelingFormProps {
    name: string;
    onSubmit: (feelingUpdate: string) => void;
    counter: number;
    onClick?: () => void;
}
declare const FeelingForm: React.FC<IFeelingFormProps>;

export { Button, FeelingForm, IFeelingFormProps };
