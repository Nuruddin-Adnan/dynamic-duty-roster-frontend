export default async function getSingleEmployee(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees/${id}`,
    {
      cache: "no-store",
      next: { tags: ["employee"] },
    }
  );

  return res.json();
}
