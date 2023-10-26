import React from "react";
import Link from "next/link";

function clientpage(props) {
  let clients = [
    { id: "01", name: "harry potter" },
    { id: "02", name: "Ron wisly" },
    { id: "03", name: "Hemaini grenger" },
  ];
  return (
    <div>
      <h1>from clients main page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default clientpage;

// /rsf
