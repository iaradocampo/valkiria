import styled, {css} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
    borde: "#00dbafda",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`

    display: block;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
    color: #00dbafda;
    
    ${props => props.valido === 'false' && css`
        color: ${colors.error};
    `}

`;

const GroupInput = styled.div`

    position: relative;
    z-index: 90;

`;

const Input = styled.input`

    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;
    text-align: left;
    &:focus {
        border: 3px solid ${colors.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
    @media (min-width: 375px) and (max-width: 500px){
        width: 80%
    }
    ${props => props.validate === 'true' && css`
        border: 3px solid transparent;
    `}
    ${props => props.validate === 'false' && css`
        border: 3px solid ${colors.error} !important;
    `}

`;

const ErrorLegend = styled.p`

    font-size: 0.9em;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;
    ${props => props.validate === 'true' && css`
        display: none;
    `}
    ${props => props.validate === 'false' && css`
        display: block;
    `}

`;

const IconValidation = styled(FontAwesomeIcon)`

    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.validate === 'false' && css`
		opacity: 1;
		color: ${colors.error};
	`}
	${props => props.validate === 'true' && css`
		opacity: 1;
		color: ${colors.exito};
	`}

`;

const ContainerButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;
    margin-top: 2rem;
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;

const ErrorMessage = styled.div`

    height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
    text-transform: uppercase;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}

`;

export {
    Formulario,
    Label,
    GroupInput,
    Input,
    ErrorLegend,
    IconValidation,
    ContainerButton,
    ErrorMessage
}