"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import sharedStyles from "@/styles/shared.module.css";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  value: string;
};

function Filter({ value }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchFilters, setSearchFilters] = useState<string[]>([]);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilters = [...searchFilters];

    if (e.target.checked) {
      newFilters.push(e.target.value);
    } else {
      const index = newFilters.indexOf(e.target.value);
      if (index !== -1) {
        newFilters.splice(index, 1);
      }
    }

    const filtersString = JSON.stringify(newFilters);

    router.replace(
      `${pathname}?${createQueryString("filters", filtersString)}`
    );
  };

  useEffect(() => {
    const encodedFilters = searchParams.get("filters");

    try {
      const decodedFiltersString = decodeURI(encodedFilters || "");
      const decodedFilters = JSON.parse(decodedFiltersString);
      setSearchFilters(decodedFilters || []);
    } catch {
      setSearchFilters([]);
    }
  }, [searchParams]);

  return (
    <div className={sharedStyles.chip}>
      <input
        type="checkbox"
        value={value}
        onChange={changeHandler}
        checked={searchFilters.includes(value)}
      />
      {value}
    </div>
  );
}

export default Filter;
