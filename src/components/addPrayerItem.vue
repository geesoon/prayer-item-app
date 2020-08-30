<template>
  <div class="col">
    <div class="row">
      <button v-show="!finishAddMode" class="btn btn-secondary mr-2" @click="submitForm">Done</button>
      <button v-show="!finishAddMode" class="btn btn-dark" @click="cancel">Cancel</button>
    </div>

    <div>
      <input
        type="text"
        placeholder="Prayer title"
        class="form-control text-left font my-2"
        v-model="form.title"
      />
      <input
        type="text"
        placeholder="Prayer description"
        class="form-control text-left font my-2"
        v-model="form.description"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finishAddMode: false,
      form: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.form.title === "" && this.form.description != "") {
        alert("Please add prayer title!");
      } else if (this.form.description === "" && this.form.title != "") {
        alert("Please add prayer description!");
      } else if (this.form.title === "" && this.form.description === "") {
        alert("Please add both prayer title and description!");
      } else {
        this.finishAddMode = true;
        this.$emit("newPrayerItem", this.form);
        this.finishAddMode = false;
      }
    },
    cancel() {
      this.finishAddMode = true;
      this.$emit("cancelAdd");
      this.form.title = "";
      this.form.description = "";
      this.finishAddMode = false;
    },
  },
};
</script>

<style>
input {
  padding: 10px;
  color: #aeb6bf;
  font-size: 15px;
  background: #1b2631;
  border-radius: 5px;
  font-family: Aclonica;
}

input:hover {
  color: #1b2631;
  background: #aeb6bf;
}
</style>