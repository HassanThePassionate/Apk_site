module.exports = {
  // other webpack config options
  module: {
    rules: [
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "videos/",
          },
        },
      },
    ],
  },
};
