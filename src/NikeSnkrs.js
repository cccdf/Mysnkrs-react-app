import React from 'react';

export default function NikeSnkrs(props) {
  let result = props.result;
  return <div className='result'>
      <a href={result.product_link} target='_blank'>{result.title}</a>
      <p>Price: {result.price}</p>
  </div>;
}