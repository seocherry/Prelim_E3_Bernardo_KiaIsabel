import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

const Profile = ({ user, setUser }) => {
  // Load image from user state or localStorage
  const [image, setImage] = useState(
    () => user.imageUrl || localStorage.getItem("profileImage")
  );

  useEffect(() => {
    if (user.imageUrl) {
      setImage(user.imageUrl);
    }
  }, [user.imageUrl]);

  const handleChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setImage(imageUrl);
        setUser({ ...user, imageUrl });
        localStorage.setItem("profileImage", imageUrl); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center fw-bold">Profile Page</h2>

        <div className="d-flex flex-column align-items-center mt-3">
          <ProfilePicture imageUrl={image} />

          <input
            type="file"
            accept="image/*"
            className="form-control mt-3"
            onChange={handleImageUpload}
          />
        </div>

        <div className="text-center mt-3">
          <UserInfo name={user.name} />
        </div>

        <div className="mt-3">
          <label htmlFor="name" className="form-label fw-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={handleChange}
            className="form-control text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
