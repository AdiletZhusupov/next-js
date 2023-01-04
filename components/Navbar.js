import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  console.log("session => ", session);
  console.log("status => ", status);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && status === "loading" ? "loading" : "loaded"}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/auth/blog">Blog</Link>
        </li>

        {status == "unauthenticated" && !session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn();
                //signIn("github");
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
