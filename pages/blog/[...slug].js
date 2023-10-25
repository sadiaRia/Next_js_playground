import React from 'react';
import {useRouter} from "next/router";
function slug(props) {
  const route = useRouter();
  console.log(route.query);
  return (
    <div>
      <h1>slug</h1>
     {route?.query?.slug?.map((number) =>  
      <li key={number.toString()}>
      {number}
    </li>
     )}
    </div>
  );
}

export default slug;