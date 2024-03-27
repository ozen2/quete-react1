import Avatar from "./components/Avatar.jsx";

function App() {

  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };

  const homer = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson",
  };

  return (
    <>
      <Avatar
      img={bart.image}
      firstName={bart.firstName}
      lastName={bart.lastName}
      />   
      <Avatar
      img={homer.image}
      firstName={homer.firstName}
      lastName={homer.lastName}
      />
      </>

  )
}


export default App;
