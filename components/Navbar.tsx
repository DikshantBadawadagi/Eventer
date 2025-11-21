import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="rounded-4xl mt-2">
        <nav>
            <Link href="/">
                <Image src="/icons/logo.png" alt="Eventer Logo" width={24} height={24} />
            </Link>

            <ul>
                <Link href='/'>Home</Link>
                <Link href='/'>Events</Link>
                <Link href='/'>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar