import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { InfoData } from "./components/InfoData/InfoData";

export function App() {
  return (
    <div className="mb-[1000px]">
      <Banner />
      <InfoData />
      <div className="mt-20">
        <Benefits />
      </div>
    </div>
  )
}
