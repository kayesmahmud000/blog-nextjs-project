import Link from "next/link";

const  Home= async()=> {
  const res= await fetch('https://jsonplaceholder.typicode.com/posts')
  const data= await res.json()

 
  return (
    <div className="container mx-auto my-10 px-4 ">
      <h2 className=" text-center text-4xl font-bold my-7  border-b-2 py-3"> All Blogs Title Hare </h2>
      <ul>
        {
          data.map((blogs)=><li key={blogs.id} className="text-xl list-disc text-left font-semibold hover:underline hover:text-red-400"> <Link href={`/blog/${blogs.id}`}> {blogs?.title}</Link></li>)
        }
      </ul>
    </div>
  );
}

export default Home