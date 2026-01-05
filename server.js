const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

app.use(express.static("public")); // index.htmlやJS/CSSが入ったフォルダ

// テスト用 API データ
app.get("/api/data", (req, res) => {
  res.json({
    "2026-01-05": "今日はテストデータです",
    "2026-01-06": "明日のテストデータ"
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
