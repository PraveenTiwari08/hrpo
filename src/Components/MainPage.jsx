import React from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>YOUR FEET DESERVE THE BEST </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum
            quae quod, rerum cum officia, nostrum porro ipsam reprehenderit non
            excepturi? Sit aspernatur saepe, ab est id earum fugiat autem.
          </p>
          <div className={styles.buttons}>
            <button>Shop Now</button>
            <button className={styles.category}>Category</button>
          </div>

          <div className={styles.platform}>
            <p>Also Available on</p>
            <div className={styles.shoplogo}>
              <img src="/assets/amazon.jpg" alt="" />
              <img src="/assets/flipkart.jpg" alt="" />
            </div>
          </div>
        </div>


        <div className={styles.right}>
          <img src="/assets/shoe_image.png" alt="nothing" />
        </div>
      </div>
    </>
  );
};

export default MainPage;


// async function asyncFunction() {
//   console.log(1);
//  new Promise(() => console.log(2));
//  await new Promise((res) => {
//  setTimeout(() => console.log(3), 0);
//  res();
//   });
//  }
//  new Promise((res) => {
//  console.log(4);
//  async () => {
//  console.log(5);
//  await asyncFunction();
//  console.log(6);
//   };
//  res();
//  }).then(()=>console.log(7));
//  console.log(8); 

// import React from "react";
// const TestReact = () => {
// const [state, setState] = React.useState([]);
// console.log("react-component-rendered");
// fetchData().then((data) => {
// console.log("changing state");
// setState(7);
//  });
// console.log(state);
// setTimeout(() => {
// console.log("callback queue is done");
//  }, 0);
// React.useEffect(() => {
// console.log("useEffect completed");
// return () => {
// console.log("inside useEffect");
//  };
//  });
// console.log("jsx is rendered/completed");
// return (
// <div>
// <h1>hello</h1>
// <p>{state}</p>
// </div>
//  );
// };
// const fetchData = () => {
// return Promise.resolve("micro task completed");
// };