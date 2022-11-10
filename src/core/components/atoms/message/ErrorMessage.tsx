const ErrorMessage = ({ error }: TErrorMessage) => {
  return (
    <div className="px-3 py-1 border-[1px] border-red-300 bg-red-100 rounded mb-4">
      <p className="text-red-800 !mb-0 font-normal text-sm text-center">
        {error}
      </p>
    </div>
  );
};

type TErrorMessage = {
  error: string;
};

export default ErrorMessage;
