<template>
  <!-- <SidebarMenu :menu="menu"></SidebarMenu> -->
  <div>
    <button class="openbtn" @click="openNav()">☰</button>
    <div id="mySidebar" class="sidebar">
      <div class="pl-4">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">×</a>
        <ul class="col">
          <div class="row">
            <div>
              <h6>Hiew Gee Soon</h6>
              <small>hiewgeesoon1997@hotmail.com</small>
            </div>
            <!-- <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </div>-->
          </div>
        </ul>
        <hr />
        <h6 class="my-2">Prayer List</h6>
        <ul class="nav flex-column my-1" id="prayerList">
          <li class="nav-item">
            <a class="nav-link">KGC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">BTGC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">JBGC</a>
          </li>
        </ul>
        <ul class="nav flex-column my-4">
          <li class="nav-item">
            <button class="btn btn-info">+ Add new list</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },

    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
  },
};
</script>

<style>
#prayerList {
  cursor: pointer;
}

#prayerList :hover {
  background-color: lightsteelblue;
}

.sidebar {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: lightgray;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left 0.5s;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>