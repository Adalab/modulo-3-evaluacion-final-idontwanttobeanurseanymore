import Logo from '/harry-potter-logo-gold.png';

export default function Header() {
  return (
    <header>
      <img fill='pink' className='headerLogo' src={Logo} alt=''></img>
      <h1>Buscador de personajes: Saga Harry Potter</h1>
    </header>
  );
}
