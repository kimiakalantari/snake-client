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
  if (key === 'w') {
    connection.write('Move: up');
  }

  if (key === 's') {
    connection.write('Move: down');
  }

  if (key === 'a') {
    connection.write('Move: left');
  }

  if (key === 'd') {
    connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: I can\'t be defeated!');
  }

  if (key === '2') {
    connection.write('Say: Nomnomnom');
  }

  if (key === '3') {
    connection.write('Say: SsSssSs');
  }

  if (key === '4') {
    connection.write('Say: LMAO');
  }

  if (key === '5') {
    connection.write('Say: bye');
  }

  if (key === '6') {
    connection.write('Say: HAHA you died');
  }

};
  
module.exports = { setupInput };