import {
    TOGGLE_SELECT_CELL,
    DESELECT_CELL,

    ADD_NEW_ROW,
    ADD_NEW_COLUMN
} from 'Constants';

import {
    createMap,
    createDependencies
} from 'Tools';

export const toggleSelectCell = (x, y) => (dispatch, getState) => {
    const { selectedSell } = getState().map;

    let newSelectSellValue;

    if (selectedSell && selectedSell.x === x && selectedSell.y === y) {
        newSelectSellValue = null;
    } else {
        newSelectSellValue = {x, y}
    }

    dispatch ({
        type: TOGGLE_SELECT_CELL,
        selectedSell: newSelectSellValue
    });
};

export const deselectCell = () => ({
    type: DESELECT_CELL
});

export const addNewRow = () => (dispatch, getState) => {
    const newH = getState().map.height + 1;
    const newW = getState().map.width;

    const { grid, coords } = createMap(newW, newH);
    const dependences = createDependencies(grid);

    dispatch ({
        type: ADD_NEW_ROW,
        grid,
        coords,
        dependences,
        height: newH
    });
};

export const addNewColumn = () => (dispatch, getState) => {
    const newH = getState().map.height;
    const newW = getState().map.width + 1;

    const { grid, coords } = createMap(newW, newH);
    const dependences = createDependencies(grid);

    dispatch ({
        type: ADD_NEW_COLUMN,
        grid,
        coords,
        dependences,
        width: newW
    });
};
