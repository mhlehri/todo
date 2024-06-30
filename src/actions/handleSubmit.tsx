"use server";
export async function handleSubmit(formData: FormData) {
  console.log(formData);
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };
  return data;
}
