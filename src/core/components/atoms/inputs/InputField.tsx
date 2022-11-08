import { ComponentPropsWithRef, forwardRef } from 'react';

import classnames from 'classnames';

// eslint-disable-next-line react/display-name
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { id, label, error, className, ...rest } = props;

    return (
      <div className="flex w-full flex-col">
        {label && (
          <label htmlFor={id} className="text-sm text-slate-600">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          {...rest}
          className={classnames(
            className,
            error ? 'border-red-500' : 'border-slate-200',
            'w-full rounded-lg border-2 py-2 px-4 outline-none transition-colors duration-200 ease-in-out focus:ring-2'
          )}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

interface InputFieldProps extends ComponentPropsWithRef<'input'> {
  id: string;
  label?: string;
  error?: string;
}

export default InputField;
