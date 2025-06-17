# 中学受験社会科問題サービス - Claude Code メモリ

## プロジェクト概要
小学6年生向けの中学受験対策社会科問題出題サービス。React + TypeScript + Viteで構築。

## 技術構成
- **フレームワーク**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: CSS-in-JS（インライン）
- **状態管理**: React Hooks

## 重要なコマンド
```bash
# 開発サーバー起動
npm run dev

# 型チェック
npm run typecheck

# ビルド
npm run build

# 依存関係インストール
npm install
```

## プロジェクト構造
```
src/
├── components/          # UIコンポーネント
│   ├── QuizSetup.tsx   # クイズ設定画面
│   ├── QuestionCard.tsx # 問題表示
│   ├── QuizResult.tsx  # 結果表示
│   └── ProgressBar.tsx # 進捗表示
├── hooks/
│   └── useQuiz.ts      # クイズロジック
├── data/
│   └── questions.ts    # 100問のデータベース
├── types.ts            # TypeScript型定義
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## 問題データベース
- **総問題数**: 100問
- **地理**: 48問（日本の自然、世界地理、産業、環境）
- **歴史**: 31問（古代〜現代、世界史含む）
- **公民**: 21問（憲法、政治、国際関係）

## 問題形式
- `multiple-choice`: 選択式
- `fill-in-blank`: 記述式（穴埋め）
- `true-false`: 正誤問題

## 難易度レベル
- `basic`: 基本（1点）
- `standard`: 標準（2点）
- `advanced`: 発展（3点）

## 主要機能
1. **クイズ設定**: 分野・難易度・問題数選択
2. **問題出題**: ランダム出題システム
3. **回答機能**: 各形式に対応した入力
4. **採点システム**: 即座の正誤判定
5. **結果表示**: 詳細解説付き
6. **復習機能**: 不正解問題フィルタリング
7. **学習支援**: 分野別アドバイス

## 開発時の注意点
- TypeScript型チェックを必ず実行
- 問題データ追加時は型定義に注意
- 解説文は小学6年生に分かりやすく
- レスポンシブデザインは未対応（デスクトップ想定）

## Git管理
- ブランチ: `main`
- ユーザー: maki (maki.nkgw@gmail.com)
- `.gitignore`でnode_modules等を除外済み

## 今後の拡張予定
- 問題数の追加
- 新しい問題形式
- 学習履歴機能
- レスポンシブ対応
- データベース化

## トラブルシューティング
- 解説が表示されない → `QuizResult.tsx`で`completedQuestions`を確認
- 型エラー → `npm run typecheck`で詳細確認
- 問題データエラー → `questions.ts`の重複フィールド確認