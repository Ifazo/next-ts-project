import { withAuth } from "next-auth/middleware";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    jwt: { decode: authOptions.jwt?.decode },
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/dashboard", "/profile"] };
