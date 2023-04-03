module.exports = {
  apps : [{
    name : "illuminate-service",
    script: "./app.js",
    env: {
      "PORT": 8889
    },
    interpreter: "/usr/bin/node",
    exec_mode: "cluster",
    instances: "max"
  }]
}
