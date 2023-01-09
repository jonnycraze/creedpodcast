import style from './Link.module.scss';
import LinkProps from '../interfaces/link';

const Link:React.FC<LinkProps> = ({url, label, alt, children, ...rest}) => {
    const linkClass = alt ? style.linkAlternate : style.link;

    return (
        <a href={url} className={linkClass} {...rest}>
            {children && children}
            {label}
        </a>
    )
}

export default Link