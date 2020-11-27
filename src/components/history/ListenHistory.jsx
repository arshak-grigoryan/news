import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ListenHistory = () => {
    const history = useHistory();

    useEffect(() => {
      history.History((...args) => {
        console.log(...args);
        console.log(history.length);
      });
    }, []);
  
    return null;
}

export default ListenHistory