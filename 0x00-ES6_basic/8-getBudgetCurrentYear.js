function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  return {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };
}
console.log(getBudgetForCurrentYear('$119,868', '$154.2 billion', '$178,479'));
// Output: { "income-2023": "$119,868", "gdp-2023": "$154.2 billion", "capita-2023": "$178,479" }

