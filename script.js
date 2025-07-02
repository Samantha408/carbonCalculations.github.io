<script>
const PETw = 100;
const PETef = 1.91;

const HDPEw = null;
const HDPEef = 1.75;

const LDPEw = null;
const LDPEef = 1.5;

const PPw = null;
const PPef = 1.6;

const PVCw = null;
const PVCef = 2.0;

document.querySelectorAll(".content a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    selectedType = this.dataset.type;
    document.getElementById("selectedType").textContent = `Selected type: ${selectedType}`;
  });
});

function calculateEmissions() {
  const volume = parseFloat(document.getElementById("volume").value);
  const result = document.getElementById("result");

  if (!selectedType || isNaN(volume)) {
    result.textContent = "Please select a plastic type and enter number of units.";
    return;
  }

  let weight = 0;
  let ef = 0;

  if (selectedType === "PET") {
    weight = PETw;
    ef = PETef;
  } else if (selectedType === "HDPE") {
    weight = HDPEw;
    ef = HDPEef;
  } else if (selectedType === "LDPE") {
    weight = LDPEw;
    ef = LDPEef;
  } else if (selectedType === "PP") {
    weight = PPw;
    ef = PPef;
  } else if (selectedType === "PVC") {
    weight = PVCw;
    ef = PVCef;
  }

  const totalEmissions = weight * ef * volume;

  result.textContent = `Annual carbon emissions for ${volume} units of ${selectedType}: ${totalEmissions.toFixed(2)} kg CO₂e`;
}
</script>
