<template>
  <div class="col">
    <div
      v-show="this.praying.length<=0 && this.prayed.length<=0? false: true"
      class="animate__animated animate__fadeIn"
    >
      <section class="bg-light px-2 py-1 my-2 rounded">
        <div class="my-3">
          <h6 class="font">To Pray</h6>
        </div>

        <div id="accordion">
          <div v-if="praying.length<=0 ? false : true ">
            <prayerItem
              v-for="prayer in praying"
              :key="prayer.id"
              :prayer="prayer"
              :deco="'praying'"
              class="my-2"
              @toggleStatus="toggleStatus"
              @removePrayerItem="removePrayerItem"
            ></prayerItem>
          </div>
          <div v-else>
            <p>You have finished your prayer! Now go and add more!</p>
          </div>
          <div>
            <button v-show="!addItemMode" class="btn btn-dark font" @click="addItemMode = true">Add</button>
            <addPrayerItem
              v-if="addItemMode"
              @newPrayerItem="submitForm"
              @cancelAdd="addItemMode = !addItemMode"
            ></addPrayerItem>
          </div>
        </div>
      </section>
      <section class="bg-light px-2 py-1 my-2 rounded">
        <div id="accordion">
          <div class="my-3">
            <a
              style="color: black; cursor:pointer;"
              data-toggle="collapse"
              data-target="#completedSection"
              aria-expanded="true"
              role="button"
              aria-controls="completedSection"
            >
              <h6 class="font">Completed</h6>
            </a>
          </div>

          <div v-if="prayed.length<=0 ? false : true ">
            <div class="collapse show" id="completedSection">
              <prayerItem
                v-for="(prayer, index) in prayed"
                :key="index"
                :prayer="prayer"
                :deco="'completed'"
                class="my-2"
                @toggleStatus="toggleStatus"
                @removePrayerItem="removePrayerItem"
              ></prayerItem>
            </div>
          </div>
          <div v-else>
            <p>
              No completed prayer.
              <br />=(
            </p>
          </div>
        </div>
      </section>
    </div>
    <div
      v-show="this.praying.length>0 || this.prayed.length>0? false: true"
      class="my-4 animate__animated animate__fadeIn"
    >
      <h6 class="mb-4 font">You don't have any prayer item yet. Add one!</h6>
      <input
        type="text"
        placeholder="title"
        class="form-control text-left font my-2"
        v-model="form.title"
      />
      <p></p>
      <input
        type="text"
        placeholder="description"
        class="form-control text-left font my-2"
        v-model="form.description"
      />
      <p></p>
      <button class="btn btn-dark float-right font" @click="verifyInput">Add</button>
    </div>
  </div>
</template>

<script>
import prayerItem from "./prayerItem";
import addPrayerItem from "./addPrayerItem";
// import toPray from "../data/toPray.json";
// import donePray from "../data/donePray.json";

export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
      },
      id: 0,
      praying: [],
      prayed: [],
      addItemMode: false,
      showPrayerSection: true,
    };
  },
  components: {
    prayerItem,
    addPrayerItem,
  },
  methods: {
    verifyInput() {
      if (this.form.title === "" && this.form.description != "") {
        alert("Please add prayer title!");
      } else if (this.form.description === "" && this.form.title != "") {
        alert("Please add prayer description!");
      } else if (this.form.title === "" && this.form.description === "") {
        alert("Please add both prayer title and description!");
      } else this.submitForm(this.form);
    },
    submitForm(form) {
      this.addItemMode = false;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "-" + mm + "-" + yyyy;

      form.dateCreated = today;
      form.id = this.id;
      this.id++;
      form.isChecked = false;
      console.log(form);
      this.praying.push(form);
      console.log(this.praying);
      this.showPrayerSection = true;
      this.form = {};
    },
    toggleStatus(value) {
      var index;
      if (value.isChecked == true) {
        index = this.prayed.findIndex((prayer) => prayer.id === value.id);
        console.log("INDEX " + index);
        this.prayed[index].isChecked = false;

        setTimeout(() => {
          var tempPrayed = this.prayed.splice(index, 1);
          console.log(tempPrayed);
          this.praying.push(...tempPrayed);
        }, 500);

        // logging
        console.log("praying");
        console.log(this.praying);
        console.log("prayed");
        console.log(this.prayed);
      } else {
        index = this.praying.findIndex((prayer) => prayer.id === value.id);
        console.log("INDEX " + index);
        this.praying[index].isChecked = true;

        setTimeout(() => {
          var tempPraying = this.praying.splice(index, 1);
          console.log(tempPraying);
          this.prayed.push(...tempPraying);
        }, 500);

        // logging
        console.log("praying");
        console.log(this.praying);
        console.log("prayed");
        console.log(this.prayed);
      }
    },
    removePrayerItem(value) {
      if (value.isChecked === false) {
        var indexPraying = this.praying.findIndex(
          (prayer) => prayer.id == value.id
        );
        console.log(indexPraying);
        this.praying.splice(indexPraying, 1);
      } else if (value.isChecked == true) {
        var indexPrayed = this.prayed.findIndex(
          (prayer) => prayer.id == value.id
        );
        console.log(indexPrayed);
        this.prayed.splice(indexPrayed, 1);
      }
    },
  },
};
</script>

<style>
.font {
  font-family: Aclonica;
}
</style>