import { db } from "@/db/script";

export async function GET(request: Request, {params}: {params: {id: string}}) {
    const product = await db.product.findUnique({
        where: { id: params.id },
    });
    if (!product) {
        return new Response("Not found", { status: 404 });
    }
    return new Response(JSON.stringify(product), {
        headers: { "content-type": "application/json" },
    });
}