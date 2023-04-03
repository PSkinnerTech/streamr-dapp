<script lang="ts">
  import { onMount } from "svelte";
  onMount(() => {
    console.log("Home Mounted");
  });
  </script>
    <section class="carousel">
      <div class="carousel__container">
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Introduction</h5>
            <h6 class="carousel-item__details--subtitle">What is AirGuardian & How Does it Work?</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">The Map</h5>
            <h6 class="carousel-item__details--subtitle">See The AirGuardian in Action</h6>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="carousel-item__img"
            src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="people"
          />
          <div class="carousel-item__details">
            <div class="controls">
              <span class="fas fa-play-circle"></span>
              <span class="fas fa-plus-circle"></span>
            </div>
            <h5 class="carousel-item__details--title">Want to Participate?</h5>
            <h6 class="carousel-item__details--subtitle">How to Build Your Own Decentralized Air Quality Monitoring Device</h6>
          </div>
        </div>
      </div>
    </section>