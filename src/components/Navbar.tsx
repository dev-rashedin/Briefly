import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo text-xl md:text-4xl">
        Briefly
      </div>
      <div className="login">
        <Button size='lg'>Sign in</Button>
      </div>
    </div>
  )
}
export default Navbar