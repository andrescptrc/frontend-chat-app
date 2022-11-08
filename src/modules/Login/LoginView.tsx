import LoginForm from './components/LoginForm';

const LoginView = () => {
  return (
    <div className="bg-cultured h-screen flex justify-center items-center">
      <div className="bg-white max-w-md w-full shadow-lg flex flex-col justify-center p-8">
        <h2 className="text-4xl font-medium mb-24">Login in your account</h2>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
