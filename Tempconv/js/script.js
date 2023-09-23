document.getElementById("convert").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromScale = document.getElementById("fromScale").value;
  const toScale = document.getElementById("toScale").value;

  let result;
  if (fromScale === "celsius" && toScale === "fahrenheit") {
    result = (temperature * 9) / 5 + 32;
  } else if (fromScale === "celsius" && toScale === "kelvin") {
    result = temperature + 273.15;
  } else if (fromScale === "fahrenheit" && toScale === "celsius") {
    result = ((temperature - 32) * 5) / 9;
  } else if (fromScale === "fahrenheit" && toScale === "kelvin") {
    result = ((temperature - 32) * 5) / 9 + 273.15;
  } else if (fromScale === "kelvin" && toScale === "celsius") {
    result = temperature - 273.15;
  } else if (fromScale === "kelvin" && toScale === "fahrenheit") {
    result = ((temperature - 273.15) * 9) / 5 + 32;
  } else {
    result = temperature;
  }

  document.getElementById("result").value = result.toFixed(2);
});
