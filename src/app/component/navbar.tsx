import Link from "next/link"

export default function Navbar(){
    return (
        <div>
          <Link href="/about">About</Link>
          <Link href="/about/us">About us</Link>
          <Link href="/about/someone">someone</Link>
          <Link href="/listofpost">Posts</Link>
        </div>
    )
}