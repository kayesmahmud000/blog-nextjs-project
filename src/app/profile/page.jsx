
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Protected() {
  const { isAuthenticated , getUser } = getKindeServerSession();

  // Check if the user is authenticated
  if (!(await isAuthenticated())) {
    // Redirect to the login page if not authenticated
    redirect("/api/auth/login");
  }
const user= await getUser()
  // Render the protected content for authenticated users
  return (
    <div className="my-10 space-y-5 justify-center items-center px-4">
      <h2 className=" text-2xl lg:text-5xl font-bold text-center ">Welcome to your profile!</h2>
      <p className="text-red-400 text-center font-bold lg:text-3xl">{user?.email}</p>
    </div>
  );
}