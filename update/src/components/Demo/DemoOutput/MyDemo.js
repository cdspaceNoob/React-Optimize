import React from 'react';

const MyDemo = (props) => {
    console.log('MyDemo is running');

    return (
        <p>Is this re-rendering?</p>
    );
};

export default React.memo(MyDemo);