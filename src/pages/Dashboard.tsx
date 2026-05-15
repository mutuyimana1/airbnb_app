import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import DataTable from "../components/dashboard/DataTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-4 lg:p-8">
        <div className="mb-8">
          <StatsCards />
        </div>
        <div className="mb-8">
          <AnalyticsChart />
        </div>
        <div className="mb-8">
          <DataTable />
        </div>
      </main>
    </div>
  );
}
