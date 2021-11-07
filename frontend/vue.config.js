module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost/api/",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
