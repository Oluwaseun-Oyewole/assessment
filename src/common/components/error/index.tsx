import { useRouteError } from "react-router-dom";

// Make a proper error page
export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <p>Error Message : {error.statusText || error.message}</p>
      </p>
      <p>Note: A proper error message will appear soon</p>
    </div>
  );
}
