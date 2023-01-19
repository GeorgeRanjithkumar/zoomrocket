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
    IonList
} from '@ionic/react';
import { IonItem, IonItemDivider, IonItemGroup, IonLabel, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';
import { IonButton, } from '@ionic/react';
import { people, download } from 'ionicons/icons';
import "./Menubar2.css";

//Routes
import Sidebar from "./Sidebar"
import Maincontent from './main2'
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
                    <IonHeader style={{ display: 'flex' }}>
                        <IonToolbar className='' >
                            <IonIcon slot="start" icon={arrowBack}></IonIcon>
                            <IonTitle>Qc Punchlist</IonTitle>
                        </IonToolbar>
                        <IonToolbar style={{ display: 'flex',marginLeft:'-10rem' }}>
                            <div>
                                <IonButton color="danger" className='pubbutton'>
                                    <IonIcon slot="start" icon={people}></IonIcon>
                                    Public Punchlist
                                </IonButton>
                                <IonButton color="light" className='pubbutton'>
                                    <IonIcon slot="start" icon={people}></IonIcon>
                                    Internal Punchlist
                                </IonButton>
                                <IonButton fill="clear">View By All</IonButton>
                                <IonButton fill="clear"><IonIcon slot="start" icon={download}></IonIcon>Download</IonButton>
                                {/* <div style={{ display: 'inline-flex' }}>
                                    <IonList style={{ width: '10rem' }}>
                                        <IonItem>
                                            <IonSelect interface="popover" placeholder="View by All">
                                                <IonSelectOption value="demo" className='' >demo  <IonCheckbox slot="start"></IonCheckbox></IonSelectOption>
                                                <IonSelectOption value="demo" className=''>demo</IonSelectOption>
                                                <IonSelectOption value="demo" className='' >demo</IonSelectOption>
                                            </IonSelect>
                                        </IonItem>
                                    </IonList>
                                    <IonList style={{ width: '12rem' }}>
                                        <IonItem>
                                            <IonIcon slot="start" icon={download}></IonIcon>
                                            <IonSelect interface="popover" placeholder="Download">
                                                <IonSelectOption value="demo" className='' >demo  <IonCheckbox slot="start"></IonCheckbox></IonSelectOption>
                                                <IonSelectOption value="demo" className=''>demo</IonSelectOption>
                                                <IonSelectOption value="demo" className='' >demo</IonSelectOption>
                                            </IonSelect>
                                        </IonItem>
                                    </IonList>
                                </div> */}
                            </div>

                        </IonToolbar>
                    </IonHeader>
                    <IonItem className='d-flex'>
                        {/* <div className='col-sm-3 col-md-6 col-lg-4 col-xl-2'>
                            <Sidebar />
                        </div>
                        <div className='col-sm-9 col-md-6 col-lg-8 col-xl-10'> */}
                        <Maincontent />
                        {/* </div> */}
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