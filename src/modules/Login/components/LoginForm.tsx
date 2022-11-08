'use client';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { Button, InputField } from '@atoms';
import { loginSchema } from '../schemas/login-schema';

const LoginForm = () => {
  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors }
  } = useForm<TLoginForm>({
    resolver: joiResolver(loginSchema)
  });

  const handleSubmit = (data: TLoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div className="space-y-6 mb-8">
        <InputField
          id="email"
          type="text"
          label="Email: "
          className="py-2 px-4 border border-gray-200 rounded"
          {...register('email')}
          error={errors.email && errors.email.message}
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          className="py-2 px-4 border border-gray-200 rounded"
          {...register('password')}
          error={errors.password && errors.password.message}
        />
      </div>

      <div className="flex">
        <Button className="rounded w-full">Login</Button>
      </div>
    </form>
  );
};

type TLoginForm = {
  email: string;
  password: string;
};

export default LoginForm;
