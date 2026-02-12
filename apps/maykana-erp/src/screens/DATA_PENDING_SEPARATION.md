# صفحات تحتاج فصل الـ Data

هذا الملف يوضح الصفحات التي مازالت تحتوي على بيانات داخلية (inline/mock data) ولم تُنقل بعد إلى مجلد `@/data`.

## كيف تعمل مع هذا الملف

1. اختر الصف الأول من الجدول وابدأ العمل عليه
2. أنشئ ملف data في المسار المقترح (إن لم يكن موجوداً)
3. انقل البيانات من الـ Screen إلى ملف الـ Data
4. حدّث الـ Screen لاستيراد البيانات من ملف الـ Data
5. ضع علامة ✓ في عمود "تم" عند الانتهاء
6. انتقل للصف التالي

---

## الجدول

| # | الوحدة | الملف | نوع البيانات | المسار المقترح للـ Data | تم |
|---|--------|-------|--------------|-------------------------|-----|
| 1 | Reports | DamagedReturnedReport.tsx | `useState` مع مصفوفة بيانات | `@/data/reports/warehouses/damaged-returned.data.ts` | |
| 2 | Reports | InventoryVarianceReport.tsx | `useState` مع مصفوفة بيانات | `@/data/reports/warehouses/inventory-variance.data.ts` | |
| 3 | Reports | ItemMovementReport.tsx | `useState` مع مصفوفة بيانات | `@/data/reports/warehouses/item-movement.data.ts` | |
| 4 | Reports | InventoryBalanceReport.tsx | `useState` مع مصفوفة بيانات | `@/data/reports/warehouses/inventory-balance.data.ts` | |
| 5 | Warehouses | InventoryClosingList.tsx | `mockData` ثابت | `@/data/warehouses/inventory-closing-list.data.ts` (موجود - تحقق من الاستخدام) | |
| 6 | Warehouses | WarehouseMovementList.tsx | `movements` مصفوفة | `@/data/warehouses/warehouse-movement.data.ts` | |
| 7 | Warehouses | InventoryMovementsList.tsx | `movements` مصفوفة | `@/data/warehouses/inventory-movements.data.ts` | |
| 8 | Warehouses | ProductsList.tsx | `products` مصفوفة | `@/data/warehouses/products.data.ts` | |
| 9 | Warehouses | WarehouseSerialNumber.tsx | `useState` مصفوفة | `@/data/warehouses/warehouse-serial-number.data.ts` | |
| 10 | Warehouses | WarehousePriceLists.tsx | `useState` مصفوفة | `@/data/warehouses/warehouse-price-lists.data.ts` | |
| 11 | Warehouses | WarehouseBatches.tsx | `useState` مصفوفة | `@/data/warehouses/warehouse-batches.data.ts` | |
| 12 | Warehouses | WarehouseItemPrice.tsx | `useState` مصفوفة | `@/data/warehouses/warehouse-item-price.data.ts` | |
| 13 | Warehouses | WarehouseGoodsArrivalCost.tsx | `useState` مصفوفة | `@/data/warehouses/warehouse-goods-arrival-cost.data.ts` | |
| 14 | Warehouses | InventoryCategories.tsx | `useState` مصفوفة | `@/data/warehouses/inventory-categories.data.ts` | |
| 15 | Warehouses | SelectMovementType.tsx | `movementTypes` مصفوفة | `@/data/warehouses/warehouse-movement.data.ts` | |
| 16 | Warehouses | TransferStock.tsx | `orderItems`, `additionalCosts` | `@/data/warehouses/transfer-stock.data.ts` | |
| 17 | Warehouses | DamageStock.tsx | `orderItems`, `additionalCosts` | `@/data/warehouses/damage-stock.data.ts` | |
| 18 | Warehouses | AddEditInventoryMovement.tsx | `orderItems`, `additionalCosts` | `@/data/warehouses/inventory-movement-form.data.ts` | |
| 19 | Warehouses | WarehouseGoodsArrivalCostForm.tsx | `purchaseReceipts`, `receiptParts`, `accountData` | `@/data/warehouses/goods-arrival-cost-form.data.ts` | |
| 20 | Warehouses | ViewInventoryMovement.tsx | `orderItems`, `additionalCosts` | `@/data/warehouses/inventory-movement-view.data.ts` | |
| 21 | Workflows | Workflows.tsx | `workflowCards` مصفوفة | `@/data/workflows/workflows.data.ts` (موجود - تحقق) | |
| 22 | Strategy | StrategicPlans.tsx | `mockPlans` | `@/data/strategy/strategic-plans.data.ts` (موجود - تحقق) | |
| 23 | Strategy | Projects.tsx | `mockProjects` | `@/data/strategy/projects.data.ts` (موجود - تحقق) | |
| 24 | Strategy | Meetings.tsx | `mockMeetings` | `@/data/strategy/meetings.data.ts` (موجود - تحقق) | |
| 25 | Strategy | Documents.tsx | `mockDocuments` | `@/data/strategy/documents.data.ts` (موجود - تحقق) | |
| 26 | Strategy | PlanTracking.tsx | `buildTreeData` | `@/data/strategy/plan-tracking.data.ts` | |
| 27 | Strategy | PlanLinkDetails.tsx | `goals`, `initiatives`, `kpis` | `@/data/strategy/plan-link-details.data.ts` | |
| 28 | Strategy | NewPlanLink.tsx | `goals`, `initiatives`, `kpis` | `@/data/strategy/new-plan-link.data.ts` | |
| 29 | Strategy | NewProject.tsx | `steps`, `risks`, `approvalStages` | `@/data/strategy/new-project.data.ts` | |
| 30 | Settings | UnitOfMeasureEdit.tsx | `mockUnits` | `@/data/settings/unit-of-measures.data.ts` (موجود - تحقق) | |
| 31 | Settings | ItemGroupEdit.tsx | `mockGroups` | `@/data/settings/item-groups.data.ts` (موجود - تحقق) | |
| 32 | Settings | MaintenanceTeamView.tsx | `mockTeams` | `@/data/settings/maintenance-team.data.ts` (موجود - تحقق) | |
| 33 | Settings | MaintenanceTeamEdit.tsx | `mockTeams` | `@/data/settings/maintenance-team.data.ts` | |
| 34 | Settings | AssetLocationEdit.tsx | `mockLocations` | `@/data/settings/asset-locations.data.ts` (موجود - تحقق) | |
| 35 | Settings | AssetCategoryEdit.tsx | `mockCategories` | `@/data/settings/asset-categories.data.ts` (موجود - تحقق) | |
| 36 | Settings | AssetCategoryDetails.tsx | `mockCategories` | `@/data/settings/asset-categories.data.ts` | |
| 37 | Settings | UnitOfMeasures.tsx | `useState` units | `@/data/settings/unit-of-measures.data.ts` | |
| 38 | Settings | TermsTemplate.tsx | `useState` templates | إضافة إلى `@/data/settings` أو إنشاء ملف | |
| 39 | Settings | TermsConditions.tsx | `useState` terms | إضافة إلى `@/data/settings` | |
| 40 | Settings | ItemGroups.tsx | `useState` groups | `@/data/settings/item-groups.data.ts` | |
| 41 | Settings | WarehouseManagement.tsx | `useState` warehouses | `@/data/settings/warehouse-management.data.ts` | |
| 42 | Settings | UserManagement.tsx | `useState` users | `@/data/settings/user-management.data.ts` | |
| 43 | Settings | DepartmentManagement.tsx | `useState` departments | `@/data/settings/department-management.data.ts` | |
| 44 | Settings | AssetCategories.tsx | `useState` categories | `@/data/settings/asset-categories.data.ts` | |
| 45 | Settings | AssetLocations.tsx | `useState` locations | `@/data/settings/asset-locations.data.ts` | |
| 46 | Settings | MaintenanceTeam.tsx | `useState` teams | `@/data/settings/maintenance-team.data.ts` | |
| 47 | Settings | Currencies.tsx | `useState` currencies | إضافة لـ `@/data/settings` أو ملف جديد | |
| 48 | Settings | TaxSettings.tsx | `useState` taxSettings | إضافة لـ `@/data/settings` | |
| 49 | Settings | PaymentMethods.tsx | `useState` paymentMethods | إضافة لـ `@/data/settings` | |
| 50 | Settings | FiscalYear.tsx | `useState` fiscalYears | إضافة لـ `@/data/settings` | |
| 51 | Settings | CostCenters.tsx | `useState` costCenters | إضافة لـ `@/data/settings` | |
| 52 | Settings | ChartOfAccounts.tsx | `useState` accounts | إضافة لـ `@/data/settings` أو `@/data/accounting` | |
| 53 | Settings | Budget.tsx | `useState` budgets | إضافة لـ `@/data/settings` | |
| 54 | Settings | BranchManagement.tsx | `useState` branches | إضافة لـ `@/data/settings` | |
| 55 | Assets | AddAssetForm.tsx | `depreciationTableData`, `steps` | `@/data/assets/add-asset-form.data.ts` | |
| 56 | Templates | AddEditVerificationTemplate.tsx | `useState` checklist items | `@/data/templates/verification-templates.data.ts` (موجود) | |

---

## ملاحظات

- **البيانات التي تستخدم `useState` مع قيم افتراضية**: انقل القيم الافتراضية إلى دوال في ملف الـ data مثل `getInitialUnits()`, `getSampleWarehouses()`.
- **الـ mock data للعرض (View/Edit)**: أنشئ دوال مثل `getUnitById(id)`, `getCategoryById(id)` في ملفات الـ data.
- **بعض الملفات مذكورة كـ "موجود - تحقق"**: قد تكون البيانات مفصولة جزئياً؛ تحقق من أن الـ Screen يستورد فعلياً من الملف.
