import { Layout } from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/Table';
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  LayoutDashboard,
  BarChart3,
  DollarSign,
  ShoppingCart,
  FileText,
} from 'lucide-react';
import { useDashboardData } from '@/hooks/useDashboardData';

export const Dashboard = (): JSX.Element => {
  const { dir, t } = useLanguage();
  const { 
    statsCards, 
    salesData, 
    purchaseStatusData, 
    topProducts, 
    recentActivities, 
    departmentExpenses 
  } = useDashboardData();

  const maxValue = Math.max(...salesData.map((d) => d.value));

  console.log('dir', dir);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0b4041] font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.title')}
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-1 font-['IBM_Plex_Sans_Arabic']">
                {t('dashboard.subtitle')}
              </p>
            </div>
          </div>
          <div className="text-xs md:text-sm text-gray-500 font-['IBM_Plex_Sans_Arabic']">
            {t('dashboard.lastUpdate')}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsCards.map((stat, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 font-['IBM_Plex_Sans_Arabic']">
                      {stat.title}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-1 md:mt-2 font-['IBM_Plex_Sans_Arabic']">
                      {stat.value}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 md:mt-2">
                      {stat.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
                      )}
                      <span
                        className={`text-xs md:text-sm font-medium font-['IBM_Plex_Sans_Arabic'] ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Sales Bar Chart */}
          <Card className="bg-white lg:col-span-2 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
          <Card className="bg-white lg:col-span-1 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Top Products Table */}
          <Card className="bg-white lg:col-span-2 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
          <Card className="bg-white lg:col-span-1 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Department Expenses */}
          <Card className="bg-white lg:col-span-2 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
          <Card className="bg-white lg:col-span-1 border-gray-200">
            <CardContent className="p-4 md:p-6">
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
