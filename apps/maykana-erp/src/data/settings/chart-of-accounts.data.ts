// Chart of Accounts data for Settings module

export interface Account {
  id: string;
  number: string;
  name: string;
  isPrimary: boolean;
  company: string;
  type: string;
  children?: Account[];
}

const accountsData: Account[] = [
  { id: '1', number: '1', name: 'الأصول', isPrimary: true, company: 'قائمة المركز المالي', type: '------------', children: [{ id: '11', number: '11', name: 'الأصول المتداولة', isPrimary: false, company: '------------', type: '------------', children: [{ id: '111', number: '111', name: 'المعادن', isPrimary: false, company: '------------', type: '------------', children: [{ id: '1111', number: '1111', name: 'مديونون • SAR', isPrimary: false, company: 'CDUXP', type: 'مستحق' }] }, { id: '112', number: '112', name: 'مستودع', isPrimary: false, company: 'CDUXP', type: 'مستحق', children: [{ id: '1121', number: '1121', name: 'مستودع الفرع • SAR', isPrimary: false, company: 'CDUXP', type: 'مستودع' }] }, { id: '113', number: '113', name: 'النقدية', isPrimary: false, company: '------------', type: '------------', children: [{ id: '1131', number: '1131', name: 'الصندوق • SAR', isPrimary: true, company: 'CDUXP', type: 'نقد' }] }, { id: '114', number: '114', name: 'البنوك', isPrimary: false, company: '------------', type: '------------', children: [{ id: '1141', number: '1141', name: 'بنك الراجحي • SAR', isPrimary: false, company: 'CDUXP', type: 'بنك' }] }, { id: '115', number: '115', name: 'القروض والسلفيات', isPrimary: false, company: '------------', type: '------------', children: [{ id: '1151', number: '1151', name: 'سلف الموظفين • SAR', isPrimary: true, company: 'CDUXP', type: 'مستحق' }] }, { id: '116', number: '116', name: 'حساب اشتراكي مؤقت', isPrimary: false, company: '------------', type: '------------', children: [{ id: '1161', number: '1161', name: 'اشتراكي مؤقت • SAR', isPrimary: false, company: 'CDUXP', type: 'اشتراكي مؤقت' }] }] }, { id: '12', number: '12', name: 'الأصول الثابتة', isPrimary: false, company: '------------', type: '------------', children: [{ id: '121', number: '121', name: 'سيارات', isPrimary: false, company: 'CDUXP', type: 'أصول ثابتة' }, { id: '122', number: '122', name: 'معدات', isPrimary: false, company: 'CDUXP', type: 'أصول ثابتة' }, { id: '123', number: '123', name: 'أثاث مكتبي', isPrimary: false, company: 'CDUXP', type: 'أصول ثابتة' }] }] },
  { id: '2', number: '2', name: 'الإلتزامات', isPrimary: true, company: 'قائمة المركز المالي', type: '------------', children: [{ id: '21', number: '21', name: 'الموردين', isPrimary: false, company: '------------', type: '------------', children: [{ id: '212', number: '212', name: 'الدائنين', isPrimary: false, company: 'CDUXP', type: 'واجب الدفع' }] }] },
  { id: '3', number: '3', name: 'حقوق الملكية', isPrimary: true, company: 'قائمة المركز المالي', type: '------------', children: [{ id: '31', number: '31', name: 'رأس المال', isPrimary: false, company: '------------', type: '------------', children: [{ id: '311', number: '311', name: 'رأس المال المدفوع • SAR', isPrimary: false, company: 'CDUXP', type: 'حقوق ملكية' }] }, { id: '32', number: '32', name: 'الاحتياطيات', isPrimary: false, company: '------------', type: '------------', children: [{ id: '321', number: '321', name: 'الاحتياطي النظامي • SAR', isPrimary: false, company: 'CDUXP', type: 'حقوق ملكية' }, { id: '322', number: '322', name: 'الاحتياطي الاختياري • SAR', isPrimary: false, company: 'CDUXP', type: 'حقوق ملكية' }] }, { id: '33', number: '33', name: 'الأرباح المحتجزة', isPrimary: false, company: '------------', type: '------------', children: [{ id: '331', number: '331', name: 'أرباح مرحلة • SAR', isPrimary: false, company: 'CDUXP', type: 'حقوق ملكية' }] }] },
  { id: '4', number: '4', name: 'الإيرادات', isPrimary: true, company: 'قائمة الأرباح والخسائر', type: '------------', children: [] },
];

export const getChartOfAccountsSampleData = (): Account[] => JSON.parse(JSON.stringify(accountsData));
