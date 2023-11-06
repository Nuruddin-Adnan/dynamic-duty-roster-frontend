async function createDesignation(payload: any) {
  const res = await fetch(
    `http://localhost:5000/api/v1/designations/create-designation`,
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
    `http://localhost:5000/api/v1/designations/?${query}`,
    {
      cache: "no-store",
      next: { tags: ["designation"] },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Fail to fetch data");
  }

  return res.json();
}

async function getSingleDesignation(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/designations/${id}`, {
    cache: "no-store",
    next: { tags: ["designation"] },
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}

async function updateDesignation(id: any, payload: any) {
  const res = await fetch(`http://localhost:5000/api/v1/designations/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  return res.json();
}

async function deleteDesignation(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/designations/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  return res.json();
}

export const designationService = {
  createDesignation,
  getAllDesignations,
  getSingleDesignation,
  updateDesignation,
  deleteDesignation,
};
