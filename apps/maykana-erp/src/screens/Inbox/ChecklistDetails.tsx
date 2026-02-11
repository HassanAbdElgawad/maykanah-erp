import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/ui/button';
import {
  ArrowRight,
  Check,
  X,
  RotateCcw,
  Link as LinkIcon,
} from 'lucide-react';

// Types
interface ChecklistItem {
  id: number;
  element: string;
  description: string;
  status: {
    type: 'completed' | 'not_completed' | 'partial' | 'text';
    label: string;
  };
  notes?: string;
  images?: {
    src: string;
    alt: string;
  }[];
  additionalImagesCount?: number;
}

// Mock data for checklist details
const checklistData = {
  id: '1',
  title: 'قائمة تحقق من الضيافة العامة - فرع الرياض - 05/11/2025 - 00:00',
  requestOwner: {
    name: 'حسن محسن',
    role: 'مدير الموارد البشرية',
  },
  requestType: 'قائمة تحقق',
  requestName: 'قائمة التحقق من الضيافة العامة',
  requestDate: '2023-11-01',
  branch: 'فرع 1',
  department: 'قسم 1',
  completionPercentage: 40,
  items: [
    {
      id: 1,
      element: 'الأرضيات',
      description: 'هل تم تنظيف الأرضيات وتحقيقها؟',
      status: { type: 'completed' as const, label: 'نعم تم التنظيف' },
    },
    {
      id: 2,
      element: 'الطاولات والكراسي',
      description: 'هل تم مسحها وتعقيمها؟',
      status: { type: 'not_completed' as const, label: 'لا، لم يتم مسحها وتعقيمها' },
      notes: 'لا توفر على أدوات النظافة كاملة، تم إرسال طلب الشراء ولم يتوصل بجواب.',
    },
    {
      id: 3,
      element: 'أدوات التقديم',
      description: 'هل تم غسلها وتجفيفها بالكامل؟',
      status: { type: 'completed' as const, label: 'نعم تم التنظيف' },
    },
    {
      id: 4,
      element: 'المطبخ',
      description: 'هل الأسطح خالية من بقايا الطعام؟',
      status: { type: 'partial' as const, label: 'تم مسحها وتنظيفها جزئيا' },
      images: [
        { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop', alt: 'صورة 1' },
        { src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=100&h=100&fit=crop', alt: 'صورة 2' },
        { src: 'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?w=100&h=100&fit=crop', alt: 'صورة 3' },
        { src: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=100&h=100&fit=crop', alt: 'صورة 4' },
      ],
      additionalImagesCount: 10,
    },
    {
      id: 5,
      element: 'الثلاجات',
      description: 'هل تم تنظيفها وإزالة بقايا الطعام القديمة؟',
      status: { type: 'partial' as const, label: 'تم جزئيا' },
      images: [
        { src: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=100&h=100&fit=crop', alt: 'صورة 1' },
        { src: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=100&h=100&fit=crop', alt: 'صورة 2' },
        { src: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=100&h=100&fit=crop', alt: 'صورة 3' },
        { src: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=100&h=100&fit=crop', alt: 'صورة 4' },
      ],
      additionalImagesCount: 5,
    },
    {
      id: 6,
      element: 'المراحيض',
      description: 'هل تم تنظيفها وتبديل مواد التعقيم؟',
      status: { type: 'completed' as const, label: 'نعم تم التنظيف' },
    },
    {
      id: 7,
      element: 'النفايات',
      description: 'كم من قنبة متبقية؟',
      status: { type: 'text' as const, label: '10 قنينات' },
    },
  ] as ChecklistItem[],
};

export const ChecklistDetails = (): JSX.Element => {
  const navigate = useNavigate();
  useParams(); // Will be used to fetch actual data by ID
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Status badge component
  const StatusBadge = ({ status }: { status: ChecklistItem['status'] }) => {
    const statusConfig = {
      completed: {
        bgColor: 'bg-[#E8F5E9]',
        textColor: 'text-[#2E7D32]',
      },
      not_completed: {
        bgColor: 'bg-[#FFEBEE]',
        textColor: 'text-[#C62828]',
      },
      partial: {
        bgColor: 'bg-[#FFF3E0]',
        textColor: 'text-[#E65100]',
      },
      text: {
        bgColor: 'bg-[#F5F5F5]',
        textColor: 'text-[#424242]',
      },
    };

    const config = statusConfig[status.type];

    return (
      <span
        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${config.bgColor} ${config.textColor} [font-family:'IBM_Plex_Sans_Arabic',Helvetica]`}
      >
        {status.label}
      </span>
    );
  };

  // Image gallery component
  const ImageGallery = ({
    images,
    additionalCount,
  }: {
    images: ChecklistItem['images'];
    additionalCount?: number;
  }) => {
    if (!images || images.length === 0) return <span className="text-gray-400">—</span>;

    return (
      <div className="flex flex-wrap gap-2">
        {/* First row - 4 images */}
        <div className="flex gap-2">
          {images.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 hover:border-[#093738] transition-colors"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index === 3 && additionalCount && additionalCount > 0 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">+{additionalCount} صور</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Image lightbox/modal
  const ImageLightbox = () => {
    if (!selectedImage) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-w-4xl max-h-[90vh] p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <img
            src={selectedImage.replace('w=100&h=100', 'w=800&h=600')}
            alt="صورة مكبرة"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir="rtl">
        {/* Header with Back Button and Actions */}
        <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl border border-[#e2e2e2]">
          {/* Right Side - Title with Back Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/inbox')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-lg font-semibold text-[#0e0d24]">
              {checklistData.title}
            </h1>
          </div>

          {/* Left Side - Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Reject Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border-red-200 bg-red-50 text-red-600 hover:bg-red-100 hover:border-red-300 rounded-lg flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              <span>رفض</span>
            </Button>

            {/* Return Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100 hover:border-orange-300 rounded-lg flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إرجاع</span>
            </Button>

            {/* Approve Button */}
            <Button
              variant="outline"
              className="px-4 py-2 border-green-200 bg-green-50 text-green-600 hover:bg-green-100 hover:border-green-300 rounded-lg flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>اعتمد</span>
            </Button>
          </div>
        </div>

        {/* Request Info Card */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] p-6">
          <div className="grid grid-cols-7 gap-6 items-center">
            {/* Request Owner */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">صاحب الطلب</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#093738] to-[#0d5556] flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {checklistData.requestOwner.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {checklistData.requestOwner.name}
                  </p>
                  <p className="text-xs text-gray-500">{checklistData.requestOwner.role}</p>
                </div>
              </div>
            </div>

            {/* Request Type */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">نوع الطلب</span>
              <button className="text-[#093738] hover:text-[#0b5556] text-sm font-medium flex items-center gap-1 hover:underline w-fit">
                <LinkIcon className="w-4 h-4" />
                <span>{checklistData.requestType}</span>
              </button>
            </div>

            {/* Request Name */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">اسم الطلب</span>
              <span className="text-sm font-medium text-gray-900">{checklistData.requestName}</span>
            </div>

            {/* Request Date */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">تاريخ الطلب</span>
              <span className="text-sm font-medium text-gray-900">{checklistData.requestDate}</span>
            </div>

            {/* Branch */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">الفرع</span>
              <span className="text-sm font-medium text-gray-900">{checklistData.branch}</span>
            </div>

            {/* Department */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">القسم</span>
              <span className="text-sm font-medium text-gray-900">{checklistData.department}</span>
            </div>

            {/* Completion Percentage */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">نسبة الإكمال</span>
              <span className="text-2xl font-bold text-[#C62828]">
                {checklistData.completionPercentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Checklist Table */}
        <div className="bg-white rounded-xl border border-[#e2e2e2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full" dir="rtl">
              <thead className="bg-[#F8FAFC] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24] w-16">
                    #
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    العنصر
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    الوصف
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    الحالة
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-[#0e0d24]">
                    للملاحظات
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {checklistData.items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                    {/* Row Number */}
                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">{item.id}</td>

                    {/* Element */}
                    <td className="px-4 py-4 text-sm text-gray-900">{item.element}</td>

                    {/* Description */}
                    <td className="px-4 py-4 text-sm text-gray-700">{item.description}</td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <StatusBadge status={item.status} />
                    </td>

                    {/* Notes / Images */}
                    <td className="px-4 py-4">
                      {item.notes ? (
                        <p className="text-sm text-gray-600 max-w-xs">{item.notes}</p>
                      ) : item.images && item.images.length > 0 ? (
                        <ImageGallery
                          images={item.images}
                          additionalCount={item.additionalImagesCount}
                        />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox />
    </Layout>
  );
};
