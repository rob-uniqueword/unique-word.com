import translationStyles from '../styles/translation.module.css'

export default function Translation({ children, translation }) {
    return (
        <span className={translationStyles.translated}>{children}
            <span className={translationStyles.translation}>{translation}</span>
        </span>
    );
};