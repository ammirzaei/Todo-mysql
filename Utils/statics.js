const path = require("path");

const rootDir = require('./path');

const express = require("express");

module.exports.setStatics = (app) => {
  app.use(express.static(path.join(rootDir, "Public")));
  app.use(
    express.static(
      path.join(rootDir, "node_modules", "bootstrap-v4-rtl", "dist")
    )
  );
  app.use(
    express.static(path.join(rootDir, "node_modules", "font-awesome"))
  );
};
