import React, {FC, useState} from 'react';
import CalendarPage from "./CalendarPage";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "./EventForm";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {IEvent} from "../../types/eventTypes";
import {EventsActionCreators} from "../../store/reducers/events/eventsActionCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypeSelector";


const EventsPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const {events} = useAppSelector(state => state.eventsReducer);
    const {user} = useAppSelector(stata => stata.authReducer);

    const submitForm = (event: IEvent) => {
        setIsModalOpen(false);
        dispatch(EventsActionCreators.createEvent(event));
    }

    return (
        <Layout style={{margin: '5px 15px'}}>
            <Row justify={'center'} style={{backgroundColor: 'white', position: "absolute", margin: '10px 5px'}}>
                <Button onClick={() => setIsModalOpen(true)} type={"primary"}>Add an event</Button>
                <Modal title="Add modal context"
                       open={isModalOpen}
                       footer={null}
                       onCancel={() => setIsModalOpen(false)}>
                    <EventForm submit={event => submitForm(event)} windowOpen={isModalOpen}/>
                </Modal>
            </Row>
            <CalendarPage events={[]}/>
        </Layout>
    );
};

export default EventsPage;