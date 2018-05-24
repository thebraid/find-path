import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'normalize.css';
import './vars.pcss';
import './index.pcss';

import Sidebar from 'Components/Sidebar';
import Content from 'Components/Content';

import { deselectCell } from "Actions";


const mapStateToProps = ({map}) => ({
    selectedSell: map.selectedSell,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        deselectCell,
    }, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    componentDidMount() {
        document.addEventListener('click', this.hideSelectCell);
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    hideSelectCell = (e) => {
        const { selectedSell, actions } = this.props;
        const target = e.target;

        // если нет выбранных, игнорируем вызов
        if (!selectedSell) return;

        // игнорируем клик по панелям добавления ячеек
        if (
            target.classList.contains('map__new-panel') ||
            target.classList.contains('map__plus')
        ) return;

        // игнорируем клик по ячейкам
        if (target.classList.contains('map__cell')) return;

        console.log(target.classList.contains('map__cell'));

        const sidebar = document.getElementById('sidebar');


        // если клик по панели, то игнорируем клик
        if (sidebar.contains(target)) return;

        // значит клик вне нужных элементов,
        // снимаем выделение с выбранной ячейки
        console.log('deselect from App');
        actions.deselectCell();
    };

    handlerKeyDown = (e) => {
        const { selectedSell, actions } = this.props;

        const ESC = 27;

        if (e.keyCode === ESC && selectedSell) {
            actions.deselectCell();
        }
    };

    render() {
        return (
            <div className="app">
                <Content/>
                <Sidebar/>
            </div>
        )
    }
}

export default App;