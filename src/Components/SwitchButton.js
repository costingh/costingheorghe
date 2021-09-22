/* import React, {useState, useEffect} from 'react';
import '../styles/SwitchButton.css';

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
    <div className="switch-container">
        <label>
            <input checked={checked} onChange={handleChange} className="switch" type="checkbox" />
            <div>
                <div></div>
            </div>
        </label>
    </div>
  );
} */

import React, {useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 200,
    height: 40,
    padding: 0,
    margin: 0,
	marginTop: '15px'
  },
  switchBase: {
    padding: 0,
    color: '#03030d',
    '&$checked': {
      transform: 'translateX(99.5px)',
      color: '#fbe0c4',
      '& + $track': {
        backgroundColor: '#03030d',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#03030d',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 100,
    height: 40,
    borderRadius: '80px',
    border: '2px solid #03030d',
  },
  track: {
    borderRadius: 30,
    border: '2px solid #03030d',
    backgroundColor: '#fbe0c4',
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