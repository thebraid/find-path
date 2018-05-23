import {
    MAP_DEFAULT_WIDTH as W,
    MAP_DEFAULT_HEIGHT as H,

    TOGGLE_SELECT_CELL,
    DESELECT_CELL,

    ADD_NEW_ROW,
    ADD_NEW_COLUMN
} from 'Constants';

import {
    createMap,
    createDependencies
} from 'Tools';

const { grid, coords } = createMap(W, H);
const dependences = createDependencies(grid);

const initialState = {
    grid,
    coords,
    dependences,
    blockedCells: Object.create(null),
    startCell: null,
    endCell: null,
    selectedSell: null,
    width: W,
    height: H
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_ROW:
            return {
                ...state,
                grid: action.grid,
                coords: action.coords,
                dependences: action.dependences,
                height: action.height
            };

        case ADD_NEW_COLUMN:
            return {
                ...state,
                grid: action.grid,
                coords: action.coords,
                dependences: action.dependences,
                width: action.width
            };

        case TOGGLE_SELECT_CELL:
            return {
                ...state,
                selectedSell: action.selectedSell,
            };

        case DESELECT_CELL:
            return {
                ...state,
                selectedSell: null
            };

        default:
            return state
    }
}