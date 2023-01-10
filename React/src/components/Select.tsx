import style from './Select.module.scss';

interface Props {
    options: [];
    onChange: any;
    label: string;
    [x:string]: any;
}

const Select:React.FC<Props> = ({options, onChange, label, ...rest}) => {
    return (
        <div>
            <small className={style.label}>{label}</small>
            <select onChange={onChange} {...rest}>
                {options.map(o => (
                    <option value={o} key={o}>{o}</option>
                ))}
            </select>
        </div>
    )
}

export default Select