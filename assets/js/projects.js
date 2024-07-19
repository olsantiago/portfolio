var items = [
  {
    key: "1",
    title: "Test1",
    content: "Test2"
  },
  {
    key: "1",
    title: "Test1",
    content: "Test2"
  },
]

function createProjects() {
  var tabs = document.querySelectorAll("#v-pills-tab li a");
  tabs.forEach((element) => console.log(element));
}

createProjects();
