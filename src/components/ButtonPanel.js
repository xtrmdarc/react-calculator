import React from 'react';
import Button from './Button';
import Styles from '../styles';

const ButtonPanel = () => (
  <div style={Styles.panel}>
    <div style={Styles.rowPanel}>
      <Button btnName="AC" wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="+/-"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="%"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="÷"  wide={false} />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="7"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="8"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="9"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="X"  wide={false} />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="4"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="5"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="6"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="-"  wide={false} />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="1"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="2"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="3"  wide={false} color={{backgroundColor: '#e0e0e0'}}/>
      <Button btnName="+"  wide={false} />
    </div>
    <div style={Styles.rowPanel}>
      <Button btnName="0"  wide={true} color={{backgroundColor: '#e0e0e0'}}  />
      <Button btnName="."  wide={false} color={{backgroundColor: '#e0e0e0'}} />
      <Button btnName="="  wide={false}  />
    </div>
  </div>
);

export default ButtonPanel;
