import Finder from '../../components/Finder';
import Logo from '../../resources/img/logo.png'
export default function Header({handleSearch}){
  return <>
    <header>
      <img className='logo' src={Logo} alt='logo'/>
      <Finder handleSearch={handleSearch} />
    </header>
  </>
}