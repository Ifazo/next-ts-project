import { db } from "@/db/script";

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const user = await db.user.findUnique({
    where: { email: data.email },
  });
  if (!user) {
    return new Response("User does not exist", { status: 400 });
  }
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
