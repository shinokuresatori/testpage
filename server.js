const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

// 静的ファイルを配信
app.use(express.static("public"));

// テスト用 API
app.get("/api/data", (req, res) => {
  res.json({
    "2026-01-05": "今日はテストデータです",
    "2026-01-06": "明日のテストデータ",
    "2026-01-07": "さらに翌日もテストデータ"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
