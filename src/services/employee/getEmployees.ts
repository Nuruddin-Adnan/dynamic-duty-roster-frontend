export default async function getEmployees() {
  const res = await fetch("http://localhost:5000/api/v1/employees", {
    cache: "no-store",
    next: { tags: ["employee"] },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Fail to fetch data");
  }

  return res.json();
}
