import { IAdmin, ILogin } from "@/interfaces/shared";

export async function createAdmin(payload: IAdmin) {
  const res = await fetch(
    "https://dynamic-duty-roster-backend.vercel.app/api/v1/admins/create-admin",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

export async function adminLogin(payload: ILogin) {
  const res = await fetch(
    "https://dynamic-duty-roster-backend.vercel.app/api/v1/admins/login",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}
