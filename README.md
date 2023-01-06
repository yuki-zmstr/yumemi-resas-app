# 株式会社ゆめみフロンドエンド提出課題

## 開発環境の構築

```Bash
git clone https://github.com/yuki-zmstr/yumemi-resas-app.git
cd yumemi-resas-app
npm ci
```

## 環境変数の設定

ルートディレクトリに `.env.development.local`　を作成し、[RESAS API](https://opendata.resas-portal.go.jp/) にて APIKEY を取得してください。

```bash
# .env.development.local内
REACT_APP_API_KEY=取得したAPIKEYを入力
```

## 起動方法

```bash
npm start
```

## Format, Lint チェック

```bash
npm format
npm format-test #修正せずテストだけしたい場合
npm lint
npm lint-test #修正せずテストだけしたい場合
```

## テスト

```bash
npm test
```

## 詰まった点

1. api の呼び出しのテストコードを書くところで詰まっています。詳しくは `ChoosePrefectures.test.jsx` 内にコメントを残しています。  
   → 追記：1/6/2023。`async/await` と `screen.findByText` を使うことで、都道府県データの fetch をテストすることができました。ただ、人口グラフの fetch のテストは未だ模索中です。上記のコメントは削除致しました。
2. 都道府県ボックスを連打した時、state のアップデートが追いつきません。それによりグラフの描画も追いつきません。  
   → これら２点、ぜひ相談させてください！勉強したいので。

## 改善点

1. 地方ごとに、Select All ボタンと Clear All ボタンを追加。
2. 描画ボタンを追加することで、チェックを入れたり外したりするたびにグラフが変わらないようにする。
3. Custom Tooltip を、人口が多い順に並ぶようにする。

## 最後に一言

- 凄く楽しんで取り組めました！アプリの favicon も御社のものを使わせて頂きました。　- 高橋
