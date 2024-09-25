"use client";

import { locales } from "@/helpers/constants";
import { usePathname } from "@/i18n/routing";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import styles from "./localeSelect.module.css";

function LocaleSelect() {
  const router = useRouter();
  const { locale } = useParams();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const changeHandler = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = target.value;
    startTransition(() => {
      router.replace(`/${newLocale}${pathname}`);
    });
  };

  return (
    <div className={styles.customSelect}>
      <select
        className={styles.select}
        onChange={changeHandler}
        defaultValue={locale}
        disabled={isPending}>
        {locales.map((locale) => (
          <option value={locale} key={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocaleSelect;
