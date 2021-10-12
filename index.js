function append_to_div(div_name, data) {
  document.getElementById(div_name).innerText += data;
}
document.getElementById("my_button")
  .addEventListener('click', function () {
    var user_name = document.getElementById("subjectname");
    var value = user_name.value.trim();
    if (!value)
      alert("Please enter subject name!");
    else
      append_to_div("listDemo", value + "\n");
    user_name.value = "";
  });