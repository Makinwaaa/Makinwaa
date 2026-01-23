import Footer from "components/default/Footer";
import LandingPageNav from 'components/default/Navbar';
import { ReactNode, useEffect } from "react";
import styled from "styled-components";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "components/common/ScrollToTop";

export default function LandingPageLayout({ children }: { children: ReactNode }) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <Container>
            <ScrollToTop>
                <LandingPageNav />
                <main>
                    {children}
                </main>
                {<Footer />}
            </ScrollToTop>
        </Container>
    )
}

const Container = styled.div`
    background: #fff;
    color: black;
    overflow-x: hidden;
`