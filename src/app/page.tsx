import authenticate from "@/lib/actions/authorization/authenticate";

export default async function Home() {
  const [err, user] = await authenticate();

  return <h1>User: {user?.username}</h1>;
}
