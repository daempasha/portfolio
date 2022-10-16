interface iStickyContainer {
    children?: any;
}

const StickyContainer = ({ children }: iStickyContainer) => {
    return (
        <div className="mx-auto w-fit md:w-full md:mx-2 md:sticky md:top-16 bg-white dark:bg-gray-900 rounded-md p-5">
            {children}
        </div>
    )
}

export default StickyContainer;