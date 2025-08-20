import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}