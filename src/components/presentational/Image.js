import React from 'react';
import styled from 'styled-components';


const UnstyledImage = (props) => <img className={props.className} src={props.src} alt={props.alt}/>

const Image = styled(UnstyledImage)``;

export default Image