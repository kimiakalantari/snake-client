const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: KKL");
  });
  

  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};


module.exports = { connect };