import React from 'react';
import {useRouter} from "next/router"

function clientInnerpage(props) {
  const route = useRouter();
  return (
    <div>
      <h1>Client - {route?.query?.id}</h1>
      <br/>
      <p>client specific page ID = {route?.query?.clientId}</p>
    </div>
  );
}

export default clientInnerpage;