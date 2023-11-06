async function createDepartment(payload: any) {
  const res = await fetch(
    `http://localhost:5000/api/v1/departments/create-department`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}

async function getAllDepartments(query: string = "") {
  const res = await fetch(
    `http://localhost:5000/api/v1/departments/?${query}`,
    {
      cache: "no-store",
      next: { tags: ["employee"] },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Fail to fetch data");
  }

  return res.json();
}

async function getSingleDepartment(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/departments/${id}`, {
    cache: "no-store",
    next: { tags: ["employee"] },
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }
  return res.json();
}

async function updateDepartment(id: any, payload: any) {
  const res = await fetch(`http://localhost:5000/api/v1/departments/${id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to update data");
  }

  return res.json();
}

async function deleteDepartment(id: any) {
  const res = await fetch(`http://localhost:5000/api/v1/departments/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  return res.json();
}

export const departmentService = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
