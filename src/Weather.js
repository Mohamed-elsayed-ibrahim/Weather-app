import "./App.css";
import BtnSelectedCity from "./BtnSelectedCity";

import { useCity } from "./CityesProvider";

// ================================ MATERIAL UI ================================
import {
  Stack,
  Container,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";

// ================================// MATERIAL UI //================================

// ==================********* MAIN FUNCTION *******==================
export default function Weather() {
  let { cityData, handleLang, handelLangText } = useCity();

  return (
    <>
      <img
        src={cityData.img}
        alt={"item.title"}
        className="cityImg"
        style={{}}
      />
      <Container
        maxWidth="sm"
        sx={{ ...styleContainer, direction: handelLangText("rtl", "ltr") }}
      >
        <Box
          className={"glassEffect"}
          sx={{
            width: 1,
            padding: "24px",
          }}
        >
          {/* ===== header =====  */}
          <Stack
            direction={"row"}
            sx={{ alignItems: "flex-end", paddingBottom: ".5rem" }}
          >
            <Typography variant="h2" sx={{ fontFamily: "inherit" }}>
              {cityData.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "inherit", margin: "0 12px" }}
            >
              {cityData.dateToDay}
            </Typography>
          </Stack>
          {/* =====// header //=====  */}
          <Divider />
          {/* ===== content ===== */}
          <Stack
            direction={"row"}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Stack
                direction={"row"}
                sx={{ alignItems: "center", color: "#fdfdfdd4" }}
              >
                <Typography sx={{ fontFamily: "inherit", fontSize: "7rem" }}>
                  {cityData.temp}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "1.5rem",
                    paddingTop: "4.25rem",
                    paddingRight: ".5rem",
                  }}
                >
                  {handelLangText("م", "C")}
                </Typography>
                <img src={cityData.icon} alt={cityData.description} />
              </Stack>
              <Typography
                variant="h5"
                sx={{
                  margin: "0 12px",
                  textAlign: "center",
                  fontFamily: "inherit",
                  fontWeight: "600",
                }}
              >
                {cityData.description}
              </Typography>
              <Stack direction={"row"} alignItems={"center"}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inherit",
                    margin: "7px 12px",
                    textAlign: "center",
                  }}
                >
                  {handelLangText("العظمي", "tempmax")} : {cityData.temp_max}
                </Typography>
                |
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "inherit",
                    margin: "7px 12px",
                    textAlign: "center",
                  }}
                >
                  {handelLangText("الصغري", "tempmin")} : {cityData.temp_min}
                </Typography>
              </Stack>
            </Box>
            {/* ===== MAIN ICON ===== */}
            <Box>
              <WbCloudyIcon
                sx={{
                  fontSize: "10rem",
                  color: "white",
                  display: { xs: "none", sm: "block" },
                }}
              />
            </Box>
            {/* =====// MAIN ICON //===== */}
          </Stack>
          {/* =====// content //===== */}
          <Divider />
          {/* ===== FOTTER BTN ===== */}
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <BtnSelectedCity
              sx={{
                color: "white",
                fontFamily: "inherit",
              }}
            />
            <Button
              variant="text"
              onClick={handleLang}
              sx={{
                color: "black",
                fontFamily: "inherit",
              }}
            >
              {handelLangText("انجليزي", "Arbic")}
            </Button>
          </Stack>
          {/* ===== //FOTTER BTN //===== */}
        </Box>
      </Container>
    </>
  );
}

let styleContainer = {
  fontFamily: "IBM",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
