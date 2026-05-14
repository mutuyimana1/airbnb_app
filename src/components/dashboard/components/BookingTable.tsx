import { MapPin, Users, CheckCircle, Clock, XCircle } from "lucide-react";
import type { Booking } from "@/types";
import { useBookingActions } from "@/features/bookings/hooks/useBookingActions";
import { DialogConfirm } from "@/components/modals/DialogConfirm";

interface BookingsTableProps {
  bookings: Booking[];
}

const statusConfig = {
  CONFIRMED: {
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    label: "Confirmed",
  },
  PENDING: {
    icon: Clock,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    label: "Pending",
  },
  CANCELLED: {
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    label: "Cancelled",
  },
  COMPLETED: {
    icon: CheckCircle,
    color: "text-blue-600",
    bg: "bg-blue-50",
    label: "Completed",
  },
};

 const BookingsTable = ({ bookings }: BookingsTableProps) => {
  const { confirmBooking, cancelBooking, isConfirming, isCancelling } = useBookingActions();

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (bookings.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
        <p className="text-gray-500">No bookings found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Property
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Check-in
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Check-out
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Guests
            </th>
            <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {bookings.map((booking, idx) => {
            const status = (booking.status || "PENDING").toUpperCase();
            const config =
              statusConfig[status as keyof typeof statusConfig] ||
              statusConfig.PENDING;
            const StatusIcon = config.icon;

            return (
              <tr
                key={booking.id || idx}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-semibold text-gray-900">
                      {booking.listing?.title || "Property"}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} />
                      {booking.listing?.location || "Location"}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color}`}
                  >
                    <StatusIcon size={12} />
                    {config.label}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {formatDate(booking.checkIn)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {formatDate(booking.checkOut)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                  <Users size={14} className="text-gray-400" />
                  {booking.guest?.name || "Guest"}
                </td>
                <td className="px-6 py-4 text-right">
                  <p className="font-bold text-lg text-[#FF5A5F]">
                    ${booking.totalPrice?.toFixed(2) || "0.00"}
                  </p>
                </td>
                <td className="px-6 py-4 text-right flex gap-2 items-center justify-end">
                  {booking.status?.toUpperCase() === "PENDING" && (
<DialogConfirm
                       openText="Confirm"
                       headerText={`You are going to confirm booking of ${booking.listing?.title}`}
                       onConfirm={() => confirmBooking(booking.id)}
                       isLoading={isConfirming}
                       showReasonField={false}
                     />
                  )}
                  {booking.status?.toUpperCase() !== "CANCELLED" &&
                    booking.status?.toUpperCase() !== "COMPLETED" && (
<DialogConfirm
                         openText="Cancel"
                         headerText={`You are going to cancel booking of ${booking.listing?.title}`}
onConfirm={(reason) =>
                            cancelBooking({
                              bookingId: booking.id,
                              reason: reason || "",
                            })
                          }
                         isLoading={isCancelling}
                         showReasonField={true}
                         requireReason={true}
                       />
                    )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsTable;