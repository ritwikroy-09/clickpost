import React, { useState } from "react";
import "./MainFeed.css";

const App = () => {
  const [groups, setGroups] = useState(["Tech Enthusiasts", "Music Lovers", "AI Researchers"]);
  const [newGroup, setNewGroup] = useState("");
  const openGroups = ["Web Devs", "Gamer Hub", "Book Club"];

  const [posts, setPosts] = useState([
    { id: 1, username: "Alice", content: "Just finished my new project! 🚀" },
    { id: 2, username: "Bob", content: "Loving the new AI advancements lately! 🤖" },
  ]);

  const [newPost, setNewPost] = useState("");

  const addGroup = () => {
    if (newGroup.trim() !== "") {
      setGroups([...groups, newGroup]);
      setNewGroup("");
    }
  };

  const addPost = () => {
    if (newPost.trim() !== "") {
      const newPostData = {
        id: posts.length + 1,
        username: "You",
        content: newPost,
      };
      setPosts([newPostData, ...posts]);
      setNewPost("");
    }
  };

  return (
    <div className="app">
      <div className="top-bar">
        <div className="groups-section">
          <h3>Your Groups</h3>
          {groups.map((group, index) => (
            <span key={index} className="group">{group}</span>
          ))}
          <div className="new-group">
            <input
              type="text"
              placeholder="New Group"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
            />
            <button onClick={addGroup}>Create</button>
          </div>
        </div>

        <div className="open-groups">
          <h3>Open Groups</h3>
          {openGroups.map((group, index) => (
            <span key={index} className="group open">{group}</span>
          ))}
        </div>
      </div>

      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="User Profile" className="profile-pic" />
      </div>

      <div className="new-post">
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={addPost}>Post</button>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h4>{post.username}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

