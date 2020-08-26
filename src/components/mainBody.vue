<template>
  <div class="col bg-light">
    <!-- PrayerListTitle -->
    <div class="col">
      <h4 class="font">KGC</h4>
    </div>

    <!-- AddPrayerItemInput -->
    <div class="col my-2">
      <input
        placeholder="+ ADD PRAYER ITEM"
        type="text"
        class="form-control text-center font"
        aria-label="Text input with checkbox"
        v-model="form.title"
      />
    </div>
    <div class="col my-2">
      <input
        placeholder="+ ADD DESCRIPTION"
        type="text"
        class="form-control text-center font"
        aria-label="Text input with checkbox"
        v-model="form.description"
      />
    </div>
    <button class="btn btn-success float-right mr-3 font" @click="submitForm">Add</button>

    <br />
    <br />
    <!-- Prayer list -->
    <div class="col mb-2">
      <div class="my-3">
        <h6>To Pray</h6>
      </div>
      <div id="accordion">
        <!-- Praying prayer item -->
        <div v-if="praying.length<=0 ? false : true ">
          <prayerItem
            v-for="prayer in praying"
            :key="prayer.id"
            :prayer="prayer"
            :deco="'praying'"
            class="my-2"
            @toggleStatus="toggleStatus"
          ></prayerItem>
        </div>
        <div v-else>
          <p>You have finished your prayer! Now go and add more!</p>
        </div>

        <!-- Completed Prayer Item -->
        <div class="my-3">
          <a
            style="color: black; cursor:pointer;"
            data-toggle="collapse"
            data-target="#completedSection"
            aria-expanded="true"
            aria-controls="completedSection"
          >
            <h6>Completed</h6>
          </a>
        </div>

        <div v-if="completed.length<=0 ? false : true ">
          <div id="completedSection">
            <prayerItem
              v-for="prayer in completed"
              :key="prayer.id"
              :prayer="prayer"
              :deco="'completed'"
              class="my-2"
              @toggleStatus="toggleStatus"
            ></prayerItem>
          </div>
        </div>
        <div v-else>
          <p>No completed prayer. =(</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import prayerItem from "./prayerItem";

export default {
  data() {
    return {
      id: 7,
      form: {
        title: "",
        description: "",
      },
      prayers: [
        {
          id: 1,
          title: "Pray for the saints for steadfastness",
          description: "Pray for much wisdom and strength",
          status: "on-going",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: false,
        },
        {
          id: 2,
          title: "Pray for the prayer meeting and bible reading",
          description: "Pray for much wisdom and strength",
          status: "on-going",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: false,
        },
        {
          id: 3,
          title: "Pray for the prayer meeting and bible reading",
          description: "Pray for much wisdom and strength",
          status: "on-going",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: false,
        },
        {
          id: 4,
          title: "Pray for the prayer meeting and bible reading",
          description: "Pray for much wisdom and strength",
          status: "completed",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: true,
        },
        {
          id: 5,
          title: "Pray for the prayer meeting and bible reading",
          description: "Pray for much wisdom and strength",
          status: "completed",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: true,
        },
        {
          id: 6,
          title: "Pray for the prayer meeting and bible reading",
          description: "Pray for much wisdom and strength",
          status: "completed",
          dataCreated: "20-8-2020",
          tag: "personal",
          isChecked: true,
        },
      ],
    };
  },
  components: {
    prayerItem,
  },
  computed: {
    completed() {
      var completed = this.prayers.filter((prayer) => {
        return prayer.status == "completed";
      });
      // console.log(completed);
      return completed;
    },
    praying() {
      var praying = this.prayers.filter((prayer) => {
        return prayer.status == "on-going";
      });
      // console.log(praying);
      return praying;
    },
  },
  methods: {
    submitForm() {
      this.form.id = this.id;
      this.id++;
      this.form.isChecked = false;
      this.form.tag = "personal";
      this.dateCreated = "20-08-2020";
      this.form.status = "on-going";
      this.prayers.push(this.form);
      this.form = {};
    },
    toggleStatus(value) {
      if (this.prayers[value].status === "on-going") {
        // this.updateStatus(value, "on-going");
        // this.praying.find((prayer) => prayer.id == value).status = "completed";
        this.prayers[value].status = "completed";
      } else {
        this.prayers[value].status = "on-going";
        // this.completed.find((prayer) => prayer.id == value).status = "on-going";
        // this.updateStatus(value, "completed");
      }
      this.prayers[value].isChecked = !this.prayers[value].isChecked;
    },
  },
};
</script>

<style>
.font {
  color: black;
  font-family: Aclonica;
}
</style>