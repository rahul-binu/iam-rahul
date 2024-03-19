import React, { useEffect, useState } from 'react';
import styles from '../../styles/WorksPage.module.css';

const WorksPage = () => {

    const works = [
        {
            title: 'Work 1',
            description: 'Description of work 1',
            imageUrl: '/path/to/work1-image.jpg',
        },
        {
            title: 'Work 2',
            description: 'Description of work 2',
            imageUrl: '/path/to/work2-image.jpg',
        }, {
            title: 'Work 3',
            description: 'Description of work 3',
            imageUrl: '/path/to/work2-image.jpg',
        },
    ];

    return (
        <div>
            <h1 className='m-5'>My Works</h1>
            {/* <hr /> */}

            <div className="row mt-3" id={styles.row}>
                {works.map((work, index) => (
                    <div className="col-lg-4 md-6 sm-12 mb-5 mt-2" key={index} id={styles.card_col}>
                        <div className="card p-5" id={styles.card}>
                            <img src={work.imageUrl} alt={work.title} />
                            <h2>{work.title}</h2>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorksPage;
