## About

Google Apps Script で Google Drive のフォルダ内のファイル群のオーナー権限を一括で譲渡するスクリプトです。

## Usage

1. https://script.google.com/home をブラウザで開く
2. `新規スクリプト` を選択
3. プロジェクト名を指定し保存
4. [main.js](https://raw.githubusercontent.com/tanabee/chown-drive-folder/master/main.js) をコピーし Google Apps Script エディタ上にペーストする
5. `ファイル` > `プロジェクトのプロパティ` > `スクリプトのプロパティ` を選択し、以下の行を追加する
    - `FOLDER_ID`: Google Drive のフォルダ ID 
    - `NEW_OWNER`: 新しいオーナーのメールアドレス
6. `function` > `main` を選択
7. `実行` ボタンを選択
8. Google Drive でフォルダを開いて、権限変更が反映されていれば OK 
