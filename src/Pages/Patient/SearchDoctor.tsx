import React, { useState } from "react";
import CustomButton from "@/components/Comman/CustomButton";
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    speciality: "Cardiologist",
    location: "Karachi, Pakistan",
    availability: "Mon - Fri, 9:00 AM - 5:00 PM",
    fee: "Rs. 2000",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Ali Khan",
    speciality: "Dermatologist",
    location: "Lahore, Pakistan",
    availability: "Tue - Sat, 10:00 AM - 6:00 PM",
    fee: "Rs. 1500",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Fatima Noor",
    speciality: "Neurologist",
    location: "Islamabad, Pakistan",
    availability: "Mon - Thu, 11:00 AM - 4:00 PM",
    fee: "Rs. 2500",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Dr. Ahmed Raza",
    speciality: "Pediatrician",
    location: "Rawalpindi, Pakistan",
    availability: "Mon - Sat, 9:00 AM - 2:00 PM",
    fee: "Rs. 1800",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 5,
    name: "Dr. Hina Malik",
    speciality: "Cardiologist",
    location: "Faisalabad, Pakistan",
    availability: "Wed - Sun, 2:00 PM - 8:00 PM",
    fee: "Rs. 2200",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 6,
    name: "Dr. Malaika Saba",
    speciality: "Cardiologist",
    location: "Karachi, Pakistan",
    availability: "Mon - Fri, 9:00 AM - 5:00 PM",
    fee: "Rs. 4000",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

function SearchDoctor() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Extract unique specialities
  const specialities = ["All", ...new Set(doctors.map((d) => d.speciality))];

  // Filter doctors
  const filteredDoctors = doctors.filter((doctor) => {
    const bySpeciality =
      filter === "All" ? true : doctor.speciality === filter;
    const byName = doctor.name.toLowerCase().includes(search.toLowerCase());
    return bySpeciality && byName;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold mb-8 text-black tracking-wide">
       Search Doctors
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mb-8">
        {/* Speciality Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 border rounded-xl w-full md:w-1/3 shadow-sm focus:ring-2 focus:ring-black"
        >
          {specialities.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* Search by Name */}
        <input
          type="text"
          placeholder="Search by doctor name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-xl flex-1 shadow-sm focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Doctor List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-black shadow-md"
                />
              </div>

              {/* Doctor Info */}
              <h2 className="text-xl font-bold text-black text-center">
                {doctor.name}
              </h2>
              <p className="text-blue-400 text-center font-medium">
                {doctor.speciality}
              </p>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Location:</span>{" "}
                  {doctor.location}
                </p>
                <p>
                  <span className="font-medium">Availability:</span>{" "}
                  {doctor.availability}
                </p>
                <p>
                  <span className="font-medium">Consultation Fee:</span>{" "}
                  {doctor.fee}
                </p>
              </div>

              {/* Button */}
              <CustomButton 
              className="w-[200px] mt-6 bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                Book Appointment
              </CustomButton>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No doctors found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchDoctor;
