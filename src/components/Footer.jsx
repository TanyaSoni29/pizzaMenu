import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    // React.createElement("footer", null, "We're currently open!")
    <footer className="footer">
     {isOpen ? (
      <div className="order">
        <p>We're Open Untill {closeHour}:00, Come Visit Us or Order Online.</p>
        <button className="btn">Order</button>
      </div>
     ) : (
      <p>We're Happy to have you in between {openHour}:00 and {closeHour}:00.</p>
     )}
    </footer>
  );
}

export default Footer;

//Conditional rendering with Multiple return 

// function Footer() {
// const hour = new Date().getHour();
// const openHour = 10;
// const closeHour = 22;
// const isOpen = hour >= openHour && hour <= closeHour
// if (isOpen) {
// return (<p>
// We're are happy to have u in between {openHour}:00 and {closeHour}:00 
//</p>)} 
// return (  <div className="order">
//   <p>We're Open Untill {closeHour}:00, Come Visit Us or Order Online.</p>
//   <button className="btn">Order</button>
// </div>
// )
// }
// this early return is more beneficial when we want to render complete component rendering conditionally not when we render some piece of jsx only