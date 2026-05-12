import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingBag, Package } from 'lucide-react';

const stats = [
  {
    id: '1',
    label: 'Total Users',
    value: '8,282',
    change: 12.5,
    trend: 'up' as const,
    Icon: Users,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    id: '2',
    label: 'Total Revenue',
    value: '$24,500',
    change: 8.2,
    trend: 'up' as const,
    Icon: DollarSign,
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    id: '3',
    label: 'Total Orders',
    value: '1,428',
    change: -3.1,
    trend: 'down' as const,
    Icon: ShoppingBag,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    id: '4',
    label: 'Products',
    value: '256',
    change: 5.7,
    trend: 'up' as const,
    Icon: Package,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`${stat.bgColor} ${stat.iconColor} p-3 rounded-lg`}>
              <stat.Icon size={24} />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {Math.abs(stat.change)}%
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
