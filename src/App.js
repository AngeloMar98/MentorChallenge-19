import { SectionJobCards } from "./components/SectionJobCards";
import { Background } from "./components/Background";

export default function App() {
  return (
    <div className="App bg-lightGrayCyan2 min-h-screen">
      <main className="min-h-screen">
        <Background />
        <SectionJobCards />
      </main>
    </div>
  );
}
