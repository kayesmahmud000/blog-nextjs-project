const page = async({params}) => {
    const {id}=await params;
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   const data =await res.json()
   console.log(data)
    return (
        <>
           <div className="my-10 px-4">
            <h2 className=" text-2xl lg:text-4xl font-bold text-center max-w-3xl mx-auto text-red-400 ">{data?.title}</h2>
            <p className="text-center text-lg font-semibold max-w-2xl mt-5 mx-auto" >{data?.body}</p>
           </div>
        </>
    );
};

export default page;