export default async function deleteEmployee(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/employees/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  return res.json();
}
