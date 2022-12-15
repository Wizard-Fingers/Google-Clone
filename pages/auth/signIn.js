import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";

import Image from "next/image";
import GoogleImg from "../../public/google.png";

// client side rendering
export default function signin({ providers }) {
  const styles = {
    container: "flex flex-col items-center min-h-screen mt-40",
    wrapper:" flex flex-col space-y-4 justify-center items-center",
    logo: "object-cover",
    text: "text-sm italic my-10 text-center",
    info: "text-[#DB4437] font-bold",
    link: "text-blue-500 hover:underline font-bold",
    signInButton:
      "bg-[#DB4437] hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:brightness-115 hover:shadow-md mt-10",
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className={styles.wrapper}>
            <Image
              src={GoogleImg}
              alt="Google-logo"
              className={styles.logo}
              width={500}
              height={40}
            />
            <p className={styles.text}>
              <span className={styles.info}>This Website was Created for Learning Purposes Only...</span>
              <br /> It has the same functionality as a Google search dose
              utilizing the free Google Developer resources.
              <br />
              Absolutely no data of yours is saved or used in this site other
              then what you give Google access to.
              <br /> Feel free to check out the repository if you would like to see
              the source code on{" "}
              <Link
                href="https://github.com/Bear1986/Google-Clone"
              className={styles.link}>
                Github
              </Link>.
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className={styles.signInButton}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// server side rendering

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
