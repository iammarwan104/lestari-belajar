"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchInput() {
  const [inputValue, setInputValue] = useState<string>();
  const [value] = useDebounce(inputValue, 3000);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const query = searchParams.get("query");
  useEffect(() => {
      replace(`${pathname}?page=${1}&query=${value || ""}`,{scroll:false});
  }, [value]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setInputValue(value);
  }
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search..."
      onChange={handleChange}
      className="w-full py-2 px-2 font-normal text-base rounded-lg text-black"
      defaultValue={query?.toString() || ""}
    />
  );
}
