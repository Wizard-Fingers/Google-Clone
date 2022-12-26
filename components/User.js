import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function User() {
  const styles = {
    userImage: "h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1",
    signInLink:
      "bg-[#4285F4] hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-115 hover:shadow-md",
  };
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        {/*I changed this to img rather then use the Image component because I'm getting a call stack error and this was the only way I could figure out how to fix it */}
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user profile"
             className={styles.userImage}
             width={30}
               height={30}
        />
      </div>
    );
  }
  return (
    <div>
      <Link href="/auth/signIn" className={styles.signInLink}>
        Sign in
      </Link>
    </div>
  );
}
