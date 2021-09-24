import { useState } from 'react'
import Header from './components/Header'
import Restaurants from './components/Restaurants';


function App() {
const [restaurants] = useState([
{
  id: 1,
  title: 'Wagamama',
},
{
  id: 2,
  title: 'Benihana',
},
{
  id: 3,
  title: 'Nobu',
}
])

return (
  <divm className='container'>
    <Header />
    <Restaurants restaurants={restaurants} />
  {console.log(restaurants)}
  </divm>
  );
}

export default App;
