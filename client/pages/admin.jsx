import React, {useState, useEffect} from "react";

export default function Admin(props) {

  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    if(!inventory) fetch('/api/products').then(res => res.json()).then(res => {
      console.log(res);
    })
  })

  return (
    <h1>Hello</h1>
  )
}
