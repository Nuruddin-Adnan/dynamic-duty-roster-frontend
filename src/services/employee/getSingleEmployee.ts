export default async function getSingleEmployee(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/employees/${id}`, {
    cache: "no-store",
    next: { tags: ["employee"] },
  });

  return res.json();
}
