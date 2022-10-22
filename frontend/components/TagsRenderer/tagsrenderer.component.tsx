import Tag from "@components/Tag/tag.component";

interface iTagsRenderer {
    tags: string[];
}

const TagsRenderer = ({ tags }: iTagsRenderer) => (<>{tags.map(tag => <Tag key={tag} value={tag} />)}</>);

export default TagsRenderer;