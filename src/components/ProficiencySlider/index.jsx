import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha, Box } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

const levels = [
  {
    value: 0,
    label: "Baixo",
  },
  {
    value: 1,
    label: "Baixo/Mediano",
  },
  {
    value: 2,
    label: "Mediano",
  },
  {
    value: 3,
    label: "Mediano/Alto",
  },
  {
    value: 4,
    label: "Alto",
  },
];

export default function ProficiencySlider({ techName, techLevel }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label={techName}
        defaultValue={0}
        getAriaValueText={valuetext}
        marks={levels}
        min={levels[0].value}
        max={levels[4].value}
        slots={{ valueLabel: levels.label }}
      />
    </Box>
  );
}

function valuetext(value) {
  return `${value}°C`;
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  300: "#66B2FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B3",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Slider = styled(BaseSlider)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? blue[500] : blue[400]};
  height: 6px;
  width: 100%;
  padding: 24px 0; /* Ajuste para dar espaço para os textos abaixo */
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 6px;
    background-color: currentColor;
    opacity: 0.3;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: currentColor;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: ${theme.palette.mode === "light" ? blue[500] : blue[400]};
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;

    &:hover {
      box-shadow: 0 0 0 6px ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[300],
        0.3
      )};
    }



    &.${sliderClasses.active} {
      box-shadow: 0 0 0 8px ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[400],
        0.5
      )};
      outline: none;
      transform: scale(1.2);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 99%;
    background-color: ${theme.palette.mode === "light" ? blue[200] : blue[700]};
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: ${theme.palette.mode === "light" ? blue[500] : blue[400]};
  }

  & .${sliderClasses.markLabel} {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 12px; /* Diminui o tamanho da fonte */
    position: absolute;
    top: 50px;
    color: ${theme.palette.mode === "light" ? blue[400] : blue[200]};
    transform: translateX(-50%);
    white-space: nowrap;
  }

  & .valueLabel {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-size: 6px;
    position: relative;
    top: -2em;
    text-align: center;
    align-self: center;
  }
`
);

