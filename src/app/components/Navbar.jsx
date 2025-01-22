import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar =  async() => {
    const {getUser}= getKindeServerSession()
    const user= await getUser()
    console.log(user)
    return (
        <>
           <div className=" container mx-auto flex justify-center items-center my-5 border-b-2 py-3">
              <ul className="flex items-center text-md font-medium px-1 gap-7">
              <li><Link href={"/"}    className={`text-lg  hover:bg-none hover:text-red-500 transition-colors `}
                     >Home</Link></li>
                <li><Link href={"/profile"}    className={`text-lg hover:bg-none hover:text-red-500 transition-colors `}>Profile</Link></li>
                
               {
                user ? <li><Link href={"/api/auth/logout"}   > <button  className={` btn bg-red-400 text-lg text-white btn-md  transition-colors`}> 
                Sign Out
                    </button></Link></li> :<>
                 <li><Link href={"/api/auth/login"}   > <button  className={` btn bg-amber-400 text-lg text-white btn-md  transition-colors`}> 
                Sign In
                    </button></Link></li>
                
                <li><Link href={"/api/auth/register"}   > <button  className={` btn text-lg bg-blue-500 text-white btn-md  transition-colors`}> 
                Sign Up
                    </button></Link></li>
                </>
               }
               
              
              </ul>
            </div>
        </>
    );
};

export default Navbar;