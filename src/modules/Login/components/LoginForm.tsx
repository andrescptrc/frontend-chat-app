'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { loginSchema } from '../schemas/login-schema';
import { Button, ErrorMessage, InputField } from '@atoms';

import { TLoginForm } from '@interfaces/auth';
import { authService } from '@services';

const LoginForm = () => {
  const {
    mutate: loginMutate,
    isLoading,
    error
  } = useMutation(async (data: TLoginForm) => await authService.login(data), {
    onSuccess: data => {
      console.log(data);
    }
  });

  const errorM = error as TError;

  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors }
  } = useForm<TLoginForm>({
    resolver: joiResolver(loginSchema)
  });

  const handleSubmit = (data: TLoginForm) => {
    loginMutate(data);
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

      {errorM && <ErrorMessage error={errorM.message as string} />}

      <div className="flex">
        <Button className="rounded w-full">
          {isLoading ? 'Loading...' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
