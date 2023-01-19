import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

//Routes Files
import ExploreContainer from '../components/ExploreContainer';
import Menubar from '../components/Menubar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Menubar />
    </IonPage>
  );
};

export default Home;
