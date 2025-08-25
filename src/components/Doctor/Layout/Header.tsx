// src/components/Header.tsx
import Me from "../../../assets/Me.png"; // adjust if needed

const Header = ({ title }: { title: string }) => (
  <div className="bg-white border-b border-1-4 border-emerald-500 p-[1px] rounded-b-2xl shadow">
    <div className="flex justify-between items-center bg-white rounded-b-2xl px-6 py-4">
      <h2 className="text-xl font-bold text-gray-700">{title}</h2>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium">Dr.Malaika Saba</span>
        <img
          src={Me}
          alt="Profile"
          className="w-11 h-11 rounded-full border-2 border-emerald-400 shadow-sm"
        />
      </div>
    </div>
  </div>
);

export default Header;
