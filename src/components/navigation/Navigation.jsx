import { Link } from 'react-router-dom';

import { SECTIONS } from '../../urls/';

import './navigation.scss';

const Navigation = () => {

    const menu = SECTIONS.map((name, i) => {
        return (
            <li key={i}>
                <Link to={`/${name}`}>{name}</Link>
            </li>
        )
    })

    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation