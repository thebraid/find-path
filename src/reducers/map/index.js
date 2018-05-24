import {
    MAP_DEFAULT_WIDTH as W,
    MAP_DEFAULT_HEIGHT as H,

    TOGGLE_SELECT_CELL,
    DESELECT_CELL,

    ADD_NEW_ROW,
    ADD_NEW_COLUMN,

    SET_NEW_START,
    SET_NEW_END
} from 'Constants';

import {
    createMap,
    createDependencies,
    createMatrix,
    fillMatrix,
    // findPath
} from 'Tools';

const { grid, coords } = createMap(W, H);
const dependencies = createDependencies(grid);

const countPoints = W * H;
const matrix = createMatrix(dependencies, countPoints);
const resultMatrix = fillMatrix(matrix, countPoints);
//
// console.log(resultMatrix);

const initialState = {
    grid,
    coords,
    dependencies,
    blockedCells: Object.create(null),
    start: null,
    end: null,
    selectedSell: null,
    width: W,
    height: H,
    // paths,
    matrix: resultMatrix,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_ROW:
            return {
                ...state,
                grid: action.grid,
                coords: action.coords,
                dependencies: action.dependencies,
                height: action.height
            };

        case ADD_NEW_COLUMN:
            return {
                ...state,
                grid: action.grid,
                coords: action.coords,
                dependencies: action.dependencies,
                width: action.width
            };

        case SET_NEW_START:
            return {
                ...state,
                start: action.start,
                selectedSell: null
            };

        case SET_NEW_END:
            return {
                ...state,
                end: action.end,
                selectedSell: null
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