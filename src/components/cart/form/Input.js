import { Input, Label, GroupInput, ErrorLegend, IconValidation } from "./stylesForm/StyleForm";
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({state, updateState, type, label, placeholder, name, errorLegend, regularExpression, funcion}) => {
    const onChange = (e) => {
        updateState({...state, field: e.target.value});
    }

    const validation = () => {
        if(regularExpression){
            if(regularExpression.test(state.field)){
                updateState({...state, validate: 'true'});
            } else {
                updateState({...state, validate: 'false'});
            }
        }
        if(funcion){
            funcion();
        }
    }

    return (
    <div>
        <Label htmlFor={name} validate={state.validate}>{label}</Label>
        <GroupInput>
            <Input 
                type={type}
                placeholder={placeholder}
                id={name}
                value={state.field}
                onChange={onChange}
                onKeyUp={validation}
                validate={state.validate}
            />
            <IconValidation 
                icon={state.validate === 'true' ? faCheckCircle: faTimesCircle}
                validate={state.validate}
            />
        </GroupInput>
        <ErrorLegend validate={state.validate}>{errorLegend}</ErrorLegend>
    </div>
    )
}

export default InputComponent;
