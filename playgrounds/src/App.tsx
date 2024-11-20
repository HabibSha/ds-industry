import { Button, Color, Spacing } from "@ds-industry/react/lib";

function App() {
  console.log(Spacing.md);
  return (
    <>
      <h1>hello world!</h1>
      <Color hexCode="#f1f1f1" width={Spacing.lg} height={Spacing.lg} />
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
