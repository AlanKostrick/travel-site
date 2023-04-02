import 'semantic-ui-css/semantic.min.css';

import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { text, title } from '../fonts';

import React from 'react';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_9pr4cw3';
const TEMPLATE_ID = 'template_sa39z0a';
const USER_ID = '29XvquoW5u9Xrs4Ah';

const ContactForm = () => {
    const handleOnSubmit = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result: { text: any; }) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error: { text: any; }) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div className={clsx('w-3/5 text-primary', text.className)}>
            <h1
                className={clsx(
                    'text-center text-4xl md:text-8xl',
                    title.className
                )}>
                Get in touch
            </h1>
            <Form onSubmit={handleOnSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Message…'
                    required
                />
                <Button type='submit' color='purple'>Submit</Button>
            </Form>
        </div>
    );
}

export default ContactForm;