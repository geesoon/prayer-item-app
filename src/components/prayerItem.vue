<template>
  <div class="container">
    <div class="row">
      <div :id="'heading' + prayer.id">
        <div class="col">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            class="mx-2"
            @click="toggleStatus()"
            :checked="prayer.isChecked"
          />
        </div>
      </div>
      <div class="col">
        <div
          data-toggle="collapse"
          :data-target="'#collapse' + prayer.id"
          aria-expanded="true"
          :aria-controls="'collapse' + prayer.id"
          style="cursor: pointer;"
        >
          <div class="row">
            <div class="text-wrap" style="width: 90%;">
              <p :class="deco + ' text-break'">{{prayer.title}}</p>
            </div>
            <svg
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
              class="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              @click="removePrayerItem()"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>

        <div
          :id="'collapse' + prayer.id"
          class="col collapse text-wrap"
          :aria-labelledby="'heading' + prayer.id"
          data-parent="#accordion"
        >
          <p class="text-break">
            <span>{{prayer.description}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prayer", "deco"],
  methods: {
    toggleStatus() {
      console.log("selected prayer before toggle");
      console.log(this.prayer);
      this.$emit("toggleStatus", this.prayer);
    },
    removePrayerItem() {
      console.log("remove this prayer");
      console.log(this.prayer);
      this.$emit("removePrayerItem", this.prayer);
    },
  },
};
</script>

<style scoped>
/* Decoration */
.completed {
  text-decoration: line-through;
}

.praying {
  text-decoration: none;
}

input[type="checkbox"] {
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
}

p {
  padding: 10px;
  color: #aeb6bf;
  font-size: 15px;
  background: #1b2631;
  border-radius: 5px;
  font-family: Aclonica;
}

p:hover {
  color: #1b2631;
  background: #aeb6bf;
}
</style>