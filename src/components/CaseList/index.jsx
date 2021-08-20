import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCase, Container, InputTitle, Title, WrapperCase, WrapperListed } from './styles';

function addCaseAction(title){
    return {type: 'ADD_CASE', title}
}
export default function CaseList(){
    const cases = useSelector(state => state.data);
    const dispatch = useDispatch();
    var caseTitle;

    const handleTitleChange = (e) => {
        caseTitle = (e.target.value)
    }

    function addCase(){
        dispatch(addCaseAction(caseTitle));
    }
    console.log(cases);
    return( 
        <Container>
            <Title main>Send your case</Title>
            <WrapperListed>
                {cases.map((caso) =>    
                    <Title key={caso}> {caso} </Title>
                )}
            </WrapperListed>
            <WrapperCase> 
                <InputTitle type='text' placeholder='Case name' onChange={handleTitleChange}></InputTitle>
                {/* <InputCase type='text' placeholder='Your Case' value={caseText} onChange={handleTextChange}></InputCase> */}
                <ButtonCase type='button' alt='Show case' onClick={addCase}>Send</ButtonCase>
            </WrapperCase>
        </Container>
    );
}

