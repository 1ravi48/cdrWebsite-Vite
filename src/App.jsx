import styles from "./App.module.css";

import Nav from "./Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <p className={styles.para}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea quas
        placeat tempore? Dolores dolore natus veritatis in? Aspernatur,
        voluptate! Esse voluptas debitis perferendis odit velit earum eligendi
        quam tempora?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ea quas
        placeat tempore? Dolores dolore natus veritatis in? Aspernatur,
        voluptate! Esse voluptas debitis perferendis odit velit earum eligendi
        quam tempora?
      </p>
    </>
  );
}

export default App;
