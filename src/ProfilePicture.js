import React from "react";

const ProfilePicture = ({ imageUrl }) => {
  return (
    <div
      className="rounded-circle bg-secondary d-flex align-items-center justify-content-center shadow"
      style={{
        width: "120px",
        height: "120px",
        overflow: "hidden",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <span className="text-white">Profile</span>
      )}
    </div>
  );
};

export default ProfilePicture;
