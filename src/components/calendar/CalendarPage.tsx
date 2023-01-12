import React from 'react';
import {Badge, BadgeProps, Calendar} from "antd";
import {IEvent} from "../../types/eventTypes";
import {Dayjs} from "dayjs";
import {useAppSelector} from "../../hooks/useTypeSelector";

interface IEvents {
    events: IEvent[]
}

const CalendarPage = ({}: IEvents) => {
    const {events} = useAppSelector(state => state.eventsReducer);

    const dateCellRender = (value: Dayjs) => {
        const listData = events.filter(event => event.date === value.format('YYYY-MM-DD'));
        return (
            <ul>
                {listData.map((item, index) => (
                    <li key={index} style={{listStyleType: "none"}}>
                        <Badge color={"blue"} text={item.description}/>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <Calendar dateCellRender={dateCellRender}/>
        </div>

    );
};

export default CalendarPage;