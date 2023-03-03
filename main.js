// Copyright 2023 ariefsetyonugroho
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const mobileMenu = document.querySelector(".mobile_menu");
const navMenu = document.querySelector(".navigation");
let navbar = document.querySelector(".navbar_list");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.add("show_menu");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("show_menu");
});

var btn_3d = document.getElementById("btn_3d");
var btn_pcb = document.getElementById("btn_pcb");
var btn_product = document.getElementById("btn_product");
var btn_app = document.getElementById("btn_app");
var btn_rnd = document.getElementById("btn_rnd");
var prints = document.getElementById("print");
var pcb = document.getElementById("pcb");
var product_industrial = document.getElementById("product_industrial");
var app = document.getElementById("application");
var rnd = document.getElementById("rnd");

btn_3d.addEventListener("click", () => {
  prints.style.display = "flex";
  pcb.style.display = "none";
  product_industrial.style.display = "none";
  app.style.display = "none";
  rnd.style.display = "none";
});
btn_pcb.addEventListener("click", () => {
  prints.style.display = "none";
  pcb.style.display = "flex";
  product_industrial.style.display = "none";
  app.style.display = "none";
  rnd.style.display = "none";
});
btn_product.addEventListener("click", () => {
  prints.style.display = "none";
  pcb.style.display = "none";
  product_industrial.style.display = "flex";
  app.style.display = "none";
  rnd.style.display = "none";
});
btn_app.addEventListener("click", () => {
  prints.style.display = "none";
  pcb.style.display = "none";
  product_industrial.style.display = "none";
  app.style.display = "flex";
  rnd.style.display = "none";
});
btn_rnd.addEventListener("click", () => {
  prints.style.display = "none";
  pcb.style.display = "none";
  product_industrial.style.display = "none";
  app.style.display = "none";
  rnd.style.display = "flex";
});
