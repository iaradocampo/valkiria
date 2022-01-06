import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const EmptyOrder = () =>{
    return<>
        <div className="cart">
            <Container>
                <h1>Mis ordenes</h1>
                <hr/>
                <p className='p-empty'>No hay ordenes para mostrar</p>
                <p className="p-order">para seguir navegando, navegar por las categorias del sitio, o busque su producto.</p>
                <Link className='a' to='/'>
                    <Button variant="contained" 
                        style={{
                            backgroundColor: "#00dbafda",
                            color: "#361d64", 
                            fontWeight: "600",
                            letterSpacing: "1px",
                            hover: "#00dbafda", 
                            width: "20rem",
                            height: "3rem",
                            marginTop: "2rem"
                        }}>
                        elegir productos
                    </Button>
                </Link>
            </Container>
        </div>
    </>
}

export default EmptyOrder;