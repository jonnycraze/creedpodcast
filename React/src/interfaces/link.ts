interface LinkProps {
    url: string;
    label: string;
    alt?: boolean,
    // All other props (this supports ...rest without prop errors in the parent)
    [x:string]: any;

}

export default LinkProps;