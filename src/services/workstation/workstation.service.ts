async function createWorkstation(payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/workstations/create-workstation`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function getAllWorkstations(query: string = "") {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/workstations/?${query}`,
    {
      cache: "no-store",
      next: { tags: ["workstation"] },
    }
  );

  return res.json();
}

async function getSingleWorkstation(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/workstations/${id}`,
    {
      cache: "no-store",
      next: { tags: ["workstation"] },
    }
  );

  return res.json();
}

async function updateWorkstation(id: any, payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/workstations/${id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function deleteWorkstation(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/workstations/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
}

export const workstationService = {
  createWorkstation,
  getAllWorkstations,
  getSingleWorkstation,
  updateWorkstation,
  deleteWorkstation,
};
