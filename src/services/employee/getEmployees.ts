export default async function getEmployees(query: string = "") {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees?${query}`,
    {
      cache: "no-store",
      next: { tags: ["employee"] },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Fail to fetch data");
  }

  return res.json();
}
