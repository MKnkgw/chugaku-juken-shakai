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
- **収録問題数**: 350問（中学受験対応完全版）
- **地理**: 50問（日本地理、世界地理、気候、産業、人口、時差計算等）
- **歴史**: 261問（古代から幕末、日本史・政治史・文化史網羅）
- **公民**: 39問（憲法、政府、国際関係、現代課題、経済・金融制度等）

### 参考教材
- `~/docs/shakai-text/japanese_history_training.md`: 年表・年代問題（20問追加）
- `~/docs/shakai-text/japanese_history_materials.md`: 総合歴史教材（80問追加）
- `~/docs/shakai-text/15th_JapaneseHistory_training.md`: 古代史年表問題（20問追加）
- `~/docs/shakai-text/social_studies_test_15_basic.md`: BASICレベル問題（20問追加）
- `~/docs/shakai-text/social_studies_test_15_standard.md`: STANDARDレベル問題（20問追加）
- `~/docs/shakai-text/social_studies_test_15_advance.md`: ADVANCEレベル問題（20問追加）
- `~/docs/shakai-text/15th_HighLevelSchool.md`: 最上位校レベル問題（30問追加）
- `~/docs/shakai-text/15th_keyword_check.md`: キーワードチェック問題（20問追加）
- `~/docs/shakai-text/14th_point_check.md`: ポイントチェック問題（20問追加）

## 問題形式
- `multiple-choice`: 選択式（4択）
- `fill-in-blank`: 記述式（穴埋め）
- `true-false`: 正誤問題

## 難易度レベル
- `basic`: 基本（1点）
- `standard`: 標準（2点）
- `advanced`: 発展（3-5点）
  - 3点: 通常の応用問題
  - 4点: 上位校レベル問題
  - 5点: 最難関校レベル問題

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

### 問題拡張履歴
1. **初期版**: 100問（地理48問、歴史31問、公民21問）
2. **年表追加**: +20問（japanese_history_training.mdより）
3. **教材追加1**: +20問（japanese_history_materials.mdより）
4. **教材追加2**: +60問（両参考ファイルより追加分析）
5. **古代史強化**: +20問（15th_JapaneseHistory_training.mdより）
6. **基本レベル**: +20問（social_studies_test_15_basic.mdより）
7. **標準レベル**: +20問（social_studies_test_15_standard.mdより）
8. **発展レベル**: +20問（social_studies_test_15_advance.mdより）
9. **上位校レベル**: +20問（15th_HighLevelSchool.mdより）
10. **最難関レベル**: +10問（15th_HighLevelSchool.mdより）
11. **キーワード集中**: +20問（15th_keyword_check.mdより）
12. **公民強化**: +20問（14th_point_check.mdより）
13. **現在**: 350問（地理50問、歴史261問、公民39問）

### 歴史問題の詳細内訳（261問）
**古代・中世（150問）:**
- **縄文・弥生・古墳時代**: 25問（遺跡、文化、ワカタケル大王等）
- **飛鳥・奈良時代**: 35問（聖徳太子、大化改新、律令制、仏教文化）
- **平安時代**: 45問（摂関政治、院政、国風文化、武士の台頭）
- **鎌倉時代**: 35問（幕府制度、元寇、御成敗式目、鎌倉文化）
- **室町時代**: 10問（南北朝、応仁の乱、一揆、足利将軍家）

**近世・近代（111問）:**
- **戦国時代**: 18問（信長・秀吉、キリスト教伝来、南蛮貿易、城下町）
- **安土桃山時代**: 17問（全国統一、朝鮮出兵、検地・刀狩、茶道文化）
- **江戸時代**: 76問（幕府制度、鎖国、三大改革、蘭学・国学、文化史、重要人物）
  - 三大改革詳細問題、田沼意次、新井白石、大塩平八郎等の重要人物
  - キーワードチェック問題を含む包括的内容
- **幕末**: 10問（開国、尊王攘夷、薩長同盟、幕府滅亡）

**難易度別構成:**
- **基本レベル（1-2点）**: 約200問（基礎知識定着）
- **標準レベル（3点）**: 約100問（入試標準問題）
- **上位校レベル（4点）**: 約30問（難関校対応）
- **最難関レベル（5点）**: 約20問（最上位校対応）

### 公民問題の詳細内訳（39問）
**憲法・政治制度（12問）:**
- 基本的人権、国会・内閣・裁判所、選挙制度、地方自治等

**経済・金融（15問）:**
- GDP・GNP、日本銀行の機能、景気変動、貿易、経済史（世界恐慌等）

**国際関係・現代課題（12問）:**
- 国際機関（UNESCO、UNCTAD等）、中東戦争、環境問題、南北問題、非核三原則等

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
- ローカルストレージでの学習履歴
- 印刷機能
- オフライン対応
- PWA化
- 分野別統計機能
- 時間制限モード
- 地理問題の更なる充実（現在歴史261問に対し地理50問、公民39問に改善）
- 正誤問題形式の追加
- 画像・地図を使った問題
- 年表問題の可視化
- 解説の詳細化

## トラブルシューティング
- **動作しない**: ブラウザのJavaScript有効化確認
- **表示崩れ**: モダンブラウザ使用推奨
- **問題追加時**: JavaScript配列の構文確認
- **CDN読み込み失敗**: インターネット接続確認