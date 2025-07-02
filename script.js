let selectedType = "";
let weight = null;
let factor = null;

document.querySelectorAll(".content a").forEach(link => {
  link.onclick = function (e) {
    e.preventDefault();

    document.querySelectorAll(".content a").forEach(a => a.classList.remove("selected"));
    this.classList.add("selected");

    selectedType = this.dataset.type;
    document.getElementById("selectedType").textContent = "Selected type: " + selectedType;
    document.getElementById("dropdownButton").textContent = selectedType;

    if (selectedType === "PET") {
      weight = 100;
      factor = 1.91;
    } else if (selectedType === "HDPE") {
      weight = null;
      factor = 1.75;
    } else if (selectedType === "LDPE") {
      weight = null;
      factor = 1.5;
    } else if (selectedType === "PP") {
      weight = null;
      factor = 1.6;
    } else if (selectedType === "PVC") {
      weight = null;
      factor = 2.0;
    }
  };
});

document.getElementById("calcBtn").onclick = function () {
  const volume = parseFloat(document.getElementById("volume").value);
  const result = document.getElementById("result");

  if (!selectedType || isNaN(volume)) {
    result.textContent = "Please select a plastic type and enter number of units.";
  } else if (weight === null) {
    result.textContent = "Weight for " + selectedType + " is not available yet.";
  } else {
    const total = weight * factor * volume;
    result.textContent = "Estimated emissions: " + total.toFixed(2) + " kg CO₂e";
  }
};


  result.textContent = `Annual carbon emissions for ${volume} units of ${selectedType}: ${totalEmissions.toFixed(2)} kg CO₂e`;
}
</script>
