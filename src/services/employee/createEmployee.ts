import { authKey } from "@/constants/storageKey";

export default async function createEmployee(payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employees/create-employee`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: sessionStorage.getItem(authKey) as string,
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}
