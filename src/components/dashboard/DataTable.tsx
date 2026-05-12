import { MoreVertical } from 'lucide-react';
import imgAvatar1 from "../../assets/images/65fe72607cfdb7be921a3d8dfffa36af52f4dfc1.png";
import imgAvatar2 from "../../assets/images/c774b2117f5bdb790f047e64ff9b67e99c51d19f.png";
import imgAvatar3 from "../../assets/images/f70914d5243a1812c4c9f716c79f214672ff65cc.png";
import imgAvatar4 from "../../assets/images/e384f06b4c12221316956bec4da2834bd662b40f.png";

const tableData = [
  {
    id: '1',
    product: 'Premium Subscription',
    customer: 'John Anderson',
    date: 'May 10, 2026',
    amount: '$299.00',
    status: 'completed' as const,
    avatar: imgAvatar1,
  },
  {
    id: '2',
    product: 'Pro Plan',
    customer: 'Sarah Miller',
    date: 'May 09, 2026',
    amount: '$149.00',
    status: 'pending' as const,
    avatar: imgAvatar2,
  },
  {
    id: '3',
    product: 'Enterprise Package',
    customer: 'Michael Chen',
    date: 'May 08, 2026',
    amount: '$999.00',
    status: 'completed' as const,
    avatar: imgAvatar3,
  },
  {
    id: '4',
    product: 'Basic Plan',
    customer: 'Emma Williams',
    date: 'May 07, 2026',
    amount: '$49.00',
    status: 'cancelled' as const,
    avatar: imgAvatar4,
  },
  {
    id: '5',
    product: 'Premium Subscription',
    customer: 'David Brown',
    date: 'May 06, 2026',
    amount: '$299.00',
    status: 'completed' as const,
    avatar: imgAvatar1,
  },
];

export default function DataTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <p className="text-sm text-gray-500">Overview of your latest orders</p>
        </div>
        <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.avatar}
                      alt={row.customer}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-900">{row.customer}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-700">{row.product}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">{row.date}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold text-gray-900">{row.amount}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-150">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
