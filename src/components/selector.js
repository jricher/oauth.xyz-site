import React from 'react'

import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'



const Selector = ({onChange, label, selected, all}) => {
  return (
    <ToggleButtonGroup name={label} value={all ? "" : selected} onChange={onChange} size="sm">
      <ToggleButton variant="link" disabled value="label">{label}: </ToggleButton>
      <ToggleButton variant={all ? "warning" : "primary"} style={{borderTopLeftRadius: "40%", borderBottomLeftRadius: "40%"}} value="full">Full</ToggleButton>
      <ToggleButton variant={all ? "warning" : "primary"} value="handle">Handle</ToggleButton>
      <ToggleButton variant={all ? "warning" : "primary"} style={{borderTopRightRadius: "40%", borderBottomRightRadius: "40%"}} value="omit">Omit</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Selector;