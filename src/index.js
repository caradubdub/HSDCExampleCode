import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import { fetchUser, fetchPosts } from "./fakeApi";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(u => setUser(u));
  }, []);

  if (user === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <h1>{user}</h1>
      <ProfileTimeline />
    </>
  );
}

function ProfileTimeline() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts().then(p => setPosts(p));
  }, []);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map((post, idx) => (
        <li key={idx}>{post}</li>
      ))}
    </ul>
  );
}
const rootElement = document.getElementById(
  "root"
);
ReactDOM.createRoot(rootElement).render(
  <ProfilePage />
);
