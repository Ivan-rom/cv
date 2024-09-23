import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "@/helpers/constats";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: locales[0],
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
