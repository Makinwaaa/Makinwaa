import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import "aos/dist/aos.css";
import AOS from "aos";


export interface propsInterface {
    children: React.ReactNode
}

const DisplayVerticalScrollBar = createGlobalStyle<{ bgColor: string }>`
    body{
        scroll-behavior: smooth;
        &::-webkit-scrollbar-track
        {
            background-color: #f1f1f1;
        }

        &::-webkit-scrollbar
        {
            width: 12px !important;
            background-color: #f1f1f1;
        }

        .noScrollBar{
            &::-webkit-scrollbar {
                width: 0 !important;
                display: none !important;
            }
        }

        &::-webkit-scrollbar-thumb
        {
            background-color: #c0c0c1;
        }
    }
`

export default function BaseLayout(props: propsInterface) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return <div className='mx-auto max-w-[2000px]'>
        <DisplayVerticalScrollBar bgColor={"#fff"} />
        {props.children}
    </div>
}
