import { locales } from "@/helpers/constants";

function LocalSelect() {
  return (
    <select>
      {locales.map((locale) => (
        <option value={locale} key={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}

export default LocalSelect;
