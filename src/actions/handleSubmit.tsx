"use server";
export async function handleAddTodo(formData: FormData) {
  console.log(formData);
  const id = Math.random().toString(36).substring(2, 6);
  const data = {
    id,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };
  return data;
}

export async function handleUpdateTodo(formData: FormData) {
  console.log(formData);
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };
  return data;
}
