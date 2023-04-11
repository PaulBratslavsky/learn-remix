const qs = require('qs');

const params = qs.stringify({ populate: "*"});

export async function getAllShortPosts() {
  const baseUrl = process.env.BASE_URL
  const query = `/api/short-posts?${params}`
  return await fetch(baseUrl + query)
}
