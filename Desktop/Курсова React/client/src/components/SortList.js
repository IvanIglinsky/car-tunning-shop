import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { Context } from '../index';
import "./style/styleForComponent.css"
import {ListGroup , ListGroupItem} from "react-bootstrap";

const SortList = observer(() => {
    const { device } = useContext(Context);
    const handleSort = (sortType) => {
        device.sortDevices(sortType);
    };

    return (
        <ListGroup>
            <ListGroupItem
                onClick={() => handleSort('newest')}

            >
                По новизні
            </ListGroupItem>
            <ListGroupItem
                onClick={() => handleSort('rating')}

            >
                По рейтингу
            </ListGroupItem>
            <ListGroupItem
                onClick={() => handleSort('price_asc')}
            >
                За зростанням ціни
            </ListGroupItem>
            <ListGroupItem
                onClick={() => handleSort('price_desc')}

            >
                За спаданням ціни
            </ListGroupItem>
        </ListGroup>
    );
});

export default SortList;
