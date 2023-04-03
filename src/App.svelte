<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import { navbarData } from "./utils/linkUtils.js";
  import airGuardian from './assets/airguardian.svg'
  import Announcer from "./components/announcer.svelte";
  import Transition from "./components/transition.svelte";
  import Home from './routes/Home.svelte'
  import About from './routes/About.svelte'
  import Map from './routes/Map.svelte'
  import StreamrData from './routes/StreamrData.svelte'
  import { Route, router } from "tinro";
  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  import { onMount } from "svelte";
  onMount(() => {
    console.log("Home mounted");
  });
</script>

<Navbar data={navbarData} />
<main>
  <div>
    <a href="https://patrickskinner.tech" target="_blank" rel="noreferrer">
      <img src={airGuardian} class="homeLogo" alt="Vite Logo" />
    </a>
  </div>
  <h1><span class="spanTitle">Air</span>Guardian</h1>
  <Announcer />
  <Transition>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/map">
      <Map />
    </Route>
    <Route path="/streamrdata">
      <StreamrData />
    </Route>
</Transition>
    <p>
      Check out <a href="https://github.com/PSkinnerTech" target="_blank" rel="noreferrer"  >AirGuardian</a>, Decentralized air quality monitoring system: Real-time air quality data collection and visualization from IoT sensors deployed in various locations.
    </p>
  
    <p class="read-the-docs">
      This Application is built by <a href="https://patrickskinner.tech" target="_blank" rel="noreferrer" >Patrick Skinner</a>.  This application was built as a submission to <a href="https://developerdao.com" target="_blank" rel="noreferrer">Developer DAO</a>'s Mini Hackathon sponsored by <a href="https://streamr.network" target="_blank" rel="noreferrer">Streamr</a>. Streamr is a fully decentralized and scalable protocol for many to many data pipelines, network analytics and instant messaging.
    </p>
</main>

