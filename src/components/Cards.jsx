import React from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from './ProgressBar';
const Cards = () => {
    const produced = 80
    const toProduce = 100
    return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
        <Card style={{ width: '38vw', backgroundColor: '#111111', margin: '2rem 1rem 1rem 3.5rem', position: 'relative' , border: '#42331A 1px solid', flexGrow: 2}}>
        <Card.Body className='text-center' style={{position: 'relative'}}>
            <Card.Title style={{color: '#F0E6D2'}}>PROGRESO DE PELÍCULAS PRODUCIDAS</Card.Title>
            <Card.Text className="mb-0" style={{textAlign: 'right', fontSize: '10px', color: '#C89B3C'}}>{toProduce} PELÍCULAS</Card.Text>
            <Card.Text className="mb-0" style={{textAlign: 'right', fontSize: '10px', color: '#C89B3C'}}>META DE PRODUCCIÓN</Card.Text>
            <ProgressBar 
            produced={produced}
            toProduce={toProduce}/>
            <Card.Text className="mb-0" style={{textAlign: 'right', fontSize: '10px', color: '#1DA5B4'}}>{produced} PELÍCULAS PRODUCIDAS</Card.Text>
        </Card.Body>
        </Card>
        <Card style={{ width: '30vw', height:'100%', backgroundColor: '#111111', margin: '2rem 0rem 1rem 0rem', border: '#42331A 1px solid', flexGrow: 1}}>
        <iframe height='100%' width='100%' src="https://www.youtube.com/embed/u80gfKQpAUA?autoplay=1&mute=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Card>
        <Card style={{ width: '30vw', height:'23.5vh', backgroundColor: '#111111', margin: '2rem 3.5rem 1rem 1rem', border: '#42331A 1px solid', flexGrow: 1}}>
            <Card.Img style={{width: '100%', height: '100%'}} src='https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg?crop=1xw:0.5064697265625xh;center,top&resize=1200:*'></Card.Img>
        </Card>
        

    </div>
    );
};

export default Cards;