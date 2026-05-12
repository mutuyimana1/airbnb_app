import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24">
      <div className="max-w-xl text-center rounded-3xl bg-white p-12 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF5A5F]">
          404 error
        </p>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-4 text-sm text-slate-500 leading-7">
          The page you are looking for does not exist or has been moved. Head
          back to the homepage and continue exploring.
        </p>
        <Link
          to="/"
          className="inline-flex mt-8 rounded-2xl bg-[#FF5A5F] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF5A5F]/20 transition hover:bg-[#e04f54]"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
