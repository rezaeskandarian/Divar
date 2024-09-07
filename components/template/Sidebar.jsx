
import styles from "./Sidebar.module.css";

const Sidebar = ({data}) => {

  return (
    <>
     <div className={styles.sidebar}>
        <h4>دسته ها </h4>
        <ul>
            {data?.data.map(i => (
                <li key={i._id}> 
                <img src={`${i.icon}.svg`} />
                <p>{i.name}</p>
                </li>
            ))}
        </ul>
     </div>
    </>
  );
};
export default Sidebar;
