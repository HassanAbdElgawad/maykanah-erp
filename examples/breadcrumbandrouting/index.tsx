"use client";

// packages

// custom hooks
import { useBreadcrumbs } from "@/application/hooks/useBreadcrumbs";
import { useLanguage } from "@/application/hooks/i18n/useLanguage";
import type { TranslationKey } from "@/domain/i18n/types";

// ui components
import { ArrowRight2 } from "iconsax-reactjs";
import { Link } from "react-router";

export function Breadcrumbs() {
  const { t } = useLanguage();
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <ArrowRight2 size={13} className="rtl:scale-x-[-1]" />
      {breadcrumbs.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2 font-medium whitespace-nowrap">
          {index !== 0 && (
            <ArrowRight2 size={13} className="rtl:scale-x-[-1]" />
          )}
          {index !== breadcrumbs.length - 1 ? (
            <Link to={crumb.href} className="underline whitespace-nowrap">
              {t(crumb.label as TranslationKey)}
            </Link>
          ) : (
            <span className="font-medium whitespace-nowrap">
              {t(crumb.label as TranslationKey)}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
