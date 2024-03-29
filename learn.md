# learning

# コーディング規約について

## 命名規則

| 言語       | クラス     | 変数/関数  | 定数          | 例外                    | タイプ/Enum |
| ---------- | ---------- | ---------- | ------------- | ----------------------- | ----------- |
| TypeScript | PascalCase | camelCase  | CONSTANT_CASE | -                       | PascalCase  |
| Python     | PascakCase | snake_case | CONSTANT_CASE | PascalCase 末尾に Error | -           |

※過去案件の命名規則

定数や変数は何を表しているか、何を目的とするか、何を処理するかを意識してできるだけ命名だけで内容がわかるようにする
命名と内容に齟齬がある場合は命名を変更したり、他の関数に切り分ける

修正前

```javascript
const main = () => {
  const isOver = isOverDate();
};

const isOverDate = () => {
  const now = new Date();
  const date = now.getDate();
  axios.get("http://127.0.0.1:8000/api/hello").then((res) => {
    return res.data.date > date;
  });
};
```

関数名の切り分け修正後

```javascript
const main = () => {
  const isOver = getApiDate() > getNowDate();
};

const getNowDate = () => {
  const now = new Date();
  const date = now.getDate();
  return date;
};

const getApiDate = () => {
  axios.get("http://127.0.0.1:8000/api/hello").then((res) => {
    return res.data.date;
  });
};
```

関数名は動詞を先頭に処理内容に沿った命名をする
例：getInputAddress()

副詞（to, for など）は多用しない

## マジックナンバー

マジックナンバーは積極的に定数化する
設定する箇所に関しては以下のスコープを意識する

## 定数や関数のスコープ

広い範囲に置かない
複数箇所で使用する場合は util などに設置する
可能であればモジュール内に閉じること
行数の多い関数内で宣言する cont は、使用箇所の手前に設置すること

## 引数

引数が多い場合、可能であればまとめて渡すようにする
処理に変更があり引数が増えた際にも修正箇所を減らすことができる
例：testFunction(param.id, param.delFlg, param.createDate) → testFunction(param)

## 連想配列

### map

key の指定は item,index の指定は index を命名する。
key の指定を key とすると、動的な関数に設定する key とかぶってしまうので注意する。

値のみ取り出したい場合は`Object.values(data).map` data に値が入る。
key のみ取り出したい場合は`Object.keys(data).map` data に key が入る。

## 静的解析ツール

### フロントエンド

#### ESLint

単純な構文エラーやプロジェクト固有のコーディング規約を定義することができる

#### prettire

.js、.ts、.css、.less、.scss、.vue、.json コードをフォーマットするためのツールです

設定ファイルで制御することで折り返しの長さやインデントなど、ソースの整形を調整しチーム内での均一化を図ることができる

設定項目は[こちら](https://zenn.dev/shimakaze_soft/articles/57642e22124968)を参照

##### ESLint と prettire の違いと同時に導入するときの注意

prettier と ESLint は、似ていますが、

- prettier は、ESLint では整形できないコードを整形でき、手軽で確実に整形できる
- ESLint は構文チェックができる
  というようなそれぞれの利点がある

ですが、両方を導入してみるとそれぞれの設定で、ルールが競合する場合がある
例えば、prettier の設定では、XXXX なルールでコードをフォーマットしてるが、ESLint では YYYYY のルールで構文解析をしていて、
prettier で自動でコードフォーマットしても、ESLint で構文がおかしいって怒られ、それを fix して prettier を動かすと、
prettier のルールで自動でフォーマットされるというのが競合してると無限に繰り返されという問題がある
その場合は競合する可能性のあるルールを無効にするなどして設定を見直す

### バックエンド

#### mypy

返り値と引数の型定義を警告する

オプションで以下のように指定することが可能
disallow_untype_defs:型定義のない関数の定義を禁止
check_untypes_defs:型定義のない関数内部の方調査
warn_unreachable:到達不可能なコードがあると警告
warn_return_any:戻り値が any の関数に肩をつけて返すと警告
ignore_missing_imports:型定義のないライブラリの import による警告を許容

#### black

自動的に Python プログラムの書き方を修正してくれる
例えば、改行の位置など
書き方に制限がある分、チーム内での書き方に統一性を持たせることができる

#### isort

import 文の並び順を警告する
`import [ファイル名]`で自動で並び替える
並び順は以下のようになる

> 標準ライブラリ
> サードパーティに関連するもの
> ローカルな アプリケーション/ライブラリ に特有のもの

#### flake8

Python コードの問題点を簡単に見つけることができる
基本的な Python の書き方に問題がある箇所を警告する
例えば、関数とクラスの間に 2 行の空白行が必要
１行当たりの文字数が 119 文字を超えている
真偽値の入った変数を＝で比較している
export 句に捕捉する例外を記載していないなど

・ハマったところ
長い文字列の折り返しについて、たとえば文字列長が 35 文字制限のだとしたら以下のように改行する

```python
logging.info("あいうえおかきくけこさしすせそたちつてと"/
"なにぬねのはひふへほ")

# 出力結果：あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
```

https://arakan-pgm-ai.hatenablog.com/entry/2018/11/12/090000

#### bandit

コード上に潜むセキュリティの脆弱性などを警告する
例えば、ディレクトリや SQL、URL をハード記載していると警告するなど

・ハマったところ
プロジェクトの都合上、URL と SQL のハード記載をしていたが警告でコミットできなかったので該当行に「# nosec」を付与する
