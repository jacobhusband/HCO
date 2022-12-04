import React, {useRef, useState, useEffect} from "react";
import Sofas from "../components/sofas";
import Mattresses from "../components/mattresses";
import Tables from "../components/tables";

export default function Admin(props) {

  const [inventory, setInventory] = useState(null);
  const [view, setView] = useState('sofas');

  useEffect(() => {
    if(!inventory) fetch('/api/products').then(res => res.json()).then(res => {
      setInventory(res);
    })
  })

  const sofas = (inventory) ? inventory[0] : null;
  const mattresses = (inventory) ? inventory[1] : null;
  const tables = (inventory) ? inventory[2] : null;

  const sofasClassName = (view === "sofas") ? "sofas" : "sofas hidden";
  const mattressesClassName = (view === "mattresses") ? "mattresses" : "mattresses hidden";
  const tablesClassName = (view === "tables") ? "tables" : "tables hidden";

  return (
    <div className="admin panel col" data-view={view}>
      <h1 className="text-align-center">ADMIN</h1>
      <div className="categories row row-ud-center row-space-between">
        <a data-link="sofas" onClick={() => {setView('sofas')}}>Sofas</a>
        <a data-link="mattresses" onClick={() => {setView('mattresses')}} className="text-align-center">Mattresses</a>
        <a data-link="tables" onClick={() => {setView('tables')}} className="text-align-right">Tables</a>
      </div>
      <div className="content">
        <Sofas sofas={sofas} className={sofasClassName}/>
        <Mattresses mattresses={mattresses} className={mattressesClassName}/>
        <Tables tables={tables} className={tablesClassName}/>
      </div>
      <div className="add item row shadow row-rl-center">
        <p className="plus center">+</p>
      </div>
    </div>
  )
}
