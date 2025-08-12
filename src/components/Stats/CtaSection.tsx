import { Link } from "react-router-dom";
import type { CtaSectionProps } from "../Types";
export default function CtaSection({ title, description, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <div className="bg-blue-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
      <Link 
        to={buttonLink}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
      >
        {buttonText}
      </Link>
    </div>
  );
}