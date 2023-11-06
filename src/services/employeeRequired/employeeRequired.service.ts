async function createEmployeeRequired(payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employee-required/create-employee-required`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function getAllEmployeeRequireds(query: string = "") {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employee-required/?${query}`,
    {
      cache: "no-store",
      next: { tags: ["employee-required"] },
    }
  );

  return res.json();
}

async function getSingleEmployeeRequired(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employee-required/${id}`,
    {
      cache: "no-store",
      next: { tags: ["employee-required"] },
    }
  );

  return res.json();
}

async function updateEmployeeRequired(id: any, payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employee-required/${id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function deleteEmployeeRequired(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/employee-required/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
}

export const employeeRequiredService = {
  createEmployeeRequired,
  getAllEmployeeRequireds,
  getSingleEmployeeRequired,
  updateEmployeeRequired,
  deleteEmployeeRequired,
};
