import styles from "@/styles/Home.module.css";

import Link from "next/link";
export default function Home(props) {
  const { products } = props;

  return (
    <>
      <h1>Hello from next js</h1>
      {/* 
      //file base routing
      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
      </ul> */}
      {/* page pre-rendering & data fetching */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product?.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1" },
        { id: "p2", title: "Product 2" },
      ],
    },
  };
}
