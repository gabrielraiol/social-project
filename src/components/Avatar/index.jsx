import styles from './Avatar.module.scss';

export function Avatar(props) {
    return (
        <img
            // eslint-disable-next-line no-undef, react/prop-types
            className={styles.profile__avatar}
            // eslint-disable-next-line react/prop-types
            src={props.src}
            alt="Profile Picture"
        />
    );
}