import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container" style={{padding: '2rem'}}>
      <h1>Oops! Something went wrong.</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status && <p>Error code: {error.status}</p>}
      <Link to='/' style={{marginTop:'2rem', display:'block'}}>Go Home</Link>
    </div>
  );
}
export default ErrorPage;