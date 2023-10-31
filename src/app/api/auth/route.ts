import { db } from "@/db/script";
import jwt, { Secret } from "jsonwebtoken";

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!user) {
    return new Response("User does not exist", { status: 400 });
  }
  if (user.password !== data.password) {
    return new Response("Password is incorrect", { status: 400 });
  }
  const payload = { id: user.id, email: user.email, role: user.role };
  const secret = process.env.NEXTAUTH_SECRET as Secret;
  const token = jwt.sign(payload, secret, { expiresIn: "24h" });
  const response = new Response(JSON.stringify({ token }), {
    headers: { "content-type": "application/json" },
  });
  return response;
}
