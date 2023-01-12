import React, {useEffect, useState} from 'react';
import {Button, Checkbox, DatePicker, Form, Input, Row, Select} from "antd";
import {useAppSelector} from "../../hooks/useTypeSelector";
import {IEvent} from "../../types/eventTypes";
import dayjs from "dayjs";

interface IEventForm {
    submit: (event: IEvent) => void,
    windowOpen: boolean
}

const EventForm = ({submit, windowOpen}: IEventForm) => {

    const {guests} = useAppSelector(state => state.eventsReducer);
    const {user} = useAppSelector(state => state.authReducer);

    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        description: '',
        guest: guests[0].username
    });

    const handleSubmit = () => {
        submit({...event, author: user.username});
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            autoComplete="off"
            onFinish={handleSubmit}
            fields={[
                {
                    name: 'guest',
                    value: guests[0].username
                }
            ]}
        >
            <Form.Item
                label="Guests:"
                name="guest"
                rules={[{required: true, message: 'The form can\'t be empty!'}]}
            >
                <Select
                    style={{width: 120}}
                    onChange={(value, option) => setEvent({...event, guest: value})}
                    options={guests.map(guest => {
                        return {
                            key: guest.username,
                            value: guest.username,
                            label: guest.username
                        }
                    })}
                />
            </Form.Item>

            <Form.Item
                label="Date:"
                name="date"
                rules={[
                    {required: true, message: 'The form can\'t be empty!'},
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (value.format('YYYY-MM-DD') >= (dayjs().format('YYYY-MM-DD'))) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The date must be after the current one'));
                        },
                    }),
                ]}>
                <DatePicker
                    onChange={(value) => setEvent({...event, date: value?.format('YYYY-MM-DD')!})}
                />
            </Form.Item>

            <Form.Item
                label="Description:"
                name="description"
                rules={[{required: true, message: 'The form can\'t be empty!'}]}
            >
                <Input onChange={(e) => setEvent({...event, description: e.target.value})}
                       value={event.description}
                />
            </Form.Item>
            <Row justify={'end'} style={{marginRight: 24}}>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;