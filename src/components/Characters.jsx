import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { MD5 } from 'crypto-js';
import Swal from 'sweetalert2';
const Characters = () => {
const [isCharacterHover, setIsCharacterHover ] = useState(null)
const [characters, setCharacters] = useState([])
const [currentPage, setCurrentPage] = useState(0)
const publicKey = '28ddbeec51b69d14c3e1a123effa8d66';
const privateKey = '86b266cd21301a1611cdf1b78dfb3a8c7c1e3325';


const timestamp = Date.now();
const hash = MD5(`${timestamp}${privateKey}${publicKey}`);


const startIndex = currentPage * 5
const endIndex = startIndex + 5

const charactersInPage = characters.slice(startIndex, endIndex)


useEffect(()=> {axios.get('https://gateway.marvel.com/v1/public/characters', {
  params: {
    apikey: publicKey,
    ts: timestamp,
    hash: hash
  }
    })
  .then(response => {
    setCharacters(response.data.data?.results);
  })
  .catch(error => {
    console.error(error);
  })
}, [])

const previous = ()=>{
    if(currentPage > 0){
        setCurrentPage(currentPage-1)
    }
}
    return (
        <div style={{display: 'grid', margin: '0rem 3.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', gridAutoFlow: 'dense', gap: '1.8rem'}}>
            {charactersInPage.map((character)=>(
            <Card key={character.id} className='m-0' style={{width: 'minmax(10rem, 14rem)', height: '100%',background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(9,12,20,1) 0.01%, rgba(23,26,32,1) 31.77%, rgba(39,44,52,1) 100%)', backgroundImage: 'url(./backgroundCard.webp)', backgroundSize: '100%', border: '0.75px solid rgba(60, 60, 65, 1)'}}>
               <Card.Body style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{position: 'relative', width: '60%'}}>
                    <Card.Title className='mb-4' style={{fontSize: '14px', whiteSpace: 'pre-wrap', textAlign: 'center', color: '#F0E6D2' }}>{character.name}</Card.Title>
                    <img src='./markName.svg' style={{position: 'absolute', top: '10%', right: '100%'}}></img>
                    <img src='./markName.svg' style={{position: 'absolute', top: '10%', left: '100%', transform: 'scale(-1, 1)'}}></img>
                </div>
                    <div style={{position: 'relative', cursor: 'pointer'}} 
                    onMouseEnter={()=>setIsCharacterHover(character.id)}
                    onMouseLeave={()=>setIsCharacterHover(null)}
                    onClick={() =>{
                        Swal.fire({
                            title: character.name,
                            text: `Última aparición en una serie: ${character.series?.items[0].name}`,
                            imageUrl: character.thumbnail.path+"."+character.thumbnail.extension,
                            imageWidth: 200,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                            confirmButtonColor: '#C89B3C',
                            background: '#3C3C41',
                            color: '#F0E6D2',
                            width: '300px'
                          })
                    }}>
                        <div style={{animation: isCharacterHover === character.id ? 'toSpin 10s linear infinite' : ''}}>
                            <img src="./diamond.svg"  style={{width: '15px', position: 'absolute', left: '45%', top: '-10%'}}/> 
                            <img src="./diamond.svg"  style={{width: '15px', position: 'absolute', bottom: '-10%', left: '45%'}}/> 
                            <img src="./border.svg" style={{width: '158px'}}/>
                        </div>
                        <img src={character.thumbnail.path+"."+character.thumbnail.extension} style={{width: '132px', height: '140px', position: 'absolute', borderRadius: '50%', left: '8%', top: '5%'}}/>
                    </div>
                <Card style={{backgroundColor: '#1E2328', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '2rem', width: '80%', color: '#F0E6D2'}}>
                    <Card.Body className='p-0' style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                        <span style={{marginTop: '10px'}}>Comics:</span> <span style={{fontSize: '30px'}}>{character.comics?.available}</span>
                    </Card.Body>
                </Card>
                <Card style={{backgroundColor: '#1E2328', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: '1rem', width: '80%', color: '#F0E6D2'}}>
                    <Card.Body className='p-0' style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                        <span style={{marginTop: '10px'}}>Películas:</span> <span style={{fontSize: '30px'}}>{character.series?.available}</span>
                    </Card.Body>
                </Card>
                </Card.Body>
            </Card>))}
            <div/>
            <div/>
            <div style={{display: 'flex', marginBottom: '3rem', marginLeft: '10%', position: 'relative', width: '100%'}}>
            <img src="./pagination.svg" style={{cursor: 'pointer', position: 'absolute', width: 'auto'}} onClick={()=> previous()}/>
            <img src="./pagination.svg" style={{transform: 'scale(-1, 1)', cursor: 'pointer', position: 'absolute', width: 'auto', marginLeft: '8rem'}} onClick={()=> currentPage === 3 ? currentPage : setCurrentPage(currentPage+1)}/>
            <h5 style={{letterSpacing: '5px', marginLeft: '4rem', marginTop: '0.5rem', position: 'absolute'}}>{currentPage + 1}/4</h5>
            </div>
        </div>
        
    );
};

export default Characters;