import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './index.pcss';
import Button from 'Components/common/Button'

import {
    setNewStart,
    setNewEnd
} from 'Actions';

const mapStateToProps = ({ map }) => ({
    selectedSell: map.selectedSell,
    start: map.start,
    end: map.end,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        setNewStart,
        setNewEnd
    }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class Sidebar extends Component {
    render() {
        const { selectedSell, start, end, actions } = this.props;
        const { setNewStart, setNewEnd } = actions;

        return (
            <div id="sidebar" className="sidebar">
                <div className="sidebar__actions">
                    <div className="sidebar__common-actions">
                        <Button text="Разблокировать все ячейки" onClick={()=>{}} />
                        <Button text="Заблокировать случайные N клеток" onClick={()=>{}} />
                        <Button text="Установить кол-во столбцов по умолчанию" onClick={()=>{}} />
                        <Button text="Установить кол-во строк по умолчанию" onClick={()=>{}} />
                    </div>

                    { selectedSell ?
                        <div className="sidebar__cell-actions">
                            <Button text="Начало" onClick={()=>setNewStart()} />
                            <Button text="Конец" onClick={()=>setNewEnd()} />
                            <Button text="Заблокировать" onClick={()=>{}} />
                            <Button text="Разблокировать" onClick={()=>{}} />
                        </div>
                        :
                        null
                    }

                </div>
                <Button
                    text="Найти путь"
                    highlight
                    isDisabled={!(start && end)}
                    onClick={()=>{}}
                />
            </div>
        )
    }
}

export default Sidebar;