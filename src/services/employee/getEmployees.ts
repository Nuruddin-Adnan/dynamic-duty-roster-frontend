import { method } from "lodash";

export default async function getEmployees(query: string = "") {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees?${query}`,
    {
      next: { revalidate: 30, tags: ["employee"] },
    }
  );

  return res.json();
}
