export const FriendlyGreeting = ({ name }) => {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Greetings, {name}!
    </p>
  );
};
export default FriendlyGreeting;
