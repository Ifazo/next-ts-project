"use server";
export const refreshToken = async (token: string) => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/token`, {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      return data;
  } catch (error) {
    console.log(error);
  }
};
