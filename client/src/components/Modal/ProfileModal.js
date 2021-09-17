import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import { Fragment } from 'react';


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/batman_superman.jpg');
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 1100px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-image: url("https://www.dropbox.com/s/2ct0i6kc61vp0bh/wall.jpg?raw=1");
  background-color: #010a00;
  color: #c6e2ff;
  text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  display: grid;
  grid-template:
  "I m2 m1" 300px
  "I m2 m1" 
  "m3 m2 m1" 
  /[col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end];
  grid-gap: 20px;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  li{
    list-style-type: none;
  }
`;

const ModalImg = styled.img`
  grid-area: I;
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 0px;
  background: #000;
`;

const ModalContent = styled.div`
  grid-area: m1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  
  p {
    margin-bottom: 1rem;
  }
  ul{
    margin-bottom: 1rem;
  }
  h2{
      border-style: none;
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
  
  ul{
    margin-bottom: 1rem;
  }
  h2{
      border-style: none;
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
  color: #c6e2ff;
  text-shadow:
    0 0 6px rgba(202,228,225,0.92),
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);


  p {
    margin-bottom: 1rem;
  }

  h2{
      border-style: none;
      margin-bottom: 1rem;
  }
`;

const ProfileModal = (
    { data:{
    name, 
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image
     }}) => {
    return (
    
         <Background >
             <ModalWrapper >
                 <ModalImg src={image.url}/>
                 <ModalContent>
                        {biography['alter-egos'] === 'No alter egos found.' ? null : 
                        <Fragment>
                        <h2>Alter egos</h2>
                        <p>{biography['alter-egos']}</p>
                        </Fragment>
                        }
                        <h2>Aliases</h2>
                        <ul>
                            {biography.aliases.map((alias, index) =>(
                            <li key={index}>{alias}</li>
                            ))}
                        </ul>
                        <h2>Appearence</h2>
                        <ul>
                            <li>Gender: {appearance.gender}</li>
                            <li>Race:  {appearance.race}</li>
                            <li>Height:  {appearance.height[0]}</li>
                            <li>Weight:  {appearance.weight[0]}</li>
                        </ul>
                        {work.base === '-' ? null : 
                        <Fragment>
                       <h2>Known Base of Operations</h2>
                        <p>{work.base}</p>
                        </Fragment>
                        }
                        
                 </ModalContent>
                 <ModalContent2>
                 <p>First Appearance: {biography['first-appearance']}</p>

                        <h2>Power Stats</h2>
                        <ul>
                            <li>Intelligence: {powerstats['intelligence']} </li>
                            <li>Strength: {powerstats['strength']}</li>
                            <li>Speed: {powerstats['speed']} </li>
                            <li>Durability: {powerstats['durability']}</li>
                            <li>Power: {powerstats['power']}</li>
                            <li>Combat: {powerstats['combat']} </li>
                        </ul>
                        <h2>Group Affiliations</h2>
                           
                        <p>{connections['group-affiliation']}</p>
                                
                           
                 </ModalContent2>
                 <ModalContent3>
                        <h2>{name} <small>a.k.a</small></h2>
                        <h2>{biography['full-name']}</h2>
                        { biography['alignment'] === 'good' ? <h3>Status: Hero</h3> : <h3>Status: Villian</h3>}
                        

                        
                 </ModalContent3>
                 
             </ModalWrapper>
         </Background>
     
      
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