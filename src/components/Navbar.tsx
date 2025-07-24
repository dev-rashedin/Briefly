import Link from "next/link"
import ModeToggle from "./mode-toggle"
import LoginButton from './login-button';


const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div className='logo text-xl md:text-4xl'>
        <Link href='/'>Briefly</Link>
      </div>
      <div className='flex gap-4'>
        <LoginButton />
        <ModeToggle />
      </div>
    </div>
  );
}
export default Navbar