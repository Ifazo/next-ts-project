import { db } from "@/db/script";

export async function GET() {
  const user = await db.user.findMany();
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
    const user = await db.user.create({
        data: await request.json(),
    });
    return new Response(JSON.stringify(user), {
        headers: { "content-type": "application/json" },
    });
}
