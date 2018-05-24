import React from 'react';

const Cell = ({children, value, x, y, isBlocked, isSelected, isStart, isEnd, onClick}) => {
    let resultClass = '';

    if (isStart) {
        resultClass = ' map__cell_start';
    } else if (isEnd) {
        resultClass = ' map__cell_end';
    } else if (isBlocked) {
        resultClass = ' map__cell_blocked'
    } else if (isSelected) {
        resultClass = ' map__cell_selected';
    }

    return (
        <div className={`map__cell${resultClass}`}
             onClick={onClick}
        >
            {children}
        </div>
    )
};

export default Cell;