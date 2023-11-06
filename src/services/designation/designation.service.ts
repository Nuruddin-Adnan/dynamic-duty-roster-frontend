async function createDesignation(payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/designations/create-designation`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function getAllDesignations(query: string = "") {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/designations/?${query}`,
    {
      cache: "no-store",
      next: { tags: ["designation"] },
    }
  );

  return res.json();
}

async function getSingleDesignation(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/designations/${id}`,
    {
      cache: "no-store",
      next: { tags: ["designation"] },
    }
  );

  return res.json();
}

async function updateDesignation(id: any, payload: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/designations/${id}`,
    {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function deleteDesignation(id: any) {
  const res = await fetch(
    `https://dynamic-duty-roster-backend.vercel.app/api/v1/designations/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.json();
}

export const designationService = {
  createDesignation,
  getAllDesignations,
  getSingleDesignation,
  updateDesignation,
  deleteDesignation,
};
