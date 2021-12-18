import React, { useState } from 'react';
import {Link, useNavigate, withRouter} from 'react-router-dom';
import axios from "axios";

const API = 'http://hts-team6.northeurope.cloudapp.azure.com:3000/';

const Theory = ({...props}) => {
    const [theoryList, setTheoryList] = useState([]);
    const [loadingList, setLoadingList] = useState(true);

    if (loadingList){
        setLoadingList(false);
        axios.get(`${API}theory/list`).then((r) => {
            console.log(r.data);
            setTheoryList(r.data);
        })
    }

    return (<div className="container-fluid">
        <div className="d-flex">
            {loadingList ? '' : theoryList.map((t) => (
                <div className={"card"} style={{margin: '0 2em'}}>
                    <div className="card-body">
                        <h5 className="title">{t.title}</h5>
                        <p className="card-text">
                            {t.content}
                        </p>
                        <Link to={"/exercise" }>{t._id}</Link>
                    </div>

                </div>
            ))}
        </div>
    </div>)
}

export default Theory;