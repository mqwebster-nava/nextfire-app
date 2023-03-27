import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "mqwebster" },
        }}
      >
        <a>Marques's Profile</a>
      </Link>
    </div>
  );
}
