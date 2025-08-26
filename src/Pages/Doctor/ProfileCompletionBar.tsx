// src/components/ProfileCompletionBar.tsx
// import { Progress } from "@material-tailwind/react"; // or custom Tailwind progress
import { calculateCompletion } from "../../utils/profileCompletion";

interface Props {
  profile: Record<string, any>;
}

const requiredFields = [
  "fullName",
  "email",
  "phone",
  "specialization",
  "experience",
  "clinicAddress",
  "profileImage",
];

const ProfileCompletionBar: React.FC<Props> = ({ profile }) => {
  const completion = calculateCompletion(profile, requiredFields);

  return (
    <div className="bg-white shadow-md p-4 rounded-xl mb-6">
      <h2 className="font-semibold text-gray-700 mb-2">Profile Completion</h2>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-emerald-500 h-3 rounded-full transition-all"
          style={{ width: `${completion}%` }}
        ></div>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        {completion}% completed
      </p>
    </div>
  );
};

export default ProfileCompletionBar;
