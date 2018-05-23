import React from 'react';

const Cell = ({children, value, x, y, isBlocked, isSelected, onClick}) => {
    const blockedClass = isBlocked ? ' map__cell_blocked': '';
    const selectedClass = isSelected ? ' map__cell_selected': '';

    return (
        <div className={`map__cell${blockedClass}${selectedClass}`}
             onClick={onClick}
        >
            {children}
        </div>
    )
};

export default Cell;