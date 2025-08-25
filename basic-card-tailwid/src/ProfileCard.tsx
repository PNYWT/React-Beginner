import React from "react";

type Profile = {
  name: string;
  age: number;
  status: string;
  hobbies: string[];
};

const ProfileCard = ({
  profile,
  onHobbyClick,
}: {
  profile: Profile;
  onHobbyClick?: (hobby: string) => void;
}) => {
  return (
    <div className="p-8 bg-white rounded-lg border-2 border-red-800 shadow-lg shadow-black/20">
      <div className="min-w-xs flex flex-col gap-4 text-blue-800 font-bold text-2xl">
        <h1>Name: {profile.name}</h1>
        <h2 className=" ">Age: {profile.age}</h2>

        <h3>Status: {profile.status}</h3>

        <div>
          <h4>Hobbies: </h4>
          <ul className="list-disc list-outside space-y-2 font-normal text-black text-sm pt-2 mx-auto w-fit">
            {profile.hobbies.map((hobby, index) => (
              <li
                key={index}
                className="text-black font-medium cursor-pointer"
                onClick={() => onHobbyClick?.(hobby)}
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
