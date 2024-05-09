function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("temperatureInput").value);
    var unit = document.getElementById("unitSelect").value;
    var result;
  
    if (isNaN(inputTemp)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    if (unit === "celsius") {
      result = (inputTemp * 9/5) + 32;
      document.getElementById("resultArea").innerHTML = result.toFixed(2) + " Fahrenheit";
    } else if (unit === "fahrenheit") {
      result = (inputTemp - 32) * 5/9;
      document.getElementById("resultArea").innerHTML = result.toFixed(2) + " Celsius";
    } 
    // Add conversion for Kelvin if needed
  }
  