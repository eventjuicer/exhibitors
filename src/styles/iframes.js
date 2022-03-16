const styles = {
  beforeContainer: {
    position: 'absolute',
    zIndex: 101,
    boxShadow: 'inset 0px 0px 5px 1px rgba(0,0,0,0.65)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none'
  },

  container: {
    margin: 10,
    position: 'relative'
  },

  iframe: {
    display: 'block',
    position: 'relative',
    zIndex: 100,
    width: 650,
    minHeight: 300,
    borderWidth: 0
  },

  newsletter: {
    padding: 0,
    margin: 10
  }
};

export default styles;
