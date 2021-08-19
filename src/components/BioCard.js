import React, { useState } from 'react';
import styles from './BioCard.module.css';
import Modal from './Modal.js';

const BioCard = props => {
    const [show, setShow] = useState(false);

    const name = props.name;
    const title = props.title;
    const bio = props.bio;
    const photo = props.photo_url;
    return (
        <div className={styles.card}>
            <img 
                src={photo} 
                alt={name}
            />
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <h6 className={styles.title}>{title}</h6>
                <button 
                    className={styles.link} 
                    onClick={ () => setShow(true) }
                    tabIndex={0}
                >
                    View Bio
                </button>
            </div>
            <Modal 
                name={name}
                title={title}
                bio={bio}
                photo={photo}
                show={show}
                onClose={() => setShow(false)}
            />
        </div>
    )
}

export default BioCard;