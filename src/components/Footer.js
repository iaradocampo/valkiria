import Container from 'react-bootstrap/Container';

const Footer = () => {
    return <>
        <footer>
            <Container>
                <div className="p-container">
                    <p className="p-footer">VALKIRIA © 2021</p>
                    <div className="border-top">
                        <p className="p-footer">Todos los derechos reservados.</p>
                    </div>
                </div>
            </Container>
        </footer>
    </>
}

export default Footer;