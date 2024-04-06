import Link from "next/link"


const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </div>
  )
}

export default Home