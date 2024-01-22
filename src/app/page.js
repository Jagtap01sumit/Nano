import Navbar from "@/app/components/Navbar";
import Profile from "./components/Profile";
import Person from "./components/Person";
import MatchTable from "./components/MatchTable";
import Family from "./components/Family";
import Location from "./components/Location";
import Profession from "./components/Profession";
export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-center ">
      <Navbar />
      <Profile />
      <Person />
      <MatchTable />
      <Family />

      <Location />
      <Profession />
    </main>
  );
}
