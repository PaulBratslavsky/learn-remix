export async function recommend(data, image) {

  const baseUrl = process.env.BASE_URL
  const query = `/api/recommendations`;

  const url = baseUrl + query;

  const hasImage = image._name === "" ? false : true;

  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  if (hasImage) formData.append('files.image', image, image.name);
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  return response.json();
}

