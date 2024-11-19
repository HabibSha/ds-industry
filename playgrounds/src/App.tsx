import { Button } from "@ds-industry/react/lib";

function App() {
  return (
    <>
      <h1>hello world!</h1>
      <Button
        title="I am from your library"
        onClick={() => alert("Hello MonoRepo!")}
      >
        Click Lib
      </Button>
    </>
  );
}

export default App;
