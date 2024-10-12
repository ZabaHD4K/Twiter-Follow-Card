// App.js
import './App.css';
import { TwiterFollowCard } from './TwiterFollowCard'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <section className="varios">
      
      <TwiterFollowCard 
        nombre_usuario="paco_pro" 
        arroba="@poraso" 
        avatar="https://distribucionesplata.com/tienda/20122-thickbox_default/monster-energy-drink-green-lt-500-ml.jpg" 
      />

      <TwiterFollowCard 
        nombre_usuario="paco_pro" 
        arroba="@poraso" 
        avatar="https://distribucionesplata.com/tienda/20122-thickbox_default/monster-energy-drink-green-lt-500-ml.jpg" 
      />
    </section> 
  );
}

export default App;
