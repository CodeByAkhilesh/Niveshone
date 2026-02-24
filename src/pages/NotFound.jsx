import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="my-4 text-xl text-gray-600">
        Oops! Page not found.
      </p>
      <Button btnName={"Go Back Home"} to={"/"} />
    </div>
  );
};

export default NotFound;
