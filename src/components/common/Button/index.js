import React from 'react';

import './index.pcss';

const Button = ({text, className = '', highlight = false, onClick}) => {
    return (
        <div className={`button ${highlight ? 'button_highlight' : ''} ${className}`} onClick={onClick}>
            {text}
        </div>
    )
};

export default Button;