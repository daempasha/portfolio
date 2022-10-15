import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "ta81b40z",
    dataset: "production",
    useCdn: true
})