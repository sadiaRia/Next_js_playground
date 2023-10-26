import React from "react";
import { useRouter } from "next/router";

function clientInnerpage(props) {
  let router = useRouter();

  function handleButtonLoader(item) {
    router.push({
      pathname: "/clients/[id]/[clientId]",
      query: { id: router?.query?.id, clientId: item },
    });

    // `/clients/${router?.query?.id}/${item}`);

    // router.push(`/clients/${router?.query?.id}/${item}`);
  }
  return (
    <div>
      <h1>HI from client {router?.query?.id}</h1>
      <br />
      <p>Client - {router?.query?.id}</p>
      <br />
      <button onClick={() => handleButtonLoader("maximus")}>Maximus</button>
      <br />
      <button onClick={() => handleButtonLoader("lumas")}>Lumas</button>
    </div>
  );
}

export default clientInnerpage;
