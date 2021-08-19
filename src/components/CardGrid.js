import React, { useEffect, useState } from 'react';
import styles from './CardGrid.module.css';
import BioCard from './BioCard.js';

const CardGrid = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className={styles.grid}>
                {items.map((item, index) => {
                    return (
                        <BioCard 
                            key={index}
                            photo_url={item.photo_url}
                            name={item.name} 
                            title={item.title}
                            bio={item.bio}
                        />
                    )
                })}
            </div>
        )
    }
};

export default CardGrid;