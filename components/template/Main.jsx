import { sp } from "../../utils/date";

import styles from "./Main.module.css";
const Main = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        {data?.data.posts.map((i) => (
          <div key={i._id} className={styles.card}>
            <div className={styles.info}>
              <p>{i.options.title}</p>
              <div>
                <p>{sp(i.amount)}</p>
                <span>{i.options.city}</span>
              </div>
            </div>
            <img src={`${"http://localhost:3400/"}${i.images[0]}`}/>
          </div>
        ))}
      </div>
    </>
  );
};
export default Main;
