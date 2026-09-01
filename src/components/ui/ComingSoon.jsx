// src/components/shared/ComingSoon.jsx
import { Wrench } from "lucide-react";

const ComingSoon = ({ section = "This section" }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-[#0F9E9E]/10 flex items-center justify-center mx-auto mb-6">
          <Wrench className="w-7 h-7 text-[#0F9E9E]" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1F5C] mb-3">
          Coming Soon
        </h2>

        <p className="text-gray-500 leading-relaxed">
          {section} is currently under construction. Check back shortly.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;