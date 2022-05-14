const path = require("path");

module.exports = {
  //어떤 파일로 진입해서
  entry: "./src/main.js",
  //어떤 파일로 내보내 줄 것인가
  output: {
    path: path.resolve(__dirname, "dist"),
    //출력할 파일 이름. 생략하게 되면 entry의 파일이름과 동일한 이름으로 출력함.
  },
};
