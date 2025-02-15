import ActivityGraph from "./ActivityGraph";
import RecentTransictions from "./RecentTransictions";
import StateCard from "./StateCard";
import UsagRadar from "./UsagRadar";

export default function Grid() {
  return (
    <div className="grid grid-cols-12 gap-3 px-4">
      <StateCard />
      <ActivityGraph/>
      <UsagRadar/>
      <RecentTransictions/>
    </div>
  );
}
