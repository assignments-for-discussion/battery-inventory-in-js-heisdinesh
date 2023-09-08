const assert = require("assert");

function countBatteriesByHealth(presentCapacities) {
  let counts = {
    healthy: 0,
    exchange: 0,
    failed: 0,
  };

  // Rated capacity of a new battery
  console.log(presentCapacities);
  const ratedCapacity = 120;

  // Loop through the present capacities of batteries
  for (const capacity of presentCapacities) {
    // Calculate the state-of-health (SoH) as a percentage
    const soh = (capacity / ratedCapacity) * 100;

    // Classify the battery based on its SoH and update counts
    if (soh > 80) {
      counts.healthy += 1;
    } else if (soh >= 65 && soh <= 80) {
      counts.exchange += 1;
    } else {
      counts.exchange += 1;
    }
  }

  return counts;
}

function testBucketingByHealth() {
  console.log("Counting batteries by SoH...");
  const presentCapacities = [115, 118, 80, 95, 91, 77];
  const counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  //   console.log(counts);
  console.log("Done counting :)");
}

testBucketingByHealth();
