import { Fragment, useMemo } from "react";
import { Transition } from "@headlessui/react";
import { useStore } from "@/store/StoreContext";

export default function SavedListings() {
  const {
    state: { listings, saved },
  } = useStore();

  const savedListings = useMemo(
    () => listings.filter((listing) => saved.includes(listing.id)),
    [listings, saved],
  );

  return (
    <Transition
      show={savedListings.length > 0}
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform translate-x-full opacity-0"
      enterTo="transform translate-x-0 opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform translate-x-0 opacity-100"
      leaveTo="transform translate-x-full opacity-0"
    >
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Saved Listings</h2>
            <p className="text-sm text-slate-500">Open favorites slide panel</p>
          </div>
          <span className="rounded-full bg-[#FF5A5F]/10 px-3 py-1 text-sm font-semibold text-[#FF5A5F]">
            {savedListings.length}
          </span>
        </div>

        <div className="space-y-4">
          {savedListings.map((listing) => (
            <div
              key={listing.id}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-4"
            >
              <p className="text-sm font-semibold text-slate-900">
                {listing.title}
              </p>
              <p className="text-xs text-slate-500">{listing.location}</p>
              <p className="mt-2 text-sm font-bold text-slate-900">
                ${listing.price}/night
              </p>
            </div>
          ))}
        </div>
      </aside>
    </Transition>
  );
}
