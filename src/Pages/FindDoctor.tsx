import { useState } from "react";
import { Search, Filter, Star, MapPin, Clock, Calendar } from "lucide-react";

const doctorsData = [
  {
    id: "1",
    name: "kamal Wilson",
    specialty: "Cardiologist",
    rating: 1.9,
    reviewCount: 156,
    location: "Downtown Medical Center",
    availableTime: "Available Today",
    image: "C:\Users\SM SHOP\Desktop\doctor-assist\src\assets\react.svg",
    price: "$150",
  },
  {
    id: "2",
    name: "Mohsin",
    specialty: "urologist",
    rating: 4,
    reviewCount: 156,
    location: "Downtown Medical Center",
    availableTime: "Available Today",
    image: "C:\Users\SM SHOP\Desktop\doctor-assist\src\assets\react.svg",
    price: "$150",
  },
  {
    id: "3",
    name: " sibtain",
    specialty: "nephrologist",
    rating: 9,
    reviewCount: 156,
    location: "Downtown Medical Center",
    availableTime: "Available Today",
    image: "C:\Users\SM SHOP\Desktop\doctor-assist\src\assets\react.svg",
    price: "$150",
  },
];

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = [...new Set(doctorsData.map(doctor => doctor.specialty))];

  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookAppointment = (doctorId: string) => {
    console.log("Booking appointment with doctor:", doctorId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Doctor
          </h1>
          <p className="text-gray-600">
            Browse our network of qualified healthcare professionals
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:flex">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                      className="h-32 w-32 rounded-full object-cover"
                      src={doctor.image}
                      alt={`${doctor.name}'s profile`}
                    />
                  </div>
                  
                  {/* Doctor Info */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {doctor.name}
                        </h3>
                        <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 text-gray-900">{doctor.rating}</span>
                        <span className="ml-1 text-gray-500">({doctor.reviewCount})</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{doctor.location}</span>
                    </div>
                    
                    <div className="mt-2 flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{doctor.availableTime}</span>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">
                        {doctor.price} <span className="text-sm font-normal text-gray-500">/ consultation</span>
                      </span>
                      <button
                        onClick={() => handleBookAppointment(doctor.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600 text-lg">
                No doctors found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("");
                }}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}