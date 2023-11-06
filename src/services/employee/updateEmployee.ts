export default async function updateEmployee(id: any, payload: any) {
  const res = await fetch(`http://localhost:5000/api/v1/employees/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  return res.json();
}
