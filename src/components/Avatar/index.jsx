import styles from './Avatar.module.scss';

// eslint-disable-next-line react/prop-types
export function Avatar({hasBorder = true, src}) {
    return (
        <img
            // eslint-disable-next-line no-undef, react/prop-types
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            // eslint-disable-next-line react/prop-types
            src={src}
            alt="Profile Picture"
        />
    );
}