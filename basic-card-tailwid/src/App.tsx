import ProfileCard from "./ProfileCard";

function App() {
  const handleHobbyClick = (hobby: string) => {
    alert(`You clicked on ${hobby}`);
  };

  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col items-center justify-center gap-6">
      <ProfileCard
        profile={{
          name: "John Doe",
          age: 30,
          status: "Single",
          hobbies: ["Coding", "Reading", "Playing Video Games"],
        }}
        onHobbyClick={handleHobbyClick}
      />

      <ProfileCard
        profile={{
          name: "Alice",
          age: 23,
          status: "-",
          hobbies: ["Coding", "Reading", "Playing Video Games"],
        }}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default App;
