import React, {useState} from 'react'
import ProfileModal from '../Modal/ProfileModal'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh`;

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;`

const Omniverse = () => {
    
    const [showModal, setShowModal]= useState(false);

    const openModal = () =>{
        setShowModal(!showModal);
    };

    return (
    <Container>
        <Button onClick={openModal}>Im a modal</Button>
        <ProfileModal showModal={showModal} setShowModal={setShowModal}/>
    </Container>
    )
}

export default Omniverse
