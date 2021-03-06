import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { newUrl } from "../../store/actions";
import { getAllHistory } from '../../store/selectors';
import { getPathWithoutSlash } from './helpers';

const ListenHistory = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const path = location.pathname
  const { allHistory } = useSelector((state) => ( { allHistory: getAllHistory(state) } ))

  useEffect(() => {
    dispatch(newUrl(path))
  }, [dispatch, path]);

  console.log('ListenHistory')

  return (
    <div className='listenHistory' style={{width: "10%"}}>
      <ul>
        {
          allHistory.map((path,i) => {
            return <li key={i}>
              <Link to={path}>{getPathWithoutSlash(path)}</Link>
            </li>
          })
        }
      </ul>      
    </div>
  );
}

export default ListenHistory