import { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/cartSlice";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  const items = products.map((ele, index) => {
    const btnClickHandler = () => {
      dispatch(
        addItem({
          id: ele.id,
          image: ele.image,
          title: ele.title,
          price: ele.price,
        })
      );
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };

    return (
      <div key={index} className={styles.div}>
        <div style={{ padding: "5px" }}>
          <img src={ele.image} alt="img" width="150" height="170"></img>
          <div className={styles.card}>
            <h5>{ele.title}</h5>
          </div>
          <div>
            <h5>Rating : {ele.rating.rate}</h5>
          </div>
          <div>
            <h5>price : $ {ele.price}</h5>
          </div>
        </div>
        <div>
          <button className={styles.button} onClick={btnClickHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);

  return (
    <>
      {showAlert && (
        <div
          className={`alert alert-success mt-3 ${styles.alert}`}
          role="alert"
        >
          Item added to cart!
        </div>
      )}
      <div className={styles.container}>{items}</div>
    </>
  );
};

export default Home;
