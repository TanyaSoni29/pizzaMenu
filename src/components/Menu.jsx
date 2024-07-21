import React from "react";
import { pizzaData } from "../data";

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 && (
        <>
          <p className="menu-p">
            Authentic Indian Cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic , all delicious.{" "}
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <li className={`pizza ${pizza.soldOut? "sold-out" : ""}`}>
                <img src={pizza.photoName} alt={pizza.name} loading="lazy" />
                <div>
                  <h3>{pizza.name}</h3>
                  <p>{pizza.ingredients}</p>
                  {/* {pizza.soldOut ? <span>SOLD OUT</span> : <span>{pizza.price}</span>} this is another way but below way is more clean as we know we need one span */}
                  <span>{pizza.soldOut? "SOLD OUT" : pizza.price}</span>
                </div>
              </li>
              // better to make component pizza there u can also use conditional multiple rendering if(pizza.soldOut) return null like this
            ))}
          </ul>
        </>
      )}

      {/* {
        pizzaData.length> 0 ? ( <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <li className="pizza">
              <img src={pizza.photoName} alt={pizza.name} loading="lazy" />
              <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price}</span>
              </div>
            </li>
          ))}
        </ul>) : null (in place of null we can display Another Message in writing Jsx)
      } */}
    </div>
  );
}

export default Menu;

// if we simply apply pizzaData && then ul will be render still pizzaData is an empty Array so we should write that condition where this ul will not render for that we should take care the exprresion would ressolve in false or true value

// if jsx part of any component is ver large then we can take that jsx part into new component and there we can render that new component and the variables that are using in that jsx part we can pass that variables as props in that new component

// React never render true and false value on ui but it render 0 value if we simply compare PizzaData.lenght then this would result in zero in case of empty array but when we do comparison then it will result in true and false and it would never render in Ui.

// react fragment <></> this is used to group two element without disturbing the tree and when we need to add key in react fragment then we use this fragment like this <React.Fragment></React.Fragment> now here we can add key
