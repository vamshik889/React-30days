import React, { useEffect, useState } from 'react'

const Total = ({ items }) => {
  const [sum, setSum] = useState(null);

  useEffect(() => {
    const calc = items.reduce((acc, cur) => acc + cur.price*cur.quantity, 0);

    setSum(calc);
    console.log(calc, "updated total in useEffect");
  }, [items]);

  return (
    <div>
      <h3>{`Total of all items: ${sum}`}</h3>
    </div>
  );
};

export default Total;
