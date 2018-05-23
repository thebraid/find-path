import React from 'react';

import './index.pcss';
import Button from 'Components/common/Button'

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__actions">
            <div className="sidebar__common-actions">
                <Button text="Разблокировать все ячейки" onClick={()=>{}} />
                <Button text="Заблокировать случайные N клеток" onClick={()=>{}} />
                <Button text="Установить кол-во столбцов по умолчанию" onClick={()=>{}} />
                <Button text="Установить кол-во строк по умолчанию" onClick={()=>{}} />
            </div>


            <div className="sidebar__cell-actions">
                <Button text="Начало" onClick={()=>{}} />
                <Button text="Конец" onClick={()=>{}} />
                <Button text="Заблокировать" onClick={()=>{}} />
                <Button text="Разблокировать" onClick={()=>{}} />
            </div>
        </div>
        <Button text="Найти путь" highlight onClick={()=>{}} />
    </div>
);

export default Sidebar;