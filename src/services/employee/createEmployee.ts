export default async function createEmployee(payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees/create-employee`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}
