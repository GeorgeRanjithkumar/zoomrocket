import React from 'react';
import { IonCol, IonGrid, IonRow, } from '@ionic/react';

import './Sidebar.css';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
function Example() {
    return (
        <>
            <IonGrid style={{marginTop:'-37rem'}}>
                <IonRow  style={{width:"200px"}}>
                    <IonCol className='ioncolmethod'>
                        <IonTitle className='plers-title' style={{fontWeight:'900'}}>Plers</IonTitle>
                        <IonRow className='plers-Row'>74542</IonRow>
                        <IonRow className='plers-Row'>74344</IonRow>
                        <IonRow className='plers-Row'>75365</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                        <IonRow className='plers-Row'>75371</IonRow>
                    </IonCol>
                    <IonCol className='ioncolmethod'>
                        <IonTitle className='plers-title'  style={{fontWeight:'900'}}>TTs</IonTitle>
                        <IonRow className='tts-Row'>44401</IonRow>
                        <IonRow className='tts-Row'>44401</IonRow>
                        <IonRow className='tts-Row'>44401</IonRow>
                        <IonRow className='tts-Row'>44401</IonRow>
                        <IonRow className='tts-Row'>44401</IonRow>
                        <IonRow className='tts-Row'>44434</IonRow>
                        <IonRow className='tts-Row'>44434</IonRow>
                        <IonRow className='tts-Row'>75371</IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}
export default Example;