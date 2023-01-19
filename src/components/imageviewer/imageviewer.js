import React from 'react';
import { IonButton, IonIcon, IonCol, IonGrid, IonRow, IonAvatar, IonSelect, IonSelectOption } from '@ionic/react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonInput, IonItem, IonLabel, IonList
} from '@ionic/react';
//Routes
// import './main.css';
// import DropDown from "./DropDown"
import { add, camera,peopleCircleOutline,people } from 'ionicons/icons';
import IonPhotoViewer from '@codesyntax/ionic-react-photo-viewer';
import image from "../../asset/Photo.png";

const imageviewer = () => {
    return (
        <>
            <IonGrid className='images' style={{ flex: 'none' }}>
                <IonRow>
                    <IonCol>
                        <IonItem button lines="none" detail={false}>
                            <IonAvatar slot="start">
                                <IonPhotoViewer
                                    title="Martin arrantzalea"
                                    src={image}
                                // licenseKey='your-license-key'
                                >
                                    <img
                                        style={{
                                            height: "62px",
                                            width: "93px",
                                            borderRadius: "4px",
                                            top: "0",
                                            left: "0"
                                        }}
                                        src={image}
                                        alt="Martin arrantzalea"
                                    />
                                </IonPhotoViewer>
                            </IonAvatar>
                            {/* <IonLabel>Martin arrantzalea</IonLabel> */}
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem button lines="none" detail={false}>
                            <IonAvatar slot="start">
                                <IonPhotoViewer
                                    title="Martin arrantzalea"
                                    src={image}
                                // licenseKey='your-license-key'
                                >
                                    <img
                                        style={{
                                            height: "62px",
                                            width: "93px",
                                            borderRadius: "4px",
                                            top: "0",
                                            left: "0"
                                        }}
                                        src={image}
                                        alt="Martin arrantzalea"
                                    />
                                </IonPhotoViewer>
                            </IonAvatar>
                            {/* <IonLabel>Martin arrantzalea</IonLabel> */}
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem button lines="none" detail={false}>
                            <IonAvatar slot="start">
                                <IonPhotoViewer
                                    title="Martin arrantzalea"
                                    src={image}
                                // licenseKey='your-license-key'
                                >
                                    <img
                                        style={{
                                            height: "62px",
                                            width: "93px",
                                            borderRadius: "4px",
                                            top: "0",
                                            left: "0"
                                        }}
                                        src={image}
                                        alt="Martin arrantzalea"
                                    />
                                </IonPhotoViewer>
                            </IonAvatar>
                            {/* <IonLabel>Martin arrantzalea</IonLabel> */}
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem button lines="none" detail={false}>
                            <IonAvatar slot="start">
                                <IonPhotoViewer
                                    title="Martin arrantzalea"
                                    src={image}
                                // licenseKey='your-license-key'
                                >
                                    <img
                                        style={{
                                            height: "62px",
                                            width: "93px",
                                            borderRadius: "4px",
                                            top: "0",
                                            left: "0"
                                        }}
                                        src={image}
                                        alt="Martin arrantzalea"
                                    />
                                </IonPhotoViewer>
                            </IonAvatar>
                            {/* <IonLabel>Martin arrantzalea</IonLabel> */}
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton
                            color="light"
                        //  onClick={openFileDialog}
                        >
                            <input
                                type="file"
                                id="file-upload"
                                style={{ width: '85px' }}
                            //   onChange={setImage}
                            />
                            <IonIcon slot="icon-only" icon={camera}>Add Photo</IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    )
}

export default imageviewer