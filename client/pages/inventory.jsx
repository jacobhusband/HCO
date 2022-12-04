import React, {useState, useEffect} from 'react';
import Sofas from '../components/sofas';
import Mattresses from '../components/mattresses';
import Tables from '../components/tables';

export default function Inventory() {

  const [inventory, setInventory] = useState(null);
  const [view, setView] = useState('sofas');

  useEffect(() => {
    if(!inventory) fetch('/api/products').then(res => res.json()).then(res => {
      setInventory(res);
    }).catch(err => console.log(err));
  })

  const sofas = (inventory) ? inventory[0] : null;
  const mattresses = (inventory) ? inventory[1] : null;
  const tables = (inventory) ? inventory[2] : null;

  const sofasClassName = (view === "sofas") ? "sofas" : "sofas hidden";
  const mattressesClassName = (view === "mattresses") ? "mattresses" : "mattresses hidden";
  const tablesClassName = (view === "tables") ? "tables" : "tables hidden";

  return (
    <div data-view="inventory" data-subview={view}>
      <h1 className="text-align-center">Inventory</h1>
      <div className="categories flex row-ud-center row-space-between">
        <a data-link="sofas" onClick={() => {setView('sofas')}}>Sofas</a>
        <a data-link="mattresses" onClick={() => {setView('mattresses')}} className="text-align-center">Mattresses</a>
        <a data-link="tables" onClick={() => {setView('tables')}}className="text-align-right">Tables</a>
      </div>
      <div className="products">
        <Sofas className={sofasClassName} sofas={sofas}/>
        <Mattresses className={mattressesClassName} mattresses={mattresses}/>
        <Tables className={tablesClassName} tables={tables}/>
      </div>
    </div>
  )
}
