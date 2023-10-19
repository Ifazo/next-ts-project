import { db } from "@/db/script";

export async function GET(request: Request) {
    const products = await db.product.findMany();
    return new Response(JSON.stringify(products), {
      headers: { "content-type": "application/json" },
    });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
    const data = await request.json();
    console.log(data)
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const product = await db.product.create({
      data,
    });
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
