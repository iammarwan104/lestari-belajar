"use client";

import { Pagination } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ComponentPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const params = useSearchParams();
  const page = Number(params.get("page"));
  const [currentPage, setCurrentPage] = useState(page || 1);
  const router = useRouter();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    router.push(`/admin?page=${currentPage}`);
  }, [currentPage]);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
