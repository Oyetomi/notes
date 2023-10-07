import { COUNTRIES } from "./data";
import React from "react";

function CountryPicker() {
  const [country, setCountry] = React.useState("");

  return (
    <form>
      <fieldset>
        <legend>Shipping Info</legend>
        <label htmlFor="country">Country:</label>
        <select
          required
          id="country"
          name="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option value="">- Select Country -</option>
          <optgroup label="Countries">
            {Object.entries(COUNTRIES).map(([key, country]) => (
              <option key={key}>{country}</option>
            ))}
          </optgroup>
        </select>
      </fieldset>

      <p className="country-display">Selected country: {country}</p>

      <button>Submit</button>
    </form>
  );
}

export default CountryPicker;
