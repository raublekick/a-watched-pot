<template>
  <div id="app">
    <section class="container">
      <h1 class="title p-4">A Watched Pot...</h1>
      <div class="row">
        <div class="columns">
          <div class="column m-1">
            <fieldset class="pot">
              <legend>pot...</legend>
              <div class="columns">
                <div class="column">
                  <div class="pot-ice"></div>
                </div>
                <div class="column">
                  {{ pot }}
                </div>
              </div>
            </fieldset>
          </div>
          <div class="column m-1">
            <fieldset class="actions">
              <legend>actions...</legend>
              <div v-for="(action, index) in actions" :key="index">
                <b-button>{{ index }}</b-button>
              </div>
            </fieldset>
          </div>
        </div>
        <div class="columns">
          <fieldset class="fire column m-1">
            <legend>fire...</legend>
            <div class="columns">
              <div class="column">
                <div class="fire-art"></div>
              </div>
              <div class="column">
                {{ fire }}
              </div>
            </div>
          </fieldset>
          <fieldset class="environment column m-1">
            <legend>environment...</legend>
            <div v-for="(environment, index) in environments" :key="index">
              <b-button>{{ index }}</b-button>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapState(["actions", "environments", "pot", "fire"]),
  },
};
</script>

<style lang="scss">
fieldset {
  border: 3px solid black;
}
$size: 10px;
.pot-ice {
  position: relative;
  width: calc(21 * #{$size}); // Pixel size * # of columns
  height: calc(21 * #{$size}); // Pixel size * # of rows
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: $size;
    height: $size;
    box-shadow: 40px 10px 0 0 rgba(48, 63, 70, 1),
      50px 10px 0 0 rgba(48, 63, 70, 1), 60px 10px 0 0 rgba(48, 63, 70, 1),
      70px 10px 0 0 rgba(48, 63, 70, 1), 80px 10px 0 0 rgba(48, 63, 70, 1),
      90px 10px 0 0 rgba(48, 63, 70, 1), 100px 10px 0 0 rgba(48, 63, 70, 1),
      110px 10px 0 0 rgba(48, 63, 70, 1), 120px 10px 0 0 rgba(48, 63, 70, 1),
      130px 10px 0 0 rgba(48, 63, 70, 1), 140px 10px 0 0 rgba(48, 63, 70, 1),
      150px 10px 0 0 rgba(48, 63, 70, 1), 160px 10px 0 0 rgba(48, 63, 70, 1),
      170px 10px 0 0 rgba(48, 63, 70, 1), 30px 20px 0 0 rgba(48, 63, 70, 1),
      180px 20px 0 0 rgba(48, 63, 70, 1), 20px 30px 0 0 rgba(48, 63, 70, 1),
      190px 30px 0 0 rgba(48, 63, 70, 1), 10px 40px 0 0 rgba(48, 63, 70, 1),
      200px 40px 0 0 rgba(48, 63, 70, 1), 10px 50px 0 0 rgba(48, 63, 70, 1),
      60px 50px 0 0 rgba(0, 188, 212, 1), 70px 50px 0 0 rgba(0, 188, 212, 1),
      80px 50px 0 0 rgba(0, 188, 212, 1), 90px 50px 0 0 rgba(0, 188, 212, 1),
      100px 50px 0 0 rgba(0, 188, 212, 1), 110px 50px 0 0 rgba(0, 188, 212, 1),
      120px 50px 0 0 rgba(0, 188, 212, 1), 130px 50px 0 0 rgba(0, 188, 212, 1),
      140px 50px 0 0 rgba(0, 188, 212, 1), 150px 50px 0 0 rgba(0, 188, 212, 1),
      200px 50px 0 0 rgba(48, 63, 70, 1), 10px 60px 0 0 rgba(48, 63, 70, 1),
      50px 60px 0 0 rgba(0, 188, 212, 1), 60px 60px 0 0 rgba(0, 188, 212, 1),
      70px 60px 0 0 rgba(0, 188, 212, 1), 80px 60px 0 0 rgba(0, 188, 212, 1),
      90px 60px 0 0 rgba(255, 255, 255, 1), 100px 60px 0 0 rgba(0, 188, 212, 1),
      110px 60px 0 0 rgba(0, 188, 212, 1), 120px 60px 0 0 rgba(0, 188, 212, 1),
      130px 60px 0 0 rgba(0, 188, 212, 1), 140px 60px 0 0 rgba(0, 188, 212, 1),
      150px 60px 0 0 rgba(0, 188, 212, 1), 160px 60px 0 0 rgba(0, 188, 212, 1),
      200px 60px 0 0 rgba(48, 63, 70, 1), 10px 70px 0 0 rgba(48, 63, 70, 1),
      50px 70px 0 0 rgba(0, 188, 212, 1), 60px 70px 0 0 rgba(0, 188, 212, 1),
      70px 70px 0 0 rgba(255, 255, 255, 1), 80px 70px 0 0 rgba(255, 255, 255, 1),
      90px 70px 0 0 rgba(0, 188, 212, 1), 100px 70px 0 0 rgba(0, 188, 212, 1),
      110px 70px 0 0 rgba(0, 188, 212, 1), 120px 70px 0 0 rgba(0, 188, 212, 1),
      130px 70px 0 0 rgba(0, 188, 212, 1), 140px 70px 0 0 rgba(0, 188, 212, 1),
      150px 70px 0 0 rgba(0, 188, 212, 1), 160px 70px 0 0 rgba(0, 188, 212, 1),
      200px 70px 0 0 rgba(48, 63, 70, 1), 10px 80px 0 0 rgba(48, 63, 70, 1),
      50px 80px 0 0 rgba(0, 188, 212, 1), 60px 80px 0 0 rgba(255, 255, 255, 1),
      70px 80px 0 0 rgba(0, 188, 212, 1), 80px 80px 0 0 rgba(0, 188, 212, 1),
      90px 80px 0 0 rgba(0, 188, 212, 1), 100px 80px 0 0 rgba(0, 188, 212, 1),
      110px 80px 0 0 rgba(0, 188, 212, 1), 120px 80px 0 0 rgba(0, 188, 212, 1),
      130px 80px 0 0 rgba(0, 188, 212, 1), 140px 80px 0 0 rgba(0, 188, 212, 1),
      150px 80px 0 0 rgba(0, 188, 212, 1), 160px 80px 0 0 rgba(0, 188, 212, 1),
      200px 80px 0 0 rgba(48, 63, 70, 1), 10px 90px 0 0 rgba(48, 63, 70, 1),
      50px 90px 0 0 rgba(0, 188, 212, 1), 60px 90px 0 0 rgba(0, 188, 212, 1),
      70px 90px 0 0 rgba(0, 188, 212, 1), 80px 90px 0 0 rgba(0, 188, 212, 1),
      90px 90px 0 0 rgba(0, 188, 212, 1), 100px 90px 0 0 rgba(0, 188, 212, 1),
      110px 90px 0 0 rgba(0, 188, 212, 1), 120px 90px 0 0 rgba(0, 188, 212, 1),
      130px 90px 0 0 rgba(0, 188, 212, 1), 140px 90px 0 0 rgba(0, 188, 212, 1),
      150px 90px 0 0 rgba(0, 188, 212, 1), 160px 90px 0 0 rgba(0, 188, 212, 1),
      200px 90px 0 0 rgba(48, 63, 70, 1), 10px 100px 0 0 rgba(48, 63, 70, 1),
      50px 100px 0 0 rgba(0, 188, 212, 1), 60px 100px 0 0 rgba(0, 188, 212, 1),
      70px 100px 0 0 rgba(0, 188, 212, 1), 80px 100px 0 0 rgba(0, 188, 212, 1),
      90px 100px 0 0 rgba(0, 188, 212, 1), 100px 100px 0 0 rgba(0, 188, 212, 1),
      110px 100px 0 0 rgba(0, 188, 212, 1), 120px 100px 0 0 rgba(0, 188, 212, 1),
      130px 100px 0 0 rgba(0, 188, 212, 1), 140px 100px 0 0 rgba(0, 188, 212, 1),
      150px 100px 0 0 rgba(0, 188, 212, 1), 160px 100px 0 0 rgba(0, 188, 212, 1),
      200px 100px 0 0 rgba(48, 63, 70, 1), 10px 110px 0 0 rgba(48, 63, 70, 1),
      50px 110px 0 0 rgba(0, 188, 212, 1), 60px 110px 0 0 rgba(0, 188, 212, 1),
      70px 110px 0 0 rgba(0, 188, 212, 1), 80px 110px 0 0 rgba(0, 188, 212, 1),
      90px 110px 0 0 rgba(0, 188, 212, 1), 100px 110px 0 0 rgba(0, 188, 212, 1),
      110px 110px 0 0 rgba(0, 188, 212, 1), 120px 110px 0 0 rgba(0, 188, 212, 1),
      130px 110px 0 0 rgba(0, 188, 212, 1), 140px 110px 0 0 rgba(0, 188, 212, 1),
      150px 110px 0 0 rgba(0, 188, 212, 1), 160px 110px 0 0 rgba(0, 188, 212, 1),
      200px 110px 0 0 rgba(48, 63, 70, 1), 10px 120px 0 0 rgba(48, 63, 70, 1),
      50px 120px 0 0 rgba(0, 188, 212, 1), 60px 120px 0 0 rgba(0, 188, 212, 1),
      70px 120px 0 0 rgba(0, 188, 212, 1), 80px 120px 0 0 rgba(0, 188, 212, 1),
      90px 120px 0 0 rgba(0, 188, 212, 1), 100px 120px 0 0 rgba(0, 188, 212, 1),
      110px 120px 0 0 rgba(0, 188, 212, 1), 120px 120px 0 0 rgba(0, 188, 212, 1),
      130px 120px 0 0 rgba(0, 188, 212, 1), 140px 120px 0 0 rgba(0, 188, 212, 1),
      150px 120px 0 0 rgba(0, 188, 212, 1), 160px 120px 0 0 rgba(0, 188, 212, 1),
      200px 120px 0 0 rgba(48, 63, 70, 1), 10px 130px 0 0 rgba(48, 63, 70, 1),
      50px 130px 0 0 rgba(0, 188, 212, 1), 60px 130px 0 0 rgba(0, 188, 212, 1),
      70px 130px 0 0 rgba(0, 188, 212, 1), 80px 130px 0 0 rgba(0, 188, 212, 1),
      90px 130px 0 0 rgba(0, 188, 212, 1), 100px 130px 0 0 rgba(0, 188, 212, 1),
      110px 130px 0 0 rgba(0, 188, 212, 1), 120px 130px 0 0 rgba(0, 188, 212, 1),
      130px 130px 0 0 rgba(0, 188, 212, 1), 140px 130px 0 0 rgba(0, 188, 212, 1),
      150px 130px 0 0 rgba(255, 255, 255, 1),
      160px 130px 0 0 rgba(0, 188, 212, 1), 200px 130px 0 0 rgba(48, 63, 70, 1),
      10px 140px 0 0 rgba(48, 63, 70, 1), 50px 140px 0 0 rgba(0, 188, 212, 1),
      60px 140px 0 0 rgba(0, 188, 212, 1), 70px 140px 0 0 rgba(0, 188, 212, 1),
      80px 140px 0 0 rgba(0, 188, 212, 1), 90px 140px 0 0 rgba(0, 188, 212, 1),
      100px 140px 0 0 rgba(0, 188, 212, 1), 110px 140px 0 0 rgba(0, 188, 212, 1),
      120px 140px 0 0 rgba(0, 188, 212, 1),
      130px 140px 0 0 rgba(255, 255, 255, 1),
      140px 140px 0 0 rgba(255, 255, 255, 1),
      150px 140px 0 0 rgba(0, 188, 212, 1), 160px 140px 0 0 rgba(0, 188, 212, 1),
      200px 140px 0 0 rgba(48, 63, 70, 1), 10px 150px 0 0 rgba(48, 63, 70, 1),
      50px 150px 0 0 rgba(0, 188, 212, 1), 60px 150px 0 0 rgba(0, 188, 212, 1),
      70px 150px 0 0 rgba(0, 188, 212, 1), 80px 150px 0 0 rgba(0, 188, 212, 1),
      90px 150px 0 0 rgba(0, 188, 212, 1), 100px 150px 0 0 rgba(0, 188, 212, 1),
      110px 150px 0 0 rgba(0, 188, 212, 1),
      120px 150px 0 0 rgba(255, 255, 255, 1),
      130px 150px 0 0 rgba(0, 188, 212, 1), 140px 150px 0 0 rgba(0, 188, 212, 1),
      150px 150px 0 0 rgba(0, 188, 212, 1), 160px 150px 0 0 rgba(0, 188, 212, 1),
      200px 150px 0 0 rgba(48, 63, 70, 1), 10px 160px 0 0 rgba(48, 63, 70, 1),
      60px 160px 0 0 rgba(0, 188, 212, 1), 70px 160px 0 0 rgba(0, 188, 212, 1),
      80px 160px 0 0 rgba(0, 188, 212, 1), 90px 160px 0 0 rgba(0, 188, 212, 1),
      100px 160px 0 0 rgba(0, 188, 212, 1), 110px 160px 0 0 rgba(0, 188, 212, 1),
      120px 160px 0 0 rgba(0, 188, 212, 1), 130px 160px 0 0 rgba(0, 188, 212, 1),
      140px 160px 0 0 rgba(0, 188, 212, 1), 150px 160px 0 0 rgba(0, 188, 212, 1),
      200px 160px 0 0 rgba(48, 63, 70, 1), 10px 170px 0 0 rgba(48, 63, 70, 1),
      200px 170px 0 0 rgba(48, 63, 70, 1), 20px 180px 0 0 rgba(48, 63, 70, 1),
      190px 180px 0 0 rgba(48, 63, 70, 1), 30px 190px 0 0 rgba(48, 63, 70, 1),
      180px 190px 0 0 rgba(48, 63, 70, 1), 40px 200px 0 0 rgba(48, 63, 70, 1),
      50px 200px 0 0 rgba(48, 63, 70, 1), 60px 200px 0 0 rgba(48, 63, 70, 1),
      70px 200px 0 0 rgba(48, 63, 70, 1), 80px 200px 0 0 rgba(48, 63, 70, 1),
      90px 200px 0 0 rgba(48, 63, 70, 1), 100px 200px 0 0 rgba(48, 63, 70, 1),
      110px 200px 0 0 rgba(48, 63, 70, 1), 120px 200px 0 0 rgba(48, 63, 70, 1),
      130px 200px 0 0 rgba(48, 63, 70, 1), 140px 200px 0 0 rgba(48, 63, 70, 1),
      150px 200px 0 0 rgba(48, 63, 70, 1), 160px 200px 0 0 rgba(48, 63, 70, 1),
      170px 200px 0 0 rgba(48, 63, 70, 1);
  }
}
.fire-art {
  box-shadow: 90px 50px 0 0 rgba(255, 152, 0, 1),
    80px 60px 0 0 rgba(255, 152, 0, 1), 90px 60px 0 0 rgba(255, 152, 0, 1),
    80px 70px 0 0 rgba(255, 152, 0, 1), 90px 70px 0 0 rgba(255, 152, 0, 1),
    130px 70px 0 0 rgba(255, 152, 0, 1), 80px 80px 0 0 rgba(255, 152, 0, 1),
    90px 80px 0 0 rgba(255, 152, 0, 1), 100px 80px 0 0 rgba(255, 152, 0, 1),
    120px 80px 0 0 rgba(255, 152, 0, 1), 130px 80px 0 0 rgba(255, 152, 0, 1),
    70px 90px 0 0 rgba(255, 152, 0, 1), 80px 90px 0 0 rgba(255, 152, 0, 1),
    90px 90px 0 0 rgba(255, 152, 0, 1), 100px 90px 0 0 rgba(255, 152, 0, 1),
    110px 90px 0 0 rgba(255, 152, 0, 1), 120px 90px 0 0 rgba(255, 152, 0, 1),
    130px 90px 0 0 rgba(255, 152, 0, 1), 70px 100px 0 0 rgba(255, 152, 0, 1),
    80px 100px 0 0 rgba(255, 152, 0, 1), 90px 100px 0 0 rgba(255, 152, 0, 1),
    100px 100px 0 0 rgba(255, 152, 0, 1), 110px 100px 0 0 rgba(255, 152, 0, 1),
    120px 100px 0 0 rgba(255, 152, 0, 1), 130px 100px 0 0 rgba(255, 152, 0, 1),
    70px 110px 0 0 rgba(255, 152, 0, 1), 80px 110px 0 0 rgba(255, 152, 0, 1),
    90px 110px 0 0 rgba(255, 87, 34, 1), 100px 110px 0 0 rgba(255, 152, 0, 1),
    110px 110px 0 0 rgba(255, 152, 0, 1), 120px 110px 0 0 rgba(255, 152, 0, 1),
    130px 110px 0 0 rgba(255, 152, 0, 1), 140px 110px 0 0 rgba(255, 152, 0, 1),
    10px 120px 0 0 rgba(121, 85, 72, 1), 20px 120px 0 0 rgba(121, 85, 72, 1),
    70px 120px 0 0 rgba(255, 152, 0, 1), 80px 120px 0 0 rgba(255, 87, 34, 1),
    90px 120px 0 0 rgba(255, 87, 34, 1), 100px 120px 0 0 rgba(255, 152, 0, 1),
    110px 120px 0 0 rgba(255, 152, 0, 1), 120px 120px 0 0 rgba(255, 87, 34, 1),
    130px 120px 0 0 rgba(255, 152, 0, 1), 140px 120px 0 0 rgba(255, 152, 0, 1),
    30px 130px 0 0 rgba(121, 85, 72, 1), 40px 130px 0 0 rgba(121, 85, 72, 1),
    50px 130px 0 0 rgba(121, 85, 72, 1), 70px 130px 0 0 rgba(255, 152, 0, 1),
    80px 130px 0 0 rgba(255, 87, 34, 1), 90px 130px 0 0 rgba(255, 87, 34, 1),
    100px 130px 0 0 rgba(255, 152, 0, 1), 110px 130px 0 0 rgba(255, 87, 34, 1),
    120px 130px 0 0 rgba(255, 87, 34, 1), 130px 130px 0 0 rgba(255, 152, 0, 1),
    140px 130px 0 0 rgba(255, 152, 0, 1), 200px 130px 0 0 rgba(121, 85, 72, 1),
    60px 140px 0 0 rgba(121, 85, 72, 1), 70px 140px 0 0 rgba(121, 85, 72, 1),
    80px 140px 0 0 rgba(255, 152, 0, 1), 90px 140px 0 0 rgba(255, 87, 34, 1),
    100px 140px 0 0 rgba(255, 87, 34, 1), 110px 140px 0 0 rgba(255, 87, 34, 1),
    120px 140px 0 0 rgba(255, 87, 34, 1), 130px 140px 0 0 rgba(255, 152, 0, 1),
    140px 140px 0 0 rgba(255, 152, 0, 1), 150px 140px 0 0 rgba(255, 152, 0, 1),
    170px 140px 0 0 rgba(121, 85, 72, 1), 180px 140px 0 0 rgba(121, 85, 72, 1),
    190px 140px 0 0 rgba(121, 85, 72, 1), 80px 150px 0 0 rgba(255, 152, 0, 1),
    90px 150px 0 0 rgba(255, 87, 34, 1), 100px 150px 0 0 rgba(255, 87, 34, 1),
    110px 150px 0 0 rgba(255, 87, 34, 1), 120px 150px 0 0 rgba(255, 87, 34, 1),
    130px 150px 0 0 rgba(255, 152, 0, 1), 140px 150px 0 0 rgba(121, 85, 72, 1),
    150px 150px 0 0 rgba(121, 85, 72, 1), 160px 150px 0 0 rgba(121, 85, 72, 1),
    80px 160px 0 0 rgba(121, 85, 72, 1), 90px 160px 0 0 rgba(255, 152, 0, 1),
    100px 160px 0 0 rgba(255, 87, 34, 1), 110px 160px 0 0 rgba(255, 152, 0, 1),
    120px 160px 0 0 rgba(121, 85, 72, 1), 130px 160px 0 0 rgba(121, 85, 72, 1),
    80px 170px 0 0 rgba(121, 85, 72, 1), 90px 170px 0 0 rgba(255, 152, 0, 1),
    100px 170px 0 0 rgba(121, 85, 72, 1), 110px 170px 0 0 rgba(255, 152, 0, 1),
    60px 180px 0 0 rgba(121, 85, 72, 1), 70px 180px 0 0 rgba(121, 85, 72, 1),
    100px 180px 0 0 rgba(121, 85, 72, 1), 110px 180px 0 0 rgba(121, 85, 72, 1),
    120px 180px 0 0 rgba(121, 85, 72, 1), 130px 180px 0 0 rgba(121, 85, 72, 1),
    30px 190px 0 0 rgba(121, 85, 72, 1), 40px 190px 0 0 rgba(121, 85, 72, 1),
    50px 190px 0 0 rgba(121, 85, 72, 1), 140px 190px 0 0 rgba(121, 85, 72, 1),
    150px 190px 0 0 rgba(121, 85, 72, 1), 160px 190px 0 0 rgba(121, 85, 72, 1),
    170px 190px 0 0 rgba(121, 85, 72, 1), 10px 200px 0 0 rgba(121, 85, 72, 1),
    20px 200px 0 0 rgba(121, 85, 72, 1), 180px 200px 0 0 rgba(121, 85, 72, 1);
  height: 10px;
  width: 10px;
}
</style>
