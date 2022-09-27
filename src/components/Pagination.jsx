import React from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";

const Pagination = ({pageNumbers, setPage, page}) => {
    console.log(page);
    const {id} = useParams();
    const paa = useLocation();
    console.log(paa.pathname);

    return (
        <div>
            {
                // paa.pathname === '/simplepagination/'? console.log(true) : 's'
            }'
            {
                pageNumbers.map((el, index) => <NavLink to={`/simplepagination/${index + 1}`}
                                                        className={paa.pathname === '/simplepagination/' || page === index + 1 ? 'page-selector active' : 'page-selector'}
                                                        onClick={() => setPage(index + 1)}>{el}</NavLink>)
            }

        </div>
    );
};

export default Pagination;
