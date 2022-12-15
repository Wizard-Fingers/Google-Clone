import { useSession, signIn, signOut } from "next-auth/react";

import Link from "next/link";


export default function User() {
   const styles = {
     userImage: "h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1",
     signInLink:
       "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-115 hover:shadow-md",
   };
  const { data: session } = useSession();
  if (session) {
     return( <>
        <img
           onClick={signOut}
           src={session.user.image}
           alt="user profile"
           className={styles.userImage} />
     </>
     );
  }
  return (
     <>
        <Link
           href="/auth/signIn"
        className={styles.signInLink}>
                 Sign in
           </Link>
    </>
  );
}
