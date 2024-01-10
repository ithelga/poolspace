import React from 'react';

const FondBoard = ({ fond, particips, profits }) => {
    return (
        <div className={styles.square} onClick={() => console.log(`${fond.name} clicked!`)}>
            <img
                src={fond.id === 6 ? "/icon-big-pif.png" : `/fond-${fond.id}.png`}
                alt="Project Icon"
                className={styles.icon}
            />
            <div className={styles.fondTitle}>
                <strong>{fond.name}</strong>
            </div>
            <div className={styles.fondInfo}>
                <img src="/icon-participants.png" alt="Participants Icon" className={styles.smallIcon} /> {particips[fond.id - 1]}  участников
            </div>
            <div className={styles.fondInfo}>
                <img src="/icon-profits.png" alt="Profits Icon" className={styles.smallIcon} /> {profits[fond.id - 1]} годовых
            </div>
            <div className={styles.fondInfo}>
                <img src="/icon-founder.png" alt="Founder Icon" className={styles.smallIcon} /> {fond.founderName} {fond.founderSurname}
            </div>
        </div>
    );
};

export default FondBoard;
