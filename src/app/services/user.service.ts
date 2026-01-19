import { env } from "@/env";
import { cookies } from "next/headers";
const AUTH_URL = env.AUTH_URL;
// console.log({AUTH_URL});
export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      //   console.log(cookieStore.toString());
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session?.data === null) {
        return { data: null, error: { message: "Session is missing" } };
      }
      return { data: session, error: null };
    } catch (err) {
      console.log(err);
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};
