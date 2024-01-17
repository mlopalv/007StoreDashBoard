import React from 'react';
import LastProductInDb from './LastProductInDb';
import ProductsByCategory from './ProductsByCategory';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last product in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <ProductsByCategory />

        </div>
    )
}

export default ContentRowCenter;