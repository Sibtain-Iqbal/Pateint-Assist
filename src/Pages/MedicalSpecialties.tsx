import { Link } from "react-router-dom";
import { Heart, Brain, Eye, Bone, Baby, Stethoscope } from "lucide-react";

const specialties = [
    {
        name: "Cardiology",
        description: "Heart and cardiovascular system specialists",
        icon: Heart,
        doctorCount: 24,
        color: "text-red-500",
        link: "/medical-specialties"
    },
    {
        name: "Neurology",
        description: "Brain and nervous system specialists",
        icon: Brain,
        doctorCount: 18,
        color: "text-purple-500",
        link: "/medical-specialties"
    },
    {
        name: "Ophthalmology",
        description: "Eye and vision care specialists",
        icon: Eye,
        doctorCount: 15,
        color: "text-blue-500",
        link: "/medical-specialties"
    },
    {
        name: "Orthopedics",
        description: "Bone, joint, and muscle specialists",
        icon: Bone,
        doctorCount: 22,
        color: "text-orange-500",
        link: "/medical-specialties"
    },
    {
        name: "Pediatrics",
        description: "Children's health specialists",
        icon: Baby,
        doctorCount: 19,
        color: "text-pink-500",
        link: "/medical-specialties"
    },
    {
        name: "General Practice",
        description: "Primary care and family medicine",
        icon: Stethoscope,
        doctorCount: 31,
        color: "text-green-500",
        link: "/specialties"
    },
];

export default function MedicalSpecialties() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    Medical Specialties
                </h1>
                <p className="text-lg text-gray-600">
                    Find doctors by their area of expertise
                </p>
            </div>

            {/* Specialties Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {specialties.map((specialty) => {
                    const Icon = specialty.icon;
                    return (
                        <Link
                            to={specialty.link}
                            key={specialty.name}
                            className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Icon className={`h-10 w-10 ${specialty.color}`} />
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                    {specialty.doctorCount} doctors
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {specialty.name}
                            </h3>
                            <p className="text-gray-600 mb-4">{specialty.description}</p>
                            <div className="text-blue-600 font-medium flex items-center">


                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}