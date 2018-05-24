import React from 'react';

import './index.pcss';

const Button = ({text, className = '', highlight = false, isDisabled, onClick}) => {
    const highlightClass = highlight ? ' button_highlight' : '';
    const disabledClass = isDisabled ? ' button_disabled': '';


    return (
        <div className={`button${highlightClass}${disabledClass} ${className}`}
             onClick={() => {
                 if (isDisabled) return;

                 onClick();
             }}
        >
            {text}
        </div>
    )
};

export default Button;