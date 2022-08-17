import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "e08bbc925ae64c8e3e62",
      clientSecret: "c07ac49e1ec87e7d799c49834cfaebcbd36ac81d",
    }),
  ],
});
