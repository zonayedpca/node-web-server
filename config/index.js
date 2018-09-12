const { port } = process.env.NODE_ENV ? require('./prod') : require('./dev');

module.exports = {
  port
}
