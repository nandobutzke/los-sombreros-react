import { darken } from 'polished';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
    margin: 30px auto;
    padding: 16px 18px;
    font: 16px "Poppins", sans-serif;
    border: none;
    background: #ff213f;
    color: #FFF;
    border-radius: 0.25rem;
    
    cursor: pointer;
    
    transition: background 0.2s;
    
    &:hover {
        background: ${darken(0.06, '#ad1a2e')};
    }
`;