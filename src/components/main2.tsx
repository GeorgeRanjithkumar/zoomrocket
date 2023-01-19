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
import './main2.css';
import DropDown from "./DropDown"
import { add, camera, peopleCircleOutline, people } from 'ionicons/icons';
import IonPhotoViewer from '@codesyntax/ionic-react-photo-viewer';
import image from "../asset/Photo.png";
import Imageviewer from './imageviewer/imageviewer';

function Example() {
    return (
        <>

            <IonGrid style={{}}>
                {/* <IonHeader style={{ background: '#262223' }}>
                    <IonToolbar>
                        <IonTitle id='title'>Block 1, Section 2, Row 36</IonTitle>
                        <h5 id='minimum'>87 Module Hybrid Edge / Interior tracker</h5>
                    </IonToolbar>
                </IonHeader> */}
                <IonGrid id='hokage'>
                    <IonRow className='tobirama'>
                        <IonCol >Block</IonCol>
                        <IonCol >Section</IonCol>
                        <IonCol  >Row</IonCol>
                        <IonCol style={{ marginRight: '5rem' }}>Activity/Subactivity</IonCol>
                        <IonCol style={{ marginRight: '5rem' }}>Acceptance Criteria</IonCol>
                        <IonCol style={{ marginRight: '5rem' }}>Comments</IonCol>
                        <IonCol style={{ marginRight: '5rem' }}>Photos</IonCol>
                        <IonCol >Status</IonCol>

                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>1</IonCol>
                        <IonCol>3</IonCol>
                        <IonCol>28</IonCol>
                        <IonCol>Pilling</IonCol>
                        <IonCol>within +/- 45mm</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonGrid className='images' style={{ flex: 'none' }}>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="6" size="4" sizeMd="6" sizeLg="6" sizeXl="6"  >
                                        {/* <IonItem button lines="none" detail={false}>
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
        
                                        </IonItem> */}
                                        {/* </IonCol>
                                    <IonCol> */}
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
                                        {/* </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol> */}
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
                            {/* <Imageviewer /> */}
                        </IonItem></IonCol>
                        {/* <IonCol><DropDown /></IonCol> */}
                        <IonCol className='addbutton'>
                            <IonList>
                                <IonItem style={{ border: "1px solid grey" }}>
                                    <IonSelect interface="popover" placeholder="open">
                                        <IonSelectOption value="received" >Received<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        <IonSelectOption value="dennied" >dennied<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        {/* <IonSelectOption value="notstarted" style={{ color: 'brown' }}>Not Started</IonSelectOption> */}
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                            {/* <IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                                <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* <hr></hr> */}
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>1</IonCol>
                        <IonCol>3</IonCol>
                        <IonCol>28</IonCol>
                        <IonCol>Pilling</IonCol>
                        <IonCol>within +/- 45mm</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonGrid className='images' style={{ flex: 'none' }}>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="6" size="4" sizeMd="6" sizeLg="6" sizeXl="6"  >
                                        {/* <IonItem button lines="none" detail={false}>
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
        
                                        </IonItem> */}
                                        {/* </IonCol>
                                    <IonCol> */}
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
                                        {/* </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol> */}
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
                            {/* <Imageviewer /> */}
                        </IonItem></IonCol>
                        {/* <IonCol><DropDown /></IonCol> */}
                        <IonCol className='addbutton'>
                            <IonList>
                                <IonItem style={{ border: "1px solid grey" }}>
                                    <IonSelect interface="popover" placeholder="open">
                                        <IonSelectOption value="received" >Received<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        <IonSelectOption value="dennied" >dennied<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        {/* <IonSelectOption value="notstarted" style={{ color: 'brown' }}>Not Started</IonSelectOption> */}
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                            {/* <IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                                <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>1</IonCol>
                        <IonCol>3</IonCol>
                        <IonCol>28</IonCol>
                        <IonCol>Pilling</IonCol>
                        <IonCol>within +/- 45mm</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonGrid className='images' style={{ flex: 'none' }}>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="6" size="4" sizeMd="6" sizeLg="6" sizeXl="6"  >
                                        {/* <IonItem button lines="none" detail={false}>
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
        
                                        </IonItem> */}
                                        {/* </IonCol>
                                    <IonCol> */}
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
                                        {/* </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol> */}
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
                            {/* <Imageviewer /> */}
                        </IonItem></IonCol>
                        {/* <IonCol><DropDown /></IonCol> */}
                        <IonCol className='addbutton'>
                            <IonList>
                                <IonItem style={{ border: "1px solid grey" }}>
                                    <IonSelect interface="popover" placeholder="open">
                                        <IonSelectOption value="received" >Received<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        <IonSelectOption value="dennied" >dennied<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        {/* <IonSelectOption value="notstarted" style={{ color: 'brown' }}>Not Started</IonSelectOption> */}
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                            {/* <IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                                <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonGrid id='raikage'>
                    <IonRow className='hashirama'>
                        <IonCol>1</IonCol>
                        <IonCol>3</IonCol>
                        <IonCol style={{ marginRight: '2rem' }}>28</IonCol>
                        <IonCol>Pilling</IonCol>
                        <IonCol>within +/- 45mm</IonCol>
                        <IonCol>Heavy BhAs light BHAs
                            <IonRow>Add Comment</IonRow>
                        </IonCol>
                        <IonCol> <IonItem>
                            <IonGrid className='images' style={{ flex: 'none' }}>
                                <IonRow>
                                    <IonCol sizeXs="12" sizeSm="6" size="4" sizeMd="6" sizeLg="6" sizeXl="6"  >
                                        {/* <IonItem button lines="none" detail={false}>
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
        
                                        </IonItem> */}
                                        {/* </IonCol>
                                    <IonCol> */}
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
                                        {/* </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol> */}
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
                            {/* <Imageviewer /> */}
                        </IonItem></IonCol>
                        {/* <IonCol><DropDown /></IonCol> */}
                        <IonCol className='addbutton'>
                            <IonList>
                                <IonItem style={{ border: "1px solid grey" }}>
                                    <IonSelect interface="popover" placeholder="open">
                                        <IonSelectOption value="received" >Received<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        <IonSelectOption value="dennied" >dennied<IonIcon style={{ color: 'black' }} slot="end" icon={peopleCircleOutline}></IonIcon></IonSelectOption>
                                        {/* <IonSelectOption value="notstarted" style={{ color: 'brown' }}>Not Started</IonSelectOption> */}
                                    </IonSelect>
                                </IonItem>
                            </IonList>
                            {/* <IonButton color="#696F79;" fill="outline" style={{ color: 'grey' }}>Add to
                                <IonIcon style={{ color: 'black' }} slot="end" icon={add}></IonIcon></IonButton> */}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonGrid>
        </>
    );
}
export default Example;