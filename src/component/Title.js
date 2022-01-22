import React from 'react';
import { useState } from 'react';

export default function Title(props) {


  // <Title mode={ndark}
  return (
 <>   
 <div className="container">
      <h1 className={` mx-10 my-20 text-${props.mode==="light"?"dark":"light"}`}>This is page logo</h1>
      </div>
    </>
  );
}


