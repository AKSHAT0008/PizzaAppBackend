function showThis() {
    console.log(this);
  }
  
  showThis(); // In non-strict mode, logs the global object. In strict mode, logs undefined.
  