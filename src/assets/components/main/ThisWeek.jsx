import React from "react";
import styles from '../../styles/ThisWeek.module.css'

const ThisWeek = () => {

    const weekDatas = [
        {
            title: "Happy",
            description: "happier than ever",
            link: "No link"
        }, {
            title: "day 2 ",
            description: "happier than ever",
            link: "No link"
        }, {
            title: "day 3",
            description: "happier than ever",
            link: "No link"
        }, {
            title: "day 4 ",
            description: "happier than ever",
            link: "No link"
        }, {
            title: "day 5",
            description: "happier than ever",
            link: "No link"
        }
    ]

    return (
        <div className="container">
            <div className="row m-5 mb-1">
                <h1>
                    What's New
                </h1>
            </div>

            <div className="row">
                {weekDatas.map((weekData, index) => {
                    // using return becouse the arrow function 
                    //to avoid return use () insted of {}
                    return (
                        <div className="col-lg-3 md-3 sm-6 mb-5" id={styles.card_col} key={index}>
                            <div className={`card p-4 ${styles.card}`}>
                                <h3>{weekData.title}</h3>
                                <p>{weekData.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default ThisWeek;
