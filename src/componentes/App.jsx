import './App.css';
import { TwitterFollowCard } from './TwiterFollowCard'; // Corrige el nombre y asegúrate de la ruta correcta

function App() {
  return (
    <section className="varios">
      <TwitterFollowCard 
        nombre_usuario="paco_pro" 
        arroba="@poraso" 
        avatar="https://distribucionesplata.com/tienda/20122-thickbox_default/monster-energy-drink-green-lt-500-ml.jpg" 
        isFollowing={true}  // Pasa un valor inicial para isFollowing
      />

      <TwitterFollowCard 
        nombre_usuario="juan_perez" 
        arroba="@juanp" 
        avatar="https://distribucionesplata.com/tienda/20122-thickbox_default/monster-energy-drink-green-lt-500-ml.jpg" 
        isFollowing={false}  // Pasa otro valor inicial
      />




    </section> 
  );
}

export default App;
