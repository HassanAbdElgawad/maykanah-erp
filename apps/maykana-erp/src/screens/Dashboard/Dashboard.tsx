import { Layout } from '../../components/Layout';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '../../components/ui/card';
import { Table } from '../../components/ui/Table';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Package,
  Users,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  ArrowUpRight,
  LayoutDashboard,
} from 'lucide-react';

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
}

interface ChartData {
  month: string;
  value: number;
}

export const Dashboard = (): JSX.Element => {
  const { dir, t } = useLanguage();

  const statsCards: StatCard[] = [
    {
      title: t('dashboard.totalSales'),
      value: '2,450,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: t('dashboard.purchaseOrders'),
      value: '1,248',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: t('dashboard.totalAssets'),
      value: '856',
      change: '-3.1%',
      trend: 'down',
      icon: Package,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: t('dashboard.activeEmployees'),
      value: '342',
      change: '+5.4%',
      trend: 'up',
      icon: Users,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  const salesData: ChartData[] = [
    { month: t('months.january'), value: 65000 },
    { month: t('months.february'), value: 72000 },
    { month: t('months.march'), value: 68000 },
    { month: t('months.april'), value: 85000 },
    { month: t('months.may'), value: 92000 },
    { month: t('months.june'), value: 88000 },
  ];

  const purchaseStatusData = [
    { status: t('status.completed'), count: 450, percentage: 65, color: '#07b664' },
    { status: t('status.processing'), count: 180, percentage: 26, color: '#f59e0b' },
    { status: t('status.cancelled'), count: 62, percentage: 9, color: '#ef4444' },
  ];

  const topProducts = [
    {
      name: t('products.laptop'),
      quantity: 125,
      revenue: dir === 'rtl' ? `312,500 ${t('currency.sar')}` : `${t('currency.sar')} 312,500`,
    },
    {
      name: t('products.printer'),
      quantity: 89,
      revenue: dir === 'rtl' ? `89,000 ${t('currency.sar')}` : `${t('currency.sar')} 89,000`,
    },
    {
      name: t('products.monitor'),
      quantity: 67,
      revenue: dir === 'rtl' ? `134,000 ${t('currency.sar')}` : `${t('currency.sar')} 134,000`,
    },
    {
      name: t('products.keyboard'),
      quantity: 234,
      revenue: dir === 'rtl' ? `46,800 ${t('currency.sar')}` : `${t('currency.sar')} 46,800`,
    },
  ];

  const recentActivities = [
    {
      action: t('activities.newPurchaseOrder'),
      user: t('names.ahmedMohamed'),
      time: t('time.min5'),
      type: 'purchase',
    },
    {
      action: t('activities.salesInvoice'),
      user: t('names.saraAhmed'),
      time: t('time.min15'),
      type: 'sales',
    },
    {
      action: t('activities.assetMaintenance'),
      user: t('names.khaledAli'),
      time: t('time.min30'),
      type: 'maintenance',
    },
    {
      action: t('activities.monthlyReport'),
      user: t('names.fatimaHassan'),
      time: t('time.hour1'),
      type: 'report',
    },
  ];

  const departmentExpenses = [
    { department: t('departments.purchases'), amount: 450000, percentage: 30 },
    { department: t('departments.sales'), amount: 350000, percentage: 23 },
    { department: t('departments.hr'), amount: 280000, percentage: 19 },
    { department: t('departments.it'), amount: 220000, percentage: 15 },
    { department: t('departments.management'), amount: 200000, percentage: 13 },
  ];

  const maxValue = Math.max(...salesData.map((d) => d.value));

  console.log('dir', dir);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className={`flex items-center justify-between `}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#0b4041] font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.title')}
              </h1>
              <p className="text-gray-600 mt-1 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.subtitle')}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-500 font-['IBM_Plex_Sans_Arabic']">
            {t('dashboard.lastUpdate')}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6">
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 font-['IBM_Plex_Sans_Arabic']">
                      {stat.value}
                    </h3>
                    <div className="flex items-center gap-1 mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={`text-sm font-medium font-['IBM_Plex_Sans_Arabic'] ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="flex flex-wrap gap-6">
          {/* Sales Bar Chart */}
          <Card className="flex-[2] min-w-[350px] border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                  {t('dashboard.monthlySales')}
                </h3>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {salesData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 font-['IBM_Plex_Sans_Arabic']">
                        {item.month}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                        {item.value.toLocaleString()} {t('currency.sar')}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#093738] to-[#0d5556] h-full rounded-full transition-all duration-500"
                        style={{ width: `${(item.value / maxValue) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Purchase Status Pie Chart */}
          <Card className="flex-1 min-w-[300px] border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.purchaseStatus')}
              </h3>
              <div className="flex flex-col items-center justify-center space-y-6">
                {/* Donut Chart Representation */}
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#f3f4f6" strokeWidth="32" />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke={purchaseStatusData[0].color}
                      strokeWidth="32"
                      strokeDasharray={`${purchaseStatusData[0].percentage * 5.03} 503`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke={purchaseStatusData[1].color}
                      strokeWidth="32"
                      strokeDasharray={`${purchaseStatusData[1].percentage * 5.03} 503`}
                      strokeDashoffset={`-${purchaseStatusData[0].percentage * 5.03}`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke={purchaseStatusData[2].color}
                      strokeWidth="32"
                      strokeDasharray={`${purchaseStatusData[2].percentage * 5.03} 503`}
                      strokeDashoffset={`-${(purchaseStatusData[0].percentage + purchaseStatusData[1].percentage) * 5.03}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                        692
                      </div>
                      <div className="text-sm text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                        {t('dashboard.totalOrders')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-3 w-full">
                  {purchaseStatusData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-gray-700 font-['IBM_Plex_Sans_Arabic']">
                          {item.status}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="flex flex-wrap gap-6">
          {/* Top Products Table */}
          <Card className="flex-[2] min-w-[350px] border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.topProducts')}
              </h3>
              <Table
                data={topProducts}
                columns={[
                  {
                    key: 'name',
                    label: t('table.product'),
                  },
                  {
                    key: 'quantity',
                    label: t('table.quantity'),
                  },
                  {
                    key: 'revenue',
                    label: t('table.revenue'),
                  },
                ]}
              />
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="flex-1 min-w-[300px] border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.recentActivities')}
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.type === 'purchase'
                          ? 'bg-blue-50'
                          : activity.type === 'sales'
                            ? 'bg-green-50'
                            : activity.type === 'maintenance'
                              ? 'bg-orange-50'
                              : 'bg-purple-50'
                      }`}
                    >
                      {activity.type === 'purchase' ? (
                        <ShoppingCart className="w-4 h-4 text-blue-600" />
                      ) : activity.type === 'sales' ? (
                        <DollarSign className="w-4 h-4 text-green-600" />
                      ) : activity.type === 'maintenance' ? (
                        <AlertCircle className="w-4 h-4 text-orange-600" />
                      ) : (
                        <FileText className="w-4 h-4 text-purple-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                        {activity.user}
                      </p>
                      <p className="text-xs text-gray-400 font-['IBM_Plex_Sans_Arabic']">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 3 */}
        <div className={`flex flex-wrap gap-6 `}>
          {/* Department Expenses */}
          <Card className="flex-[2] min-w-[350px] border-gray-200">
            <CardContent className="p-6">
              <h3
                className={`text-lg font-semibold text-gray-900 mb-6 font-['IBM_Plex_Sans_Arabic'] `}
              >
                {t('dashboard.departmentExpenses')}
              </h3>
              <div className="space-y-4">
                {departmentExpenses.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className={`flex items-center justify-between `}>
                      <span className="text-sm font-medium text-gray-700 font-['IBM_Plex_Sans_Arabic']">
                        {dept.department}
                      </span>
                      <span className="text-sm font-semibold text-gray-900 font-['IBM_Plex_Sans_Arabic']">
                        {dept.amount.toLocaleString()} {t('currency.sar')} ({dept.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${dept.percentage}%`,
                          backgroundColor:
                            index === 0
                              ? '#093738'
                              : index === 1
                                ? '#0d5556'
                                : index === 2
                                  ? '#3b82f6'
                                  : index === 3
                                    ? '#8b5cf6'
                                    : '#f59e0b',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="flex-1 min-w-[300px] border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.quickStats')}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className={`flex items-center justify-between `}>
                    <div>
                      <p className="text-xs text-green-600 font-['IBM_Plex_Sans_Arabic']">
                        {t('stats.completedTasks')}
                      </p>
                      <p className="text-2xl font-bold text-green-700 font-['IBM_Plex_Sans_Arabic']">
                        87%
                      </p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-orange-600 font-['IBM_Plex_Sans_Arabic']">
                        {t('stats.pending')}
                      </p>
                      <p className="text-2xl font-bold text-orange-700 font-['IBM_Plex_Sans_Arabic']">
                        24
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-blue-600 font-['IBM_Plex_Sans_Arabic']">
                        {t('stats.growthRate')}
                      </p>
                      <p className="text-2xl font-bold text-blue-700 font-['IBM_Plex_Sans_Arabic']">
                        +18%
                      </p>
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};
