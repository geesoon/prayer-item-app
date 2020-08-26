<template>
  <transition name="slide" mode="out-in">
    <div class="row">
      <div :id="'heading' + prayer.id">
        <div class="row mb-0">
          <input
            id="check"
            type="checkbox"
            aria-label="Checkbox for following text input"
            class="mx-2"
            @click="toggleStatus(prayer.id)"
            :checked="prayer.isChecked"
          />
          <label for="check">
            <div class="mark"></div>
          </label>
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
          <p :class="deco" @click="editTitleMode = !editTitleMode">
            <span>{{prayer.title}}</span>
          </p>
        </div>

        <div
          :id="'collapse' + prayer.id"
          class="collapse ml-4"
          :aria-labelledby="'heading' + prayer.id"
          data-parent="#accordion"
        >
          <p>
            <span>{{prayer.description}}</span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["prayer", "deco"],
  methods: {
    toggleStatus(id) {
      setTimeout(() => {
        this.$emit("toggleStatus", id - 1);
      }, 1000);
    },
  },
  created() {
    console.log("rendered", this.prayer.id);
  },
};
</script>

<style scoped>
/* Transition */
.slide-enter-active {
  animation: slide-in 500ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 500ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opcaity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

/* Decoration */
.completed {
  text-decoration: line-through;
}

.praying {
  text-decoration: none;
}

label {
  display: inline-block;
  cursor: pointer;
  margin: 0 calc(100px * 0.25);
  width: 50px;
  height: 50px;
  border: calc(5px * 0.5) solid #ef5350;
  border-radius: 25%;
  transition: 1000ms 50ms ease-in;
}

label:hover {
  border-color: #cddc39;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  left: -500px;
}

.mark {
  position: relative;
  right: calc(10px * -1);
  top: calc(10px * -1);
  width: calc(10px * 1.11);
  height: calc(10px * 3.5);
  border-right: calc(10px * 0.55) solid red;
  border-bottom: calc(10px * 0.55) solid red;
  transform: rotate(45deg) scale(0);
  opacity: 0;
  transition: all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.5);
}

.mark:before {
  content: "";
  position: absolute;
  left: calc(10px * -0.225);
  bottom: calc(10px * -0.55);
  border: calc(10px * 0.275) solid red;
  border-radius: 50%;
}

.mark:after {
  content: "";
  position: absolute;
  right: calc(10px * -0.545);
  top: calc(10px * -0.31);
  border: calc(10px * 0.275) solid red;
  border-radius: 50%;
}

input[type="checkbox"]:checked + label .mark {
  opacity: 1;
  transform: rotate(50deg) scale(1);
}

input[type="checkbox"]:focus + label {
  animation: 400ms linear cb-pop;
}

@keyframes cb-pop {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.9);
  }
  66% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
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