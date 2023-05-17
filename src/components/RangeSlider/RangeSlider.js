import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { MyContext } from '../../MyContext';

function valueText(value) {
    return `${value}$`;
}

const minDistance = 1;

const RangeSlider = () => {
    const { highestPrice, value, setValue, setLowestPriceInRange, setHighestPriceInRange, categories} = useContext(MyContext);
    console.log("highest price range slider", highestPrice)
    console.log("value[0]", value[0], "value[1]", value[1])
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            const low = Math.min(newValue[0], value[1] - minDistance);
            setValue([low, value[1]]);
            setLowestPriceInRange(low);
        } else {
            const high = Math.max(newValue[1], value[0] + minDistance);
            console.log("set highest", high)
            setValue([value[0], high]);
            setHighestPriceInRange(high);
        }
    };

    return (
        <Box sx={{ width: 300 }} className="rangeSlider">
            <Typography id="input-slider">
                Price Range
            </Typography>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueText}
                min={1}
                max={highestPrice}
            />
        </Box>
    )
}

export default RangeSlider