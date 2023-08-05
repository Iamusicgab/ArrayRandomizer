const output = document.getElementById("output");
const copy = document.getElementById("copy");

$("#go").click(function () {
  var lines = $("#input").val().split(/\n/);
  var output = [];
  var outputText = [];
  var randomizedOutput = [];

  for (var i = 0; i < lines.length; i++) {
    if (/\S/.test(lines[i])) {
      outputText.push('"' + $.trim(lines[i]) + '"');
      output.push($.trim(lines[i]));
    }
  }

  randomize(output);

  //   console.log(output);
  //   $("#input").val(output);
  //   $(".alert").removeClass("alert-info").addClass("alert-success").text("Done!");
});

const randomize = (values) => {
  let index = values.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  console.log(values);
  output.innerHTML = values.join("\n");
};

const copyToClipboard = () => {
  const str = output.innerHTML;
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

copy.addEventListener("click", copyToClipboard);
