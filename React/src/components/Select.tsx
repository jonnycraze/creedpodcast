import style from './Select.module.scss';

interface Props {
    options: string[];
    onChange: any;
    label: string;
    [x:string]: any;
}

const Select:React.FC<Props> = ({options, onChange, label, ...rest}) => {
    return (
        <div>
            <small className={style.label}>{label}</small>
            <select data-testid="select" onChange={onChange} {...rest}>
                {options.map(o => (
                    <option data-testid={`option-${o}`} value={o} key={o}>{o}</option>
                ))}
            </select>
        </div>
    )
}

export default Select