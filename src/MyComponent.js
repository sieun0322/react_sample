import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = props =>{
    const{ name, children } = props;
    return <div>컴포넌트{name}<br/>
    children 값은 {children}
    </div>;
};
MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes = {
    name: PropTypes.string
};
export default MyComponent;