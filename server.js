const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 10000;

// 静的ファイル
app.use(express.static(path.join(__dirname, "public")));

// ルートにアクセスが来たら index.html を返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// テスト用 API
app.get("/api/data", (req, res) => {
  res.json({
    "2026-01-05": "今日はテストデータです",
    "2026-01-06": "明日のテストデータ"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
