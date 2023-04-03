<script>
  import Map from '$lib/map/Map.svelte';
  import Geocoder from '$lib/geocoder/Geocoder.svelte';
  import Marker from '$lib/map/Marker.svelte';
  import GeolocateControl from '$lib/map/controls/GeolocateControl.svelte';
  import NavigationControl from '$lib/map/controls/NavigationControl.svelte';
  import mapboxgl from "mapbox-gl";
  import ScaleControl from '$lib/map/controls/ScaleControl.svelte';
//   import Earthquakes from './_Earthquakes.svelte'

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const geocoderInstance = new MapboxGeocoder({
  accessToken: import.meta.env.VITE_MAPBOX_PUBLIC_KEY,
});

  const mapboxPublicKey = import.meta.env.VITE_MAPBOX_PUBLIC_KEY;
//   const { GeolocateControl, NavigationControl } = controls
  const place = null

  let page = 'about'
  let center = [53.3358627, -2.8572362];
  let marker = [center.lng, center.lat];
  let zoom = 11.15
  let mapComponent

  function navigate (next) {
    page = next
  }

  function placeChanged (e) {
    const { result } = e.detail
    mapComponent.setCenter(result.center, 14)
  }
  
  function randomLng () {
    return 77 + (Math.random() - 0.5) * 30
  }

  function randomLat () {
    return 13 + (Math.random() - 0.5) * 30
  }

  function flyToRandomPlace () {
    mapComponent.flyTo({
      center: [
        randomLng(),
        randomLat()
      ],
      essential: true
    })
  }

  function recentre(event) {
  center = event.detail.center.toArray();
}

function drag({ detail }) {
  marker = [detail.center.lng, detail.center.lat];
}
    
import { onMount } from "svelte";

onMount(() => {
    console.log("About Mounted");
});
</script>
<section class="content">
    <div class="container">
      <div class="content-wrap">
        <div class="row">
          <aside>
            <div class="menu-box">
              <h4>Navigation</h4>  
              <nav>
                <ul>
                  <li><a href="#geocoder" on:click={() => { navigate('geocoder') } } class:current={page === 'geocoder'}>Geocoder</a></li>
                  <li><a href="#map" on:click={() => { navigate('map') }} class:current={page === 'map'}>Map</a></li>
                </ul>          
              </nav>
            </div>
          </aside>
          <div class="content-info">
            <div class="action-buttons">
              <button id="fly-to" on:click={flyToRandomPlace}
                >Fly to random location</button
              >
        
              <button
                id="change-zoom"
                on:click={() => (zoom = Math.floor(Math.random() * 10))}
                >Change Zoom Level</button
              >
              </div>
  
            <!-- Geocoder Section -->
            {#if page === 'geocoder'}
            <div class="section-txt" id="geocoder">
            <form>
                <Geocoder
                geocoder={geocoderInstance}
                value="(Near London)"
                accessToken={mapboxPublicKey}
                on:result={placeChanged}
                on:clear={() => mapComponent.setCenter([0, 0])}
                />
                {#if place}
                <dl>
                    <dt>Name:</dt>
                    <dd>{place.label}</dd>
                    <dt>Geolocation:</dt>
                    <dd>lat: {place.geometry.lat}, lng: {place.geometry.lng}</dd>
                </dl>
                {/if}
            </form>
            </div>
            {/if}

            <!-- Map Section -->
            {#if page === 'map'}
            <div class="section-txt" id="map">
            <div class="map-wrap">
                <Map
                bind:this={mapComponent}
                accessToken={mapboxPublicKey}
                on:recentre={recentre}
                on:drag={drag}
                {center}
                bind:zoom
                >
                <NavigationControl />
                <GeolocateControl on:geolocate={handleGeolocate} />
                <Marker {coordinates} />
                </Map>
            </div>
            <dt>Geolocation:</dt>
            <dd>lat: {center[1]}, lng: {center[0]}</dd>
            <dd>zoom: {zoom}</dd>
            </div>
            {/if}

          </div>
        </div>
      </div>
    </div>
  </section>