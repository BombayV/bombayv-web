import { serverSupabaseUser } from "#supabase/server";

const data = [
  {
    id: 1,
    title: "Hello World",
    email: 'aceptaosrp@gmail.com'
  },
  {
    id: 2,
    title: "Foo Bar",
    email: 'aceptaosrp@gmail.com'
  },
  {
    id: 3,
    title: "Next.js",
    email: 'somerandom@gmail.com'
  }
]

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    })
  }

  const { email } = user;
  const posts = data.filter(post => post.email === email);
  return posts;
})