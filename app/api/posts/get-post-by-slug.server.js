const qs = require('qs');

const params = qs.stringify({

  populate: {
    author: {
      populate: 'avatar'
    },
    
    featuredImage: {
      populate: '*'
    },

    Components: {
      populate: '*'
    }
  },


});

export async function getPostBySlug(slug) {
  const baseUrl = process.env.BASE_URL
  const query = `/api/post/find-by-slug/${slug}?${params}`
  return await fetch(baseUrl + query)
}
