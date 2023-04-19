import { Button } from 'react-bootstrap'

const scrollToTop = (): void => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

export function Footer() {
    return (
        <footer className='my-2 d-flex justify-content-center'>
            <Button
                className='button fw-bold rounded border-0 m-1'
                aria-label="Scroll to top"
                onClick={() => scrollToTop()}
            >
                Scroll To Top
            </Button>
        </footer>
    )
}