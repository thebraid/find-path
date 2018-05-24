import {
    TOGGLE_SELECT_CELL,
    DESELECT_CELL,

    ADD_NEW_ROW,
    ADD_NEW_COLUMN,

    SET_NEW_START,
    SET_NEW_END
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
    const dependencies = createDependencies(grid);

    dispatch ({
        type: ADD_NEW_ROW,
        grid,
        coords,
        dependencies,
        height: newH
    });
};

export const addNewColumn = () => (dispatch, getState) => {
    const newH = getState().map.height;
    const newW = getState().map.width + 1;

    const { grid, coords } = createMap(newW, newH);
    const dependencies = createDependencies(grid);

    dispatch ({
        type: ADD_NEW_COLUMN,
        grid,
        coords,
        dependencies,
        width: newW
    });
};


export const setNewStart = () => (dispatch, getState) => {
    const { selectedSell } = getState().map;

    dispatch ({
        type: SET_NEW_START,
        start: selectedSell
    });
};

export const setNewEnd = () => (dispatch, getState) => {
    const { selectedSell } = getState().map;

    dispatch ({
        type: SET_NEW_END,
        end: selectedSell
    });
};
