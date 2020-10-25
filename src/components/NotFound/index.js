import React, { Fragment } from 'react';
import SearchMessage from './../Common/SearchMessage';

const NotFound = () => (
    <Fragment>
        <SearchMessage text="404: URL not Found" type="back" />        
    </Fragment>
);

NotFound.displayName = 'NotFound';

export default NotFound;