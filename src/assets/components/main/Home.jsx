import React from "react";
import styles from '../../styles/Home.module.css';

const Home = () => {
    return (
        <div className="container">
                        <div className="row mt-4">
                <div className="col">
                    <img id={styles.my_img}
                        src="images/2.jpg" alt="" />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <img id={styles.my_img}
                        src="images/ajySelfyTest.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
