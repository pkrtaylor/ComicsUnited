import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1100px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template:
  "I m2 m1" 300px
  "I m2 m1" 
  "m3 m2 m1" 
  /[col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end];
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  grid-area: I;
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  grid-area: m1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const ModalContent2 = styled.div`
  grid-area: m2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const ModalContent3 = styled.div`
  grid-area: m3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
`;

const ProfileModal = ( ) => {
    return (
       <>
     
         <Background>
             <ModalWrapper >
                 <ModalImg src="/images/DCcomics.jpg"/>
                 <ModalContent>
                        <h3>Alter-egos</h3>
                        <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                        </ul>
                        <h3>Aliases</h3>
                        <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                        </ul>
                        <h3>Appearence</h3>
                        <ul>
                            <li>Gender:</li>
                            <li>Race</li>
                            <li>Height:</li>
                            <li>Weight:</li>
                        </ul>
                        <h3>Known Base of Operations</h3>
                        <ul>
                            <li>Gender:</li>
                            <li>Race</li>
                            <li>Height:</li>
                            <li>Weight:</li>
                        </ul>
                 </ModalContent>
                 <ModalContent2>
                        <h1>Power Stats</h1>
                        <ul>
                            <li>Intelligence: </li>
                            <li>Strength: </li>
                            <li>Speed: </li>
                            <li>Durability: </li>
                            <li>Power: </li>
                            <li>Combat: </li>
                        </ul>
                        <h1>Group Affiliations</h1>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                
                            </ul>
                 </ModalContent2>
                 <ModalContent3>
                        <h1>Name a.k.a Full-name</h1>
                        <p>Alignment</p>
                        <p>First Appearence: </p>

                        
                 </ModalContent3>
                 
             </ModalWrapper>
         </Background>
     
       </>
    )
}

export default ProfileModal



/* const ProfileModal = (
    { data:{
    name, 
    powerstats,
    biography,
    appearence,
    work,
    connections,
    image
     }}) => {
    return (
       <>
     (
         <Background>
             <ModalWrapper >
                 <ModalImg src="/images/DCcomics.jpg"/>
                 <ModalContent>
                        <h3>Alter-egos</h3>
                        <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                        </ul>
                        <h3>Aliases</h3>
                        <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                        </ul>
                        <h3>Appearence</h3>
                        <ul>
                            <li>Gender:</li>
                            <li>Race</li>
                            <li>Height:</li>
                            <li>Weight:</li>
                        </ul>
                        <h3>Known Base of Operations</h3>
                        <ul>
                            <li>Gender:</li>
                            <li>Race</li>
                            <li>Height:</li>
                            <li>Weight:</li>
                        </ul>
                 </ModalContent>
                 <ModalContent2>
                        <h1>Power Stats</h1>
                        <ul>
                            <li>Intelligence: </li>
                            <li>Strength: </li>
                            <li>Speed: </li>
                            <li>Durability: </li>
                            <li>Power: </li>
                            <li>Combat: </li>
                        </ul>
                        <h1>Group Affiliations</h1>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                
                            </ul>
                 </ModalContent2>
                 <ModalContent3>
                        <h1>{name} a.k.a {biography['full-name']}</h1>
                        { biography['alignment'] === 'good' ? <p>Hero</p> : <p>Villian</p>}
                        <p>First Appearence: {biography['first-appearence']} </p>

                        
                 </ModalContent3>
                 
             </ModalWrapper>
         </Background>
     
       </>
    )
}*/