
import { Link } from "react-router-dom";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Link to={link}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}