import React from 'react';
import Asidelogin from "../src/Asidelogin"

import { FormGroup, TextInput,Button } from 'carbon-components-react';

function App() {
  return (
    <div style={{padding:"15rem"}}>
      
<div>
      <div>Register
      </div>
      <div>
        Already have an account? Log in
      </div>
      </div>
      <FormGroup style={{display:"flex", justifyContent:"space-around"}}>
      <TextInput
        full
        id="test2"
        invalidText="A valid value is required"
        labelText="First Name"

        // placeholder="Placeholder text"
      />
        <TextInput
        
        id="test2"
        invalidText="A valid value is required"
        labelText="Last Name"

        // placeholder="Placeholder text"
      />
    </FormGroup>
   
    
<FormGroup  style={{display:"flex", justifyContent:"space-around"}}>
<TextInput
  
  id="test2"
  invalidText="A valid value is required"
  labelText="Company"
  // placeholder="Placeholder text"
/>
<TextInput
  
  id="test2"
  invalidText="A valid value is required"
  labelText="I am a"
  // placeholder="Placeholder text"
/>
</FormGroup>
<FormGroup  style={{display:"flex", justifyContent:"space-around"}}>
<TextInput
  
  id="test2"
  invalidText="A valid value is required"
  labelText="Email"
  // placeholder="Placeholder text"
/>
<TextInput
  
  id="test2"
  invalidText="A valid value is required"
  labelText="Password"
  // placeholder="Placeholder text"
/>
</FormGroup>
 <Button kind="secondary" style={{padding:"1rem 29rem 1rem 16rem", backgroundColor:"cadetblue"}}>
Continue to free account
</Button>
<div style={{marginTop:"2rem"}}>
  By creating a Storobes account,you  consent to and fully accept our Privacy Policy. Terms of Service apply.    
</div>
</div>


  );
}

export default App;
