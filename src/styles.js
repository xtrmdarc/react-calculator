const styles = {};

styles.calculator = {
  width: 700,
  display: 'flex',
  flexDirection: 'column',
};

styles.display = {
  display: 'flex',
  backgroundColor: 'gray',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 10,
  fontSize: 25,
  fontFamily: 'sans-serif',
}

styles.panel = {
  display: 'flex',
  flexDirection: 'column',
}

styles.rowPanel = {
  height: 100,
  display: 'flex',
}

styles.button = {
  width: '25%',
  textAlign: 'center',
  color: 'black',
  border: 'none',
  outline: 'none',
  border: '1px solid #cbccce',
}

export default styles;