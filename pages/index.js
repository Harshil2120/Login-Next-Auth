import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const [postData, setPostData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (response.ok) {
          const data = await response.json();
          setPostData(data);
        } else {
          console.error("Failed to fetch post data");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (session) {
      fetchPostData();
    }
  }, [session]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/"); // Redirect to home page after sign-out
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    signIn(); // Redirect to sign-in page if not authenticated
    return null;
  }

  if (postData) {
    return (
      <>
        <div>
          <p>Signed in as {session.user.email}</p>
          <img
            src={session.user.image}
            alt="Profile Picture"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <p>Post Title: {postData.title}</p>
          <p>Post Body: {postData.body}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </>
    );
  } else {
    return <p>Loading post data...</p>;
  }
}
