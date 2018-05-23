import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './index.pcss';

import Row from './Row';
import Cell from './Cell';
import { bindActionCreators } from 'redux';

import {
    toggleSelectCell,
    addNewRow,
    addNewColumn
} from 'Actions'


const mapStateToProps = ({map}) => ({
    grid: map.grid,
    coords: map.coords,
    selectedSell: map.selectedSell
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        toggleSelectCell,
        addNewRow,
        addNewColumn
    }, dispatch)
});

const Map = (props) => {
    const { grid, coords, selectedSell, actions } = props;
    const { toggleSelectCell, addNewRow, addNewColumn } = actions;

    return(
        <div className="map-wrap">
            <div className="map-wrap__left-panel">

            </div>
            <div className="map">
                <div className="map__row">

                </div>

                { grid.map((row, y) => {
                    const cells = row.map((cell, x) => (
                        <Cell
                            key={cell}
                            value={cell}
                            x={x}
                            y={y}
                            isBlocked={coords[cell].blocked}
                            isSelected={selectedSell && selectedSell.x === x && selectedSell.y === y}
                            onClick={() => toggleSelectCell(x, y)}
                        >
                            {''}
                        </Cell>
                    ));

                    return (
                        <Row key={y}>{cells}</Row>
                    )
                })}

                <div className="map__new-panel map__bottom-panel" onClick={() => addNewRow()}>
                    <i className="map__plus fa fa-plus"/>
                </div>
            </div>
            <div className="map__new-panel map-wrap__right-panel" onClick={() => addNewColumn()}>
                <i className="map__plus fa fa-plus"/>
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
