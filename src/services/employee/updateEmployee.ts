export default async function updateEmployee(id: any, payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees/${id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  return res.json();
}
