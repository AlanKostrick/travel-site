import 'semantic-ui-css/semantic.min.css';

import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { text, title } from '../fonts';

import React from 'react';
import clsx from 'clsx';

const AgentInfo = () => {

    return (
        <div className={clsx(' flex min-h-screen w-full flex-col items-center justify-center gap-14 px-4 text-primary md:px-12 text-primary ', text.className)}>
            <h1
                className={clsx(
                    'text-center text-4xl md:text-8xl m-10',
                    title.className
                )}>
                Become an agent
            </h1>
            <div className="text-2xl px-8 gap-5">Do you want to pursue your dreams?. Do you have a passion for travel? Get started by following the two step process on the web link provided.
                In less than 15 minutes, you will be fully operational in the travel space by partnering up with Plannet Marketing and Inteletravel.
                You are now an Online Travel Business Owner. LETS GET STARTED!  </div>
            <button className="flex flex-row gap-12 rounded-full bg-primary px-8 py-4 text-2xl text-white">
                Become an agent
            </button>
            <ol className='list-decimal text-xl p-10'>
                <li>Login, Click on YOUR BUSINESS *LEARN MORE ➡️ ENROLL NOW*Pay $19.95 (tax ID is Social Security number) SUBMIT PAYMENT</li>
                <li>Must NOT skip this section: once in Plannet, click on RED button🔴 PURCHASE ITA (Independent Travel Agency), put in cell # & Social security #, answer questions, SUBMIT PAYMENT $179.95 (Once screen appears: WELCOME ADVISOR, you’re complete!)</li>
                <li>Once completed, watch  https://youtu.be/wV75YjjIze4</li>
                <li>CONTACT me for One on One coaching sessions once you’ve completed the sign up process.</li>
            </ol>
        </div>
    );
}

export default AgentInfo;