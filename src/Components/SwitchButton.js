import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 200,
    height: 40,
    padding: 0,
    margin: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX((99.5px)',
      color: '#03030d',
      '& + .MuiSwitch-track': {
        backgroundColor: '#03030d',
        opacity: 1,
        border: 'none',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function SwitchButton({checked, setChecked}) {
    const [loading, setLoading] = useState(true);

    const handleChange = (event) => {
      setChecked(!checked);
  
      if(!loading) {
        const element = document.querySelector('.dynamicText');
        if(!event.target.checked) {
          element.innerHTML = 'Skills';
          element.style.color = '#fbe0c4';
        } else {
          element.innerHTML = 'Tools';
          element.style.color = '#333';
        }
      }
    };
  
    useEffect(() => {
        setLoading(false);
        const thumb = document.querySelector('.MuiSwitch-thumb');
        const element = document.createElement("p");
        let text = document.createTextNode("Skills");
        element.appendChild(text);
        thumb.appendChild(element);
    
        // styling
        element.classList.add('dynamicText');
        element.style.color = '#fbe0c4';
        element.style.marginTop = '5px';	
      }, []);
    
  return (
    <IOSSwitch checked={checked} onChange={handleChange} name="checked" inputProps={{ 'aria-label': 'Switch A' }} />
  );
}