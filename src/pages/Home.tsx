import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <Hero />
    </IonPage>
  );
};

export default Home;
