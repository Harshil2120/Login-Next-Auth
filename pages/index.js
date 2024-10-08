import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="bg-gray-800 h-screen w-screen fixed top-0 flex flex-col justify-center items-center">
        <img
          src="/Dual Ring-1s-200px.svg"
          className="h-16"
          alt="Italian Trulli"
        ></img>
      </div>
    );
  }

  if (!session) {
    signIn();
    return null;
  }
}
