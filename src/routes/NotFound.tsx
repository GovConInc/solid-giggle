import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-5">
      <Helmet>
        <title>Not Found — GovCon Inc.</title>
      </Helmet>
      
      <div className="text-center max-w-md">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gov-crimson/10 text-gov-crimson mb-6">
          <span className="font-display text-4xl font-bold">404</span>
        </div>
        
        <h1 className="font-display text-3xl font-bold text-gov-navy">Page not found</h1>
        
        <p className="mt-4 text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gov-crimson px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gov-crimson/90"
          >
            <Home size={18} />
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-gov-blue hover:text-gov-blue"
          >
            <ArrowLeft size={18} />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
