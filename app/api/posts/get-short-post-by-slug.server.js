const qs = require('qs');

const params = (slug) => qs.stringify({
  filter: {
    where: {
      slug: slug
    }
  },
});

export async function getShortPostBySlug(slug) {
  console.log(slug, "slug fff")
  const baseUrl = process.env.BASE_URL
  const query = `/api/short-posts?${params(slug)}`
  console.log(baseUrl + query)
  return await fetch(baseUrl + query)
}
