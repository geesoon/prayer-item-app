<template>
  <div class="col">
    <div v-show="this.praying.length<=0 && this.prayed.length<=0? false: true">
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
          <button v-if="!addItemMode" class="btn btn-light font" @click="addItemMode = true">Add</button>
          <addPrayerItem
            v-if="addItemMode"
            @newPrayerItem="submitForm"
            @cancelAdd="addItemMode = !addItemMode"
          ></addPrayerItem>
        </div>

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
          <p>No completed prayer. =(</p>
        </div>
      </div>
    </div>
    <div v-show="this.praying.length>0 || this.prayed.length>0? false: true">
      <h6 class="font">You don't have any prayer item yet. Add one!</h6>
      <input
        type="text"
        placeholder="Add prayer title"
        class="form-control text-left font my-2"
        v-model="form.title"
      />
      <input
        type="text"
        placeholder="Add prayer description"
        class="form-control text-left font my-2"
        v-model="form.description"
      />
      <button class="btn btn-success float-right" @click="submitForm(form)">Add</button>
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
    submitForm(form) {
      this.addItemMode = false;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "-" + mm + "-" + yyyy;

      form.dateCreated = today;
      form.id = this.praying.length + 1;
      form.isChecked = false;
      console.log(form);
      this.praying.push(form);
      console.log(this.praying);
      this.showPrayerSection = true;
      this.form = {};
    },
    toggleStatus(value) {
      if (value.isChecked === true) {
        var indexPrayed = this.prayed.findIndex(
          (prayer) => prayer.id == value.id
        );
        console.log(indexPrayed);
        this.prayed[indexPrayed].isChecked = false;

        setTimeout(() => {
          var tempPrayed = this.prayed.splice(indexPrayed, 1);
          this.praying.push(...tempPrayed);
        }, 500);

        // logging
        console.log("praying");
        console.log(this.praying);
        console.log("prayed");
        console.log(this.prayed);
      } else if (value.isChecked === false) {
        var indexPraying = this.praying.findIndex(
          (prayer) => prayer.id == value.id
        );
        console.log(indexPraying);
        this.praying[indexPraying].isChecked = true;

        setTimeout(() => {
          var tempPraying = this.praying.splice(indexPraying, 1);
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
  font-weight: bold;
  font-family: Aclonica;
}
</style>