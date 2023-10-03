import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

import { useCity } from "./CityesProvider";

let cityes = [
  {
    id: 1,
    name: "cairo",
    arbicName: "القاهرة",
  },
  {
    id: 2,
    name: "makka",
    arbicName: "مكة",
  },
  {
    id: 3,
    name: "dubai",
    arbicName: "دبي",
  },
  {
    id: 4,
    name: "london",
    arbicName: "لندن",
  },
  {
    id: 5,
    name: "washington",
    arbicName: "واشنطن",
  },
  {
    id: 6,
    name: "moscow",
    arbicName: "موسكو",
  },
];

export default function BtnSelectedCity() {
  let { selectedCity, handelSelectedCity, handelLangText } = useCity();

  const handleChange = (event) => {
    handelSelectedCity(event.target.value);
  };

  let btnCitys = cityes.map((city) => {
    return (
      <MenuItem key={city.id} value={city.name} sx={{ fontFamily: "IBM" }}>
        {handelLangText(city.arbicName, city.name)}
      </MenuItem>
    );
  });

  return (
    <Box sx={{ minWidth: 120, direction: "rtl" }}>
      <FormControl fullWidth sx={{ fontFamily: "IBM" }}>
        <InputLabel id="btn-city-label" sx={{ fontFamily: "inherit" }}>
          {handelLangText("المدينة", "city")}
        </InputLabel>
        <Select
          labelId="btn-city-label"
          id="demo-simple-select"
          value={selectedCity.name}
          label="Age"
          onChange={handleChange}
          sx={{ fontFamily: "inherit" }}
        >
          {btnCitys}
        </Select>
      </FormControl>
    </Box>
  );
}
