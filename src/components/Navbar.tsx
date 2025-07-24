import { Button } from "@/components/ui/button"
import Link from "next/link"
import ModeToggle from "./mode-toggle"


const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo text-xl md:text-4xl">
       <Link href="/">Briefly</Link>
      </div>
      <div className="flex gap-4">
        <Button size='lg'>Sign in</Button>
      <ModeToggle/>
      </div>
    </div>
  )
}
export default Navbar