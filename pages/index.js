import Link from "next/link";

export default function Home() {
  return (

    <div>
      <h1>this is home page</h1>
      <div>
        <Link href="api/auth/Login">Login</Link>
      </div>
    </div>

  );
}
