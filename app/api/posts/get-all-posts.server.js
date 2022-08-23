const qs = require('qs');

const params = qs.stringify({

  populate: {
    posts_in_group: {
      populate: {
        featuredImage: {
          populate: '*'
        }
      }
    }
  },


});

export async function getAllPosts() {
  const baseUrl = process.env.BASE_URL
  const query = `/api/post-groups/2?${params}`
  return await fetch(baseUrl + query)
}
