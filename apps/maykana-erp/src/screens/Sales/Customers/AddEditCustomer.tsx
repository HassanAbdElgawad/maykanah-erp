import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, FileText, ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonClasses } from "@/styles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const AddEditCustomer: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, language } = useLanguage();
  const isRTL = language === "ar";
  const isEdit = !!id;

  // Form state
  const [customerData, setCustomerData] = useState({
    name: "",
    type: "individual", // individual or company
    email: "",
    phone: "",
    countryCode: "+966",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    street: "",
    currency: "",
    customerGroup: "",
    priceList: "",
    taxNumber: "",
    commercialRegister: "",
    defaultAccount: "",
    paymentTerms: "",
    salesRepresentative: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving customer:", customerData);
    // TODO: Implement save logic
    navigate("/sales/customers");
  };

  const handleBack = () => {
    navigate("/sales/customers");
  };

  // Sections that can be collapsed
  const [sections, setSections] = useState({
    basic: true,
    other: true,
  });

  const toggleSection = (section: "basic" | "other") => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Layout>
      <div className="flex flex-col gap-4 p-4">
        {/* Header with back button and title */}
        <Card>
          <CardContent className="p-4">
            <div
              className={`flex items-center justify-between ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center gap-4 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBack}
                  className="h-[42px] w-[42px] bg-[#f0f4f7] hover:bg-[#e1e8eb] rounded-lg"
                >
                  <ArrowLeft className={`h-6 w-6 ${isRTL ? "rotate-180" : ""}`} />
                </Button>
                <h1
                  className="text-xl font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic" }}
                >
                  {isEdit ? t("customers.edit_customer") : t("customers.add_customer")}
                </h1>
              </div>
              <button
                onClick={handleSave}
                className={buttonClasses.primary}
                style={{ fontFamily: "IBM Plex Sans Arabic" }}
              >
                {t("customers.save")}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Basic Information Section */}
        <Card>
          <CardContent className="p-4">
            {/* Section Header */}
            <div
              className={`flex items-center justify-between mb-6 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center gap-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex items-center justify-center h-[42px] w-[42px] bg-[#f0f4f7] rounded-lg">
                  <FileText className="h-6 w-6" />
                </div>
                <h2
                  className="text-xl font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic" }}
                >
                  {t("customers.basic_info")}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleSection("basic")}
                className="h-[42px] w-[42px] bg-[#f0f4f7] hover:bg-[#e1e8eb] rounded-lg"
              >
                <ChevronDown
                  className={`h-6 w-6 transition-transform ${
                    sections.basic ? "" : "rotate-180"
                  }`}
                />
              </Button>
            </div>

            <hr className="mb-6 border-[#e2e2e2]" />

            {sections.basic && (
              <div className="space-y-6">
                {/* Row 1: Name, Type, Email, Phone */}
                <div className="grid grid-cols-4 gap-4">
                  {/* Customer Name */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.name")}
                    </Label>
                    <Input
                      value={customerData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder={t("customers.name")}
                      className="h-[45px] border-[#cfcfcf]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  {/* Customer Type */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.type")}
                    </Label>
                    <div className="flex h-[45px] items-center gap-1.5 px-[5px] py-1 bg-white rounded-lg border border-solid border-[#cfcfcf80]">
                      {/* Individual Option */}
                      <button
                        type="button"
                        onClick={() => handleInputChange("type", "individual")}
                        className={`flex items-center justify-center gap-1.5 px-2.5 py-[3px] rounded-lg flex-1 h-[35px] ${
                          customerData.type === "individual"
                            ? "bg-[#e8ecec87] border border-[#ecedf5]"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-base ${
                            customerData.type === "individual"
                              ? "text-[#31c75b]"
                              : "text-[#0e0d24]"
                          }`}
                          style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        >
                          {t("customers.individual")}
                        </span>
                        <div
                          className={`flex items-center justify-center rounded-full ${
                            customerData.type === "individual"
                              ? "bg-[#31c75b] pl-4 pr-0.5 py-0.5"
                              : "w-4 h-4 border border-black"
                          }`}
                        >
                          {customerData.type === "individual" && (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          )}
                        </div>
                      </button>

                      {/* Company Option */}
                      <button
                        type="button"
                        onClick={() => handleInputChange("type", "company")}
                        className={`flex items-center justify-center gap-1.5 px-2.5 py-[3px] rounded-lg flex-1 h-[35px] ${
                          customerData.type === "company"
                            ? "bg-[#e8ecec87] border border-[#ecedf5]"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-base ${
                            customerData.type === "company"
                              ? "text-[#31c75b]"
                              : "text-[#0e0d24]"
                          }`}
                          style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        >
                          {t("customers.company")}
                        </span>
                        <div
                          className={`flex items-center justify-center rounded-full ${
                            customerData.type === "company"
                              ? "bg-[#31c75b] pl-4 pr-0.5 py-0.5"
                              : "w-4 h-4 border border-black"
                          }`}
                        >
                          {customerData.type === "company" && (
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.email")}
                    </Label>
                    <Input
                      type="email"
                      value={customerData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder={t("customers.email")}
                      className="h-[45px] border-[#cfcfcf]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                      dir="ltr"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.phone")}
                    </Label>
                    <div className="relative">
                      <Input
                        type="tel"
                        value={customerData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="598 251 236"
                        className="h-[45px] border-[#cfcfcf] pl-[90px]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir="ltr"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <img
                          src="https://c.animaapp.com/mkfg4byy0idtsi/img/flag-icon.png"
                          alt="flag"
                          className="w-[22px] h-[15px] object-cover"
                        />
                        <span className="text-xs font-medium">+966</span>
                        <ChevronDown className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Address, City, Region, Postal Code */}
                <div className="grid grid-cols-4 gap-4">
                  {/* Address */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.address")}
                    </Label>
                    <Input
                      value={customerData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder={t("customers.address")}
                      className="h-[45px] border-[#cfcfcf]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.city")}
                    </Label>
                    <Select
                      value={customerData.city}
                      onValueChange={(value) => handleInputChange("city", value)}
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.city")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="riyadh">الرياض</SelectItem>
                        <SelectItem value="jeddah">جدة</SelectItem>
                        <SelectItem value="dammam">الدمام</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.region")}
                    </Label>
                    <Select
                      value={customerData.region}
                      onValueChange={(value) => handleInputChange("region", value)}
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.region")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="central">المنطقة الوسطى</SelectItem>
                        <SelectItem value="eastern">المنطقة الشرقية</SelectItem>
                        <SelectItem value="western">المنطقة الغربية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Postal Code */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.postal_code")}
                    </Label>
                    <Input
                      value={customerData.postalCode}
                      onChange={(e) =>
                        handleInputChange("postalCode", e.target.value)
                      }
                      placeholder="52114"
                      className="h-[45px] border-[#cfcfcf]"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Row 3: Street (full width) */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.street")}
                    </Label>
                    <Input
                      value={customerData.street}
                      onChange={(e) => handleInputChange("street", e.target.value)}
                      placeholder="52114"
                      className="h-[45px] border-[#cfcfcf]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                      dir={isRTL ? "rtl" : "ltr"}
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Other Information Section */}
        <Card>
          <CardContent className="p-4">
            {/* Section Header */}
            <div
              className={`flex items-center justify-between mb-6 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex items-center gap-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex items-center justify-center h-[42px] w-[42px] bg-[#f0f4f7] rounded-lg">
                  <FileText className="h-6 w-6" />
                </div>
                <h2
                  className="text-xl font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic" }}
                >
                  {t("customers.other_info")}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleSection("other")}
                className="h-[42px] w-[42px] bg-[#f0f4f7] hover:bg-[#e1e8eb] rounded-lg"
              >
                <ChevronDown
                  className={`h-6 w-6 transition-transform ${
                    sections.other ? "" : "rotate-180"
                  }`}
                />
              </Button>
            </div>

            <hr className="mb-6 border-[#e2e2e2]" />

            {sections.other && (
              <div className="space-y-6">
                {/* Row 1: Currency, Customer Group, Price List, Tax Number */}
                <div className="grid grid-cols-4 gap-4">
                  {/* Currency */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.currency")}
                    </Label>
                    <Select
                      value={customerData.currency}
                      onValueChange={(value) => handleInputChange("currency", value)}
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.currency")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="sar">الريال السعودي</SelectItem>
                        <SelectItem value="usd">دولار أمريكي</SelectItem>
                        <SelectItem value="eur">يورو</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Customer Group */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.customer_group")}
                    </Label>
                    <Select
                      value={customerData.customerGroup}
                      onValueChange={(value) =>
                        handleInputChange("customerGroup", value)
                      }
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.customer_group")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="local">محليين</SelectItem>
                        <SelectItem value="international">دوليين</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price List */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.price_list")}
                    </Label>
                    <Select
                      value={customerData.priceList}
                      onValueChange={(value) => handleInputChange("priceList", value)}
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.price_list")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="standard">قائمة قياسية</SelectItem>
                        <SelectItem value="vip">قائمة VIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tax Number */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.tax_number")}
                    </Label>
                    <Input
                      value={customerData.taxNumber}
                      onChange={(e) =>
                        handleInputChange("taxNumber", e.target.value)
                      }
                      placeholder="598 251 236"
                      className="h-[45px] border-[#cfcfcf]"
                      dir="ltr"
                    />
                  </div>
                </div>

                {/* Row 2: Default Account, Payment Terms, Sales Representative, Commercial Register */}
                <div className="grid grid-cols-4 gap-4">
                  {/* Default Account */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.default_account")}
                    </Label>
                    <Select
                      value={customerData.defaultAccount}
                      onValueChange={(value) =>
                        handleInputChange("defaultAccount", value)
                      }
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.default_account")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="debtors">حساب المدينون</SelectItem>
                        <SelectItem value="other">حساب آخر</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Terms */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.payment_terms")}
                    </Label>
                    <Select
                      value={customerData.paymentTerms}
                      onValueChange={(value) =>
                        handleInputChange("paymentTerms", value)
                      }
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue placeholder={t("customers.payment_terms")} />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="immediate">فوري</SelectItem>
                        <SelectItem value="30days">30 يوم</SelectItem>
                        <SelectItem value="60days">60 يوم</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sales Representative */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.sales_representative")}
                    </Label>
                    <Select
                      value={customerData.salesRepresentative}
                      onValueChange={(value) =>
                        handleInputChange("salesRepresentative", value)
                      }
                    >
                      <SelectTrigger
                        className="h-[45px] border-[#cfcfcf]"
                        style={{ fontFamily: "IBM Plex Sans Arabic" }}
                        dir={isRTL ? "rtl" : "ltr"}
                      >
                        <SelectValue
                          placeholder={t("customers.sales_representative")}
                        />
                      </SelectTrigger>
                      <SelectContent dir={isRTL ? "rtl" : "ltr"}>
                        <SelectItem value="rep1">مندوب 1</SelectItem>
                        <SelectItem value="rep2">مندوب 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Commercial Register */}
                  <div className="space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                    <Label
                      className="text-[#00000099]"
                      style={{ fontFamily: "IBM Plex Sans Arabic" }}
                    >
                      {t("customers.commercial_register")}
                    </Label>
                    <Input
                      value={customerData.commercialRegister}
                      onChange={(e) =>
                        handleInputChange("commercialRegister", e.target.value)
                      }
                      placeholder="598 251 236"
                      className="h-[45px] border-[#cfcfcf]"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
