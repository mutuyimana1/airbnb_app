import { Calendar, MapPin, Users, CheckCircle, Clock, XCircle } from "lucide-react";
import type { Booking } from "@/types";

interface BookingCardProps {
  booking: Booking;
}

const statusConfig = {
  CONFIRMED: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", label: "Confirmed" },
  PENDING: { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50", label: "Pending" },
  CANCELLED: { icon: XCircle, color: "text-red-600", bg: "bg-red-50", label: "Cancelled" },
  COMPLETED: { icon: CheckCircle, color: "text-blue-600", bg: "bg-blue-50", label: "Completed" },
};

export const BookingCard = ({ booking }: BookingCardProps) => {
  const status = (booking.status || "PENDING").toUpperCase();
  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.PENDING;
  const StatusIcon = config.icon;

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4 hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
            {booking.listing?.title || "Property"}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={14} />
            <span className="line-clamp-1">{booking.listing?.location || "Location"}</span>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color}`}>
          <StatusIcon size={14} />
          {config.label}
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Check-in</p>
            <p className="font-medium">{formatDate(booking.checkIn)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-400" />
          <div>
            <p className="text-xs text-gray-400">Check-out</p>
            <p className="font-medium">{formatDate(booking.checkOut)}</p>
          </div>
        </div>
      </div>

      {/* Guest & Price */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users size={16} className="text-gray-400" />
          <span>{booking.guest?.name || "Guest"}</span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Total</p>
          <p className="font-bold text-lg text-[#FF5A5F]">
            ${booking.totalPrice?.toFixed(2) || "0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};
