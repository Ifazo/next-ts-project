import { db } from "@/db/script";
import jwt, { Secret } from "jsonwebtoken";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data)
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const decodeToken = jwt.decode(data);
  const { email } = decodeToken as { email: string };
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return new Response("Unauthorized", { status: 400 });
  const payload = { id: user.id, email: user.email, role: user.role };
  const secret = process.env.NEXTAUTH_SECRET as Secret;
  const token = jwt.sign(payload, secret, { expiresIn: "24h" });
  console.log(token)
  const response = new Response(JSON.stringify({ token }), {
    headers: { "content-type": "application/json" },
  });
  return response;
}
