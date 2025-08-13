import { Link } from "react-router-dom";
import FeatureCard from "./Home-card-Stats/FeatureCard";
import CtaSection from "./Home-card-Stats/CtaSection";
import type { HomeProps } from "./Types";


import {
    FaUserMd,
    FaVideo,
    FaCalendarAlt,
    FaSearch,
    FaStar,
    FaHeadset,
    FaMapMarkerAlt,
    FaClock,
    FaPlus
} from "react-icons/fa";
import StatsCardS from "./Home-card-Stats/StatsCard";
import TestimonialCard from "./Home-card-Stats/testtimonials";
import AuthModal from "./Auth/AuthModel";





export default function Home({ setShowModal, showModal }: HomeProps) {
    // Data for stats section
    const stats = [
        { value: "500+", label: "Doctors", icon: <FaUserMd className="inline mr-2" /> },
        { value: "10K+", label: "Patients", icon: <FaUserMd className="inline mr-2" /> },
        { value: "4.9", label: "Rating", icon: <FaStar className="inline mr-2" /> },
        { value: "24/7", label: "Support", icon: <FaHeadset className="inline mr-2" /> }
    ];

    const features = [
        {
            icon: <FaSearch size={24} className="text-yellow-500" />,
            title: "Find Doctors",
            description: "Search by specialty, location, and availability",
            link: "/find-your-doctor"
        },
        {
            icon: <FaVideo size={24} className="text-blue-500" />,
            title: "Telemedicine",
            description: "Video consultations from anywhere",
            link: "/telemedicine"
        },
        {
            icon: <FaCalendarAlt size={24} className="text-blue-500" />,
            title: "Book Instantly",
            description: "Schedule appointments in real-time",
            link: "/appointments"
        },
        {
            icon: <FaUserMd size={24} className="text-blue-500" />,
            title: "Trusted Doctors",
            description: "Verified healthcare professionals",
            link: "/doctors"
        }
    ];

    const quickActions = [
        {
            text: "Find a Doctor Near You",
            link: "/find-doctors",
            icon: <FaMapMarkerAlt className="mr-2" />
        },
        {
            text: "Book Emergency Appointment",
            link: "/emergency",
            icon: <FaPlus className="mr-2" />
        },
        {
            text: "Start Video Consultation",
            link: "/telemedicine",
            icon: <FaVideo className="mr-2" />
        }
    ];

  
    const testimonials = [
        {
            quote: "This platform saved me hours of waiting at clinics. The doctor was professional and helpful.",
            author: "Sarah Johnson",
            role: "Patient"
        },
        {
            quote: "As a doctor, I appreciate how easy it is to manage my appointments and connect with patients.",
            author: "Dr. Michael Chen",
            role: "Cardiologist"
        }
    ];

    return (
        <div className="space-y-16 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
       
            <section className="text-center max-w-4xl mx-auto">
                <p className="text-[#53aec5] mb-2 flex items-center justify-center">
                    <FaClock className="mr-2 text-[#53aec5]" /> Available 24/7
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Your Health,<span className="text-[#53aec5]"> Our Priority</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                    Connect with trusted healthcare professionals. Book appointments instantly,
                    get virtual consultations, and manage your health journey with ease.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">



                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#53aec5] text-white px-4 py-2 rounded hover:bg-blue-600 shadow-2xl "
                    >
                        Getting Started
                    </button>

                    <button className=" px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md text-black shadow-lg hover:bg-blue-300 hover:text-red-500"
                    >Learn More</button>
                </div>
            </section>
            <AuthModal
               isOpen={showModal}
        onClose={() => setShowModal(false)}


            />
            <section className="bg-blue-100 py-12 rounded-3xl">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

                        {stats.map((stat, index) => (
                            <StatsCardS
                                key={index}
                                value={stat.value}
                                label={stat.label}
                                icon={stat.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            link={feature.link}
                        />
                    ))}
                </div>
            </section>

            {/* Quick Actions */}
            <section className="max-w-4xl mx-auto px-4">
                <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Quick Access</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {quickActions.map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-200 hover:border-blue-300"
                        >
                            {action.icon}
                            <span>{action.text}</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 rounded-xl">
                <h3 className="text-2xl font-bold text-center mb-8">What Our Users Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                        />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-6xl mx-auto px-4">
                <CtaSection
                    title="Ready to take control of your health?"
                    description="Join thousands of patients who trust our platform for their healthcare needs."
                    buttonText="Sign Up Now"
                    buttonLink="/signup"
                />
            </section>
        </div>
    );
}