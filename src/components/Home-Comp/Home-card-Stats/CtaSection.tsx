
import type { CtaSectionProps } from "../../../Types/Types";
export default function CtaSection({ title, description }: CtaSectionProps) {
  return (
    <div className="bg-blue-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
    </div>
  );
}