import React from 'react';
import { camera, film, flash, home, arrowBack } from 'ionicons/icons';
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
import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/react';

//Routes
import Sidebar from "./Sidebar"
import Maincontent from './main'
import "./Menubar.css"
function Example() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar >
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonIcon slot="start" icon={home}></IonIcon>
                <IonContent className="ion-padding">Qc Checklist</IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar className='toolbarvalue' style={{ background: "#1B1819" }}>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Western Downs Solar Farm-460MW</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonHeader style={{ background: '#262223' }}>
                        <IonToolbar className='toolbarvalue2' >
                            <IonIcon slot="start" icon={arrowBack}></IonIcon>
                            <IonTitle>Qc Checklist</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonItem className='d-flex'>
                        <div className='col-sm-3 col-md-6 col-lg-4 col-xl-2'>
                            <Sidebar />
                            </div>
                        <div className='col-sm-9 col-md-6 col-lg-8 col-xl-10'>
                            <Maincontent />
                            </div>
                    </IonItem>
                </IonContent>
                {/* <IonItem>
                    <IonIcon slot="start" icon={home}></IonIcon>
                    <IonContent className="ion-padding">Qc Checklist</IonContent>
                </IonItem> */}
            </IonPage>
        </>
    );
}
export default Example;