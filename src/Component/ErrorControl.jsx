import { useRouteError } from "react-router-dom";
import "animate.css";

const ErrorControl = () => {
  const error = useRouteError();

  return (
    <div className="h-screen">
      {error.status === 404 && (
        <div className="flex justify-center items-center flex-col h-screen">
          <h1 className="animate__animated animate__bounce text-6xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
            404
          </h1>
          <h2 className="text-[56px]">Page NoT Found</h2>
        </div>
      )}
    </div>
  );
};

export default ErrorControl;
