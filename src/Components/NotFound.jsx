import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-sm p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
