import React from "react";

interface Props {
  name: string;
  picture: string;
}

const Profile: React.FC<Props> = ({ name, picture }) => {
  const NameLastnameSplit = (name: string) => {
    return name.split(" ");
  };
  return (
    <figure className="figureContainer">
      <div className="nameContainer">
        <h2>{NameLastnameSplit(name)[0]}</h2>
        <h2>{NameLastnameSplit(name)[1]}</h2>
      </div>
      <img src={picture} alt={name} />
    </figure>
  );
};

export default Profile;
