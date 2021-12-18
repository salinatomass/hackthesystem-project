import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const API = 'http://hts-team6.northeurope.cloudapp.azure.com:3000/';

const Exercise = ({...props}) => {
    const [exerciseList, setExerciseList] = useState([]);
    const [loadingList, setLoadingList] = useState(true);

    if (loadingList){
        setLoadingList(false);
        axios.get(`${API}exercise/list`).then((r) => {
            console.log(r.data);
            setExerciseList(r.data);
        })
    }

    return (<div className="container-fluid">
        <div className="d-flex">
            {loadingList ? '' : exerciseList.map((t) => (
                <div className={"card"} style={{margin: '0 2em'}}>
                    <div className="card-body">
                        <h5 className="title">{t.title}</h5>
                        <p className="card-text">
                            {t.description}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    </div>)
}

export default Exercise;