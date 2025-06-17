# 中学受験社会科問題サービス - Claude Code メモリ

## プロジェクト概要
小学6年生向けの中学受験対策社会科問題出題サービス。**一体型HTMLファイル**で構築された究極にシンプルなWebアプリケーション。

## 技術構成
- **アーキテクチャ**: 一ファイル完結型（Single File Application）
- **フロントエンド**: React 18 + ReactDOM（CDN）
- **JSX変換**: Babel Standalone
- **スタイリング**: インラインCSS
- **データ**: JavaScript配列（静的）

## プロジェクト構造
```
/home/maki/docs/shakai/
└── index.html    # 完全なWebアプリケーション
```

## 重要な特徴
- **ビルド不要**: npm install、webpack、vite等一切不要
- **依存関係なし**: package.jsonなし、node_modules不要
- **即座に実行**: ブラウザで直接開くだけで動作
- **配布容易**: 1ファイルコピーで完全移植可能
- **ホスティング自由**: 任意のWebサーバーで即座に配信可能

## 使用CDNライブラリ
```html
<!-- React 18 -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Babel Standalone (JSX変換) -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## 問題データベース
- **収録問題数**: 10問（サンプル版）
- **地理**: 5問（日本の地形、気候、世界の国々）
- **歴史**: 3問（古代、平安時代、戦国時代）
- **公民**: 2問（憲法、政治制度）

## 問題形式
- `multiple-choice`: 選択式（4択）
- `fill-in-blank`: 記述式（穴埋め）
- `true-false`: 正誤問題

## 難易度レベル
- `basic`: 基本（1点）
- `standard`: 標準（2点）
- `advanced`: 発展（3点）

## 主要機能
1. **クイズ設定画面**: 分野・難易度・問題数選択
2. **問題出題システム**: ランダム出題
3. **回答入力**: 各形式対応（選択/記述/正誤）
4. **進捗表示**: リアルタイム進捗バー
5. **採点システム**: 即座の正誤判定と得点計算
6. **結果表示**: 詳細解説付き結果画面
7. **復習機能**: 不正解問題フィルタリング
8. **学習支援**: 分野別復習ヒント

## ファイル構成（index.html内）
```javascript
// データ
const questionBank = [...]  // 問題データベース

// ロジック
function useQuiz() { ... }  // クイズ管理フック

// コンポーネント
function QuizSetup() { ... }     // 設定画面
function QuestionCard() { ... }  // 問題表示
function ProgressBar() { ... }   // 進捗バー
function QuizResult() { ... }    // 結果表示
function App() { ... }           // メインアプリ
```

## 開発・実行方法
```bash
# 開発・実行
open index.html  # ブラウザで直接開く

# サーバー配信（オプション）
python -m http.server 8000  # Pythonサーバー
npx serve .                 # Node.jsサーバー
```

## デプロイ方法
1. **静的ホスティング**: index.htmlをアップロードするだけ
2. **GitHub Pages**: リポジトリのindex.htmlが自動配信
3. **Netlify/Vercel**: ドラッグ&ドロップでデプロイ
4. **任意のWebサーバー**: Apache、Nginxで即座に配信

## Git管理
- **ブランチ**: `main`
- **ユーザー**: maki (maki.nkgw@gmail.com)
- **現在の状態**: 一体型HTML版に完全移行済み

## メンテナンス
- **問題追加**: questionBank配列に直接追加
- **UI調整**: インラインスタイルを修正
- **機能拡張**: React.createElement()で新コンポーネント追加

## 利点
✅ **シンプルさ**: 設定ファイル、ビルドプロセス一切なし
✅ **移植性**: 1ファイルで完全動作
✅ **学習効果**: Reactの本質的な部分に集中可能
✅ **配布容易**: 学校や塾での配布・共有が簡単
✅ **保守性**: 問題データとロジックが一箇所に集約

## 制約
- TypeScriptの型安全性なし
- モジュール分割制限
- 大規模化時の管理難易度
- ホットリロード等の開発支援なし

## 対象ユーザー
- **小学6年生**: 中学受験対策
- **教師**: 授業での活用
- **保護者**: 家庭学習支援
- **開発者**: シンプルなReactアプリの参考例

## 今後の拡張可能性
- 問題数の大幅追加
- ローカルストレージでの学習履歴
- 印刷機能
- オフライン対応
- PWA化

## トラブルシューティング
- **動作しない**: ブラウザのJavaScript有効化確認
- **表示崩れ**: モダンブラウザ使用推奨
- **問題追加時**: JavaScript配列の構文確認
- **CDN読み込み失敗**: インターネット接続確認