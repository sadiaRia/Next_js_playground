import styles from "@/styles/Home.module.css";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hello from next js</h1>
      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
      </ul>
    </>
  );
}
