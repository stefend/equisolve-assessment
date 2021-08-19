import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = props => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }
    
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    })
    
    // if (!props.show) {
    //     return null;
    // }

    return (
        <div className={`${styles.modal} ${props.show ? styles.show : ''}`} onClick={props.onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <div className={styles.content_wrapper}>
                    <h1 className={styles.name}>{props.name}</h1>
                    <h2 className={styles.title}>{props.title}</h2>
                    <div 
                        className={styles.bio}
                        dangerouslySetInnerHTML={{__html: props.bio}}
                    >    
                    </div>
                    <img 
                        className={styles.photo}
                        src={props.photo}
                        alt={props.name}
                    />
                </div>
                <i 
                    className={styles.close}
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}

export default Modal;