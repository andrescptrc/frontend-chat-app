import classNames from 'classnames';
import { ComponentPropsWithRef, ReactNode } from 'react';

const Button = ({ className, children }: InputFieldProps) => {
  return (
    <button
      className={classNames(className, 'py-2 px-4 text-white bg-eerie-black')}
    >
      {children}
    </button>
  );
};

interface InputFieldProps extends ComponentPropsWithRef<'button'> {
  className?: string;
  children: ReactNode;
}

export default Button;
