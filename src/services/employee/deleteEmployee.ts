export default async function deleteEmployee(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
}
