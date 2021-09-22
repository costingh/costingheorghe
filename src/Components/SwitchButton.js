
import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 200,
    height: 40,
    padding: 0,
    margin: 0,
    marginTop: '15px',
  },
  switchBase: {
    padding: 0,
    color: '#f05d7b',
    '&$checked': {
      transform: 'translateX(99.5px)',
      color: '#f2f4f9',
      '& + $track': {
        background: '#f05d7b',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#03030d',
      border: '6px solid #f05d7b',
    },
  },
  thumb: {
    width: 100,
    height: 40,
    borderRadius: '80px',
    border: '2px solid #f05d7b',
  },
  track: {
    borderRadius: 30,
    background: '#f2f4f9',
    border: '2px solid #f05d7b',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


export default function SwitchButton({checked, setChecked}) {
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setChecked(!checked);

    if(!loading) {
      const element = document.querySelector('.dynamicText');
      if(!event.target.checked) {
        element.innerHTML = 'Skills';
        element.style.color = '#f2f4f9';
      } else {
        element.innerHTML = 'Tools';
        element.style.color = '#f05d7b';
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
    element.style.fontWeight = '600';
    element.style.letterSpacing = '1.6px';
    element.style.color = '#f2f4f9';
    element.style.marginTop = '5px';	
  }, []);

  return (
    <IOSSwitch checked={checked} onChange={handleChange} name="checked" inputProps={{ 'aria-label': 'Switch A' }} />
  );
}