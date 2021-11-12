import React, { useState } from 'react'
import PropTypes from "prop-types"

import * as styles from './reactions.module.scss'
import stopwatch from '../../../images/stopwatch.svg'

const Reactions = ({ items }) => {
    const [limit, setLimit] = useState(() => (items.length > 3) ? 3 : items.length);
    const [counter, setCounter] = useState(items.length);
    const [newComment, setNewComment] = useState('');

    const title = 'reacties';
    const commentHoldPlace = 'Plaats een reactie';
    const loadMore = 'Laad meer reacties';

    const userComment = {
        user: 'Peter',
        date: 'now',
        comment: newComment,
    }

    const loadMoreHandler = () => {
        setLimit(items.length);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        items.push(userComment);
        if (limit === counter) {
            setLimit((old) => old + 1);
        }
        setCounter(items.length);
    }

    return <>
        <div className={styles.content}>
            <h1 className={styles.title}><span className={styles.qtd}>{counter}</span> {title}</h1>
            <form onSubmit={onFormSubmit}>
                <input className={`${styles.input}`} type="text" placeholder={commentHoldPlace} onChange={event => setNewComment(event.target.value)} />
            </form>
            {items.slice(0, limit).map(({ user, date, comment }, index) => (
                <div key={`reaction__${index}`} className={styles.reaction}>
                    <div className={styles.reaction__info}>
                        <p className={styles.reaction__info__user}>{user}</p>
                        <img className={styles.reaction__info__icon} alt='stopwatch' style={{ width: '16px' }} src={stopwatch} />
                        <p className={styles.reaction__info__date}>{date}</p>
                    </div>
                    <p className={styles.reaction__comment}>{comment}</p>
                </div>
            ))}
            <div className={styles.loadMore}>
                {(limit < items.length) && <button className={`${styles.loadMore__button}`} onClick={() => loadMoreHandler()}>{loadMore}</button>}
            </div>
        </div>
    </>
}

const reactionsPropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        user: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })).isRequired
}

Reactions.propTypes = reactionsPropTypes

export default Reactions