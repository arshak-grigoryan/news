import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ListenHistory = () => {
    const history = useHistory();

    console.log(history, 'live')
  
    return <div></div>;
}

export default ListenHistory