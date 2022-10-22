interface iTag {
    value: string;
}

interface iGenerateRandomColour {
    text: string;
    bg: string;
}



const Tag = ({ value }: iTag) => {
    return (<span className={`bg-blue-200 text-blue-600 dark:text-blue-100 dark:bg-blue-600 px-1 mx-1 rounded-md text-sm`}>{value}</span >)
}

export default Tag;