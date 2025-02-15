import Dashboard from "./components/Dashboard/page";
import Sidebar from "./components/Sidebar/page";


export default function App() {
  return (
    <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
