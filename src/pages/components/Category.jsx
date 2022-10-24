import React from 'react';
import { useParams } from 'react-router-dom' 

function Category() {
    const {brand} = useParams();
    console.log(brand);

    return (
        <>
            <h1>{brand} Category Page</h1>
        </>
    );
}

export default Category;
