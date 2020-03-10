import React, { useContext} from "react";
import Context from '../../context';
import WalkingContext from '../../context2';
import Form from '../styled-components/FormAdd';
import Input from '../styled-components/InputForAddForm';
import ImgClose from '../styled-components/ImgClose';
import CloseImg from '../../img/close.png';
import Wrapper from '../styled-components/WrapperInputForForm';
import P from '../styled-components/P';

function WalkingAddForm({marginTop}) {
    const { closeWalkingForm } = useContext(Context);
    const { submitAddForm ,newWalkingDate, setNewWalkingDate, newWalkingDistance, setNewWalkingDistance, validDate, setValidDate } = useContext(WalkingContext);

    function validatyDate() {
        let dateFormat = require('dateformat');
        if(newWalkingDate > dateFormat(new Date(), 'yyyy-mm-dd')) {
            setValidDate(false);
        }
        if(newWalkingDate.trim() === '') {
            setValidDate(null);
        }
        if(newWalkingDate < dateFormat(new Date(), 'yyyy-mm-dd')){
            setValidDate(true)
        }
    }

    return(
        <Form marginTop={ marginTop }>
            <ImgClose src={ CloseImg } onClick={ closeWalkingForm } />
            <form onSubmit={ submitAddForm }>
            <Wrapper>
                <P fontSize="12px">Date</P>
                <Input type="date" value={ newWalkingDate } onChange={event => setNewWalkingDate(event.target.value)} onBlur={ validatyDate }/>
            </Wrapper>
            {!validDate && validDate !== null && <P color="#EC174F">Дата не может быть в будущем!</P> }
            <Wrapper>  
                <P fontSize="12px">Distance</P>
                <Input type="number" placeholder="Дистанция" min={0} value={ newWalkingDistance } onChange={event => setNewWalkingDistance(event.target.value)} />
            </Wrapper>
            </form>
        </Form> 
    )
}

export default WalkingAddForm;