import Image from "next/image";
import { Navbar } from "./components/nav";
import {Hero} from "./components/hero";
export default function Home() {
  return (
<div>
  <Navbar/>
  <Hero/>
</div>
  );
}
