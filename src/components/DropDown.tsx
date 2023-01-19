import React from 'react';
import "./dropdown.css";
import { IonList, IonItem ,  IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect interface="popover" placeholder="Select values">
          <IonSelectOption value="failed" className='failed' >Failed  <IonCheckbox slot="start"></IonCheckbox></IonSelectOption>
          <IonSelectOption value="pass"  className='pass'>Pass</IonSelectOption>
          <IonSelectOption value="notstarted"  className='notstarted' >Not Started</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;