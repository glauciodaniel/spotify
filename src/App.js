import NavBar from "./components/NavBar/NavBar";
import PlayingBar from "./components/PlayingBar/PlayingBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <main>
        <section>
          <div> menu-bar</div>
          cover-artist
          <div>name-artist</div>
        </section>
        <div>button-play button-follow</div>
        <div>playlist</div>
        <div>advertisement</div>
      </main>
      <PlayingBar />
    </div>
  );
}

export default App;
