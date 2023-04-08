import Tag from "./Tag";
import datas from "../datas/logements";
import '../style/components/Tag.scss'

const tagGallery = datas.map((data) => {
    return (
        <Tag key={data.id} tags={data.tags} />
    )
})

function TagList () {
    return (
        <div>
            {tagGallery}
        </div>
    )
}

export default TagList