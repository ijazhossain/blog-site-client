import { cookies } from "next/headers";
export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      // console.log(cookieStore.toString());
      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session.data===null) {
        return { data: null, error: { message: "Session is missing" } };
      }
      return { data: session, error: null };
    } catch (err) {
      console.log(err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
