import React from 'react';
import './Gallery.css'
import one from '../../assets/1.jpg'
import two from '../../assets/2.jpg'
import three from '../../assets/3.jpg'
import four from '../../assets/4.jpg'
import five from '../../assets/5.jpg'
import six from '../../assets/6.jpg'
import seven from '../../assets/7.jpg'

const Gallery = () => {
    return (
        <div id="xgallery" className='gallery mydiv'>
            <div className='gallery-title'>
                <h1>Gallery</h1>
            </div>
            {/*<div className='gallery-container'>*/}
            {/*    <img src={'https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={'image'}/>*/}
            {/*    <img src={'https://plus.unsplash.com/premium_photo-1738604141757-e0447f101dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={'image'}/>*/}
            {/*    <img src={'https://images.unsplash.com/photo-1736354485341-d165463e0133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D'} alt={'image'}/>*/}
            {/*    <img src={'https://plus.unsplash.com/premium_photo-1737697221626-8a957abad2df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D'} alt={'image'}/>*/}
            {/*    <img src={'https://images.unsplash.com/photo-1738571574302-3312deda0aa3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D'} alt={'image'}/>*/}
            {/*    <img src={'https://images.unsplash.com/photo-1738070593303-fbb151013701?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D'} alt={'image'}/>*/}
            {/*</div>*/}
            <div className='gallery-container'>
                <img src={one} alt={'image'}/>
                <img src={two} alt={'image'}/>
                <img src={seven} alt={'image'}/>
                <img src={three} alt={'image'}/>
                <img src={six} alt={'image'}/>
                <img src={four} alt={'image'}/>
            </div>
        </div>
    );
};

export default Gallery;
