<script>
  const emissionFactors = {
    PET: 1.91,
    HDPE: 1.42,
    PVC: 2.68,
    LDPE: 1.81,
    PP: 1.25
  };

  function calculateEmissions() {
    const type = document.getElementById("plasticType").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (!type || isNaN(weight)) {
      result.textContent = "Please select a plastic type and enter a valid weight.";
      return;
    }

    const emissionFactor = emissionFactors[type];
    const emissions = weight * emissionFactor;

    result.textContent = `Estimated carbon emissions for ${weight} kg of ${type}: ${emissions.toFixed(2)} kg CO₂e`;
  }
</script>
