import { Link } from "react-router-dom";
import React from "react";
import type { ReactNode , ReactElement } from "react";  // ✅ type-only import


interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ icon, title, description, link }: FeatureCardProps) {
  return (
    <Link to={link}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
        <div className="mb-4 text-4xl">
          {/* Only clone if it's a valid ReactElement */}
          {React.isValidElement(icon)
            ? React.cloneElement(icon as ReactElement, {
                className: "text-[#53AEC5] text-4xl",
              })
            : icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
