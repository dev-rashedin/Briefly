import { Button } from "@/components/ui/button"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo text-xl md:text-4xl">
       <Link href="/">Briefly</Link>
      </div>
      <div className="login">
        <Button size='lg'>Sign in</Button>
      </div>
    </div>
  )
}
export default Navbar