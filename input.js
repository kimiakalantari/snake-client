let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};
  
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'W') {
    connection.write('Move: up');
  }

  if (key === 'S') {
    connection.write('Move: down');
  }

  if (key === 'A') {
    connection.write('Move: left');
  }

  if (key === 'D') {
    connection.write('Move: right');
  }

};
  
module.exports = { setupInput };