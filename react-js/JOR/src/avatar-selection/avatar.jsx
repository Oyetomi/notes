const avatarData = [
  "https://sandpack-bundler.vercel.app/img/avatars/001.png",
  "https://sandpack-bundler.vercel.app/img/avatars/002.png",
  "https://sandpack-bundler.vercel.app/img/avatars/003.png",
  "https://sandpack-bundler.vercel.app/img/avatars/004.png",
];

const avatarDescription = [
  "person with curly hair and a black T-shirt",
  "person wearing a hijab and glasses",
  "person with short hair wearing a blue hoodie",
  "person with a pink mohawk and a raised eyebrow",
];

const Avatar = () => {
  return (
    <div>
      {avatarDescription.map((description, index) => (
        <img
          style={{
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: "50%",
            padding: "2rem",
            margin: "2rem",
          }}
          src={avatarData[index]}
          key={description}
          alt={description}
        />
      ))}
    </div>
  );
};

export default Avatar;
