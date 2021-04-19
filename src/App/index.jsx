import Recipes from '../components/Recipes';
import sword from '../assets/images/swc-sword.png';
import swordSvg from '../assets/icons/sword.svg';

export default function App() {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Oh Hai, React!</h1>
        </section>
        <img src={sword} alt='sword' width='250' />
        <img src={swordSvg} alt='sword' width='250' />
        <Recipes />
      </main>
    </>
  );
}
