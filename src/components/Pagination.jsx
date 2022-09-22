import React from 'react';
import {NavLink, useParams} from "react-router-dom";

const Pagination = ({pageNumbers, setPage, page}) => {
    console.log(page);
    const {id} = useParams();
    const nextPage = () => {
        setPage(page + 1);
        console.log(pageNumbers);
    }
    return (
        <div>

            {
                pageNumbers.map((el, index) => <NavLink to={`simplepagination/${index + 1}`}
                                                        className={page === index + 1 ? 'page-selector active' : 'page-selector'}
                                                        onClick={() => setPage(index + 1)}>{el}</NavLink>)
            }

        </div>
    );
};

export default Pagination;
