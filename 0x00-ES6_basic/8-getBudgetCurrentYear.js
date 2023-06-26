const getCurrentYear = () => (new Date()).getFullYear(); // returns current year as number type 
export default ({
  [ 'income-' + getCurrentYear() ] : income, 
  [ 'gdp-' + getCurrentYear() ]     : gdp,     
  [ 'capita-' + getCurrentYear() ]  : capita 
});  
// Returns an Object with keys "income-current_year", "gdp-current_year" & "capita-current_year". Values are passed through from respective parameters of same name.
