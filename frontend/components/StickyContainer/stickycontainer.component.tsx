interface iStickyContainer {
    children?: any;
}

const StickyContainer = ({ children }: iStickyContainer) => {
    return (
        <div className="sticky top-16 bg-white dark:bg-gray-900 rounded-md p-5">
            {children}
        </div>
    )
}

export default StickyContainer;