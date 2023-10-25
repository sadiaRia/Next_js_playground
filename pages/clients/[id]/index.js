import React from 'react';
import {useRouter} from "next/router"

function clientInnerpage(props) {
  const route = useRouter();
  return (
    <div>
      <h1>HI from client {route?.query?.id}</h1>
      <br/>
      <p>Client - {route?.query?.id}</p>
    </div>
  );
}

export default clientInnerpage;