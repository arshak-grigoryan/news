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
        <div className='newsItemIntro'>
            { imgUrl && <img src={imgUrl} alt='img'onClick={onNewsItemIntroClick}/> }
            <h2 onClick={onNewsItemIntroClick}>{title}</h2>
        </div>
    )
}

export default NewsItemIntro