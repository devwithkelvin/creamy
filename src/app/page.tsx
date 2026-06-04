import Image from "next/image";
import { Navbar } from "./components/nav";
import {Hero} from "./components/hero";
import { Features } from "./components/features";
import { Flavours } from "./components/flavours";
import { Limited } from "./components/limited";
import { Moments } from "./components/moments";
import { Footer } from "./components/footer";
export default function Home() {
  return (
<div>
  <Navbar/>
  <Hero/>
  <Features/>
  <Flavours/>
  <Limited/>
  <Moments/>
  <Footer/>
</div>
  );
}
