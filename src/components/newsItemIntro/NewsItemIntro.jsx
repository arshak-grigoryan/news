import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import { newNewsItem } from "../../store/actions";

import './newsItemIntro.scss';

const NewsItemIntro = ({
    id,
    title,
    imgUrl,
    text,
    section
}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const onNewsItemIntroClick = () => {
        dispatch(newNewsItem({id, title, imgUrl, text}))
        history.push(`${section}/${id}`)
    }

    return (
        <div className='newsItemIntro' onClick={onNewsItemIntroClick}>
            {
                imgUrl && <img src={imgUrl} alt='img'/>
            }
            <h2>{title}</h2>
        </div>
    )
}

export default NewsItemIntro