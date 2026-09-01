import { Link } from "react-router-dom";
import { SearchX, Home, Mail } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-[#0F9E9E]/10 flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-9 h-9 text-[#0F9E9E]" />
        </div>

        <p className="text-sm font-semibold tracking-wide text-[#0F9E9E] mb-2">
          404
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B1F5C] mb-3">
          Oooops... Page Not Found!
        </h1>

        <p className="text-gray-500 leading-relaxed mb-8">
          Looks like a typo, or the page you're looking for doesn't exist.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1B1F5C] hover:bg-[#141748] text-white font-medium transition-colors"
          >
            <Home size={16} />
            Return home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 text-[#1B1F5C] font-medium transition-colors"
          >
            <Mail size={16} />
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;