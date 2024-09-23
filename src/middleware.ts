import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    // check that all locales are included
    "/(ru|en)/:path*",
  ],
};
