import styled, { css } from "styled-components";

export const Title = styled.h3`
    width: 50%;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700; 
    color: var(--color-yellow);
    margin-top: 20rem;
    margin-left: 20rem;

    ${({ main }) =>
        main && 
        css`
            width: 100%;
            margin: 30rem 10rem 50rem;
            font-size: 35px;
            color: var(--color-white);
            text-align: center;
    `};
`;

export const Caso = styled.p`
    max-width: 400px;
    height: auto;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700; 
    color: var(--color-black);
`;


export const InputTitle = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 8rem;
    margin-bottom: 5rem;

    &::placeholder{
        font-size: 10px;
        font-family: 'Orbitron', sans-serif;
        font-weight: 700; 
        text-align: center;
    }
`;

export const InputCase = styled.textarea`
    height: 200rem;
    width: 400px;
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px; 
    margin-bottom: 6px; 

  &::placeholder{
    font-size: 10px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700; 
  }
`;

export const ButtonCase = styled.button`
    width: 400px;
    height: 40px;
    background-color: var(--color-cane);
    border-radius: 8rem;
    font-size: 15px;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700; 
    cursor: pointer; 

    &:hover{
        opacity: 0.8;
    }
`;

export const WrapperCase = styled.div`
    /* display: grid; */
    width: 50%;
    margin-top: 20rem;
    justify-content: center;
    margin: 20rem 5rem;
    
    @media(max-width: 816px){
        ${ButtonCase}, ${InputTitle}{
            width: 300px;        
        }
    }

    @media(max-width: 613px){
        ${ButtonCase}, ${InputTitle}{
            width: 250px;        
        }
    }
`;

export const WrapperListed = styled.div`
    display: block;
    width: 50%;
`;

export const Container = styled.div`
    display: inline-flex;
    justify-content: space-between;
    @media(max-width: 613px){
        display: block;
        ${WrapperCase}{
            width: 100%;
            ${ButtonCase},${InputTitle}{
                width: 100%;
                margin-right: 15px;
                margin-left: 15px;
            }
        }
    }
`;