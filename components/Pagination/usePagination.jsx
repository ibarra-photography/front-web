import { useRouter } from "node_modules/next/router";

export const usePagination = (totalPages) => {
  const { query, push, route } = useRouter();

  const page = query.page ? query.page : 1;
  const prevPageHandler = () => {
    if (page == 1) return;
    push(`${route}?page=${+page - 1}`);
  };

  const nextPageHandler = () => {
    if (page == totalPages) return;
    push(`${route}?page=${+page + 1}`);
  };

  return { prevPageHandler, nextPageHandler, page };
};
