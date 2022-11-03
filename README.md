# Gs_kadai2_test







Read ME用メモ


こだわりポイント

１．共通化

・可能な限り共通化し、処理が重複しないように心がけた。
　例：「骨格Straightさんの処理はAAA」「骨格Wvさんの処理はBBB」「骨格Ntさんの処理は〜〜〜」「骨格不明さんの処理は〜〜〜」と書くと、
 構造はシンプルだが、同じようなこと（少しの文言の違い＝骨格タイプの名前や画像の違いなど）を４回（３回＋１回）書かないといけなくなり、
 コードが３〜４の累乗で増えていくということになりかねない…。遷移先も骨格タイプの数だけ用意してたらすべてを３倍用意しないといけなくて大変！
 →なので、「土台になるHTMLは各ページ１つ」＋「内容をユーザーの選択によって出し分ける」ということを可能な限り突き詰めました。
 　（そうしないと、軽微なUI変更なども全部に反映させないといけないんので、共通化しておいてよかった！！！！！！）


２．ページ遷移時のユーザー情報引き継ぎ（パラメーターの受け渡し設定）

・その中で、最初のぺージからモーダルウィンドウの立ち上げととの内容の出し分けまでは、ボタンのid属性判別でシンプルにできたのですが、
次のページへの遷移がかなり大変だった。
・具体的には、次のページ遷移が、単純にリンクの振り分けなら楽。（インスタの骨STページに飛ばす、WV特集に飛ばす、など。単にリンク指定すればOK）
しかし、次のページも前途の通り「共通化」が計られていて、コンテンツの出し分けをしようという設計コンセプトにしていたため、その実装を試みた。
ところが、次のページのHTMLからすると、JQファイルも違う、HTMLファイルも違う最初のページで押されたボタンの情報をどう取得するのか？」という壁があった。
特に、モーダルを挟んでいたため、ボタンのid属性を直接取得できなくて、難易度が上がった。
ページ遷移　【初期ページ（骨格選択）　→　モーダルウィンドウ（メニュー選択）　→　コンテンツページ　】という遷移だったので、２つ前のアクション（最初のページで
押したボタン＝骨格選択）の情報を、遷移後のページに渡さなければならない…。　めちゃ難しかった。

結論、パラメーターの付与で今回は解決した。

・遷移【元】ページにて設定　：
  リンクをとばすときに「パラメーター」を付与する。（&id=straight　など）
・遷移【後】ページにて設定　：　
  リンクの読み取りからパラメーター情報を判別。（&と=とidとstraightにセパレートして、パラメーター部分を判別）
  →それを新たな変数として配列に格納。
  →その配列情報から、パラメーターを読み取り。
  →場合分けして、コンテンツの出し分け。
 
 という流れで今回は処理した。
 分かってしまえばコード自体はそこまで長くない（コンパクト）けど、分かるまでは一番大変だった。
 
 また、全体の流れはぐぐりながら見様見真似でやったが、パラメーター受け取り後の処理コードなど中身を理解しきれていないものもあるので、今後ちゃんと理解したい。
 （自分で使ったコードは最低限中身を理解できていて説明できる状態にしておきたい。「よくわかってないんですけどこれ書いたら動きました」を避けるため）
 
道は長い！！


３．コンテンツの出し分け時のエラーつぶし

・「骨格ST」「骨格WV」「骨格NT」「わからない」のうち、共通処理（モーダルを開く、とか）と、
「わからない」だけ例外処理（まずは骨格診断にリンクを飛ばす）があり、その実装により思わぬエラーが出た。

・「わからない」にだけid指定で例外処理をすれば、他はclass指定で共通設定しているので、思ったおような挙動になるとおもったのですが、
　やってみると「１回目はうまくいく」けど「１回「わからない」が押されると、そのあとは「骨ST」「骨WV」を押しても例外処理が再発してしまう」という事態になった。
 理由はセレクタ指定の方法など色々調べたが自分ではわからなかった。
 （セレクタ指定をand指定にしてより厳密にするとか、.on処理のあとに.off処理をかけて１回消す？とか、色々試したけどダメだった）
→チューターさんのアドバイスで「innerHTMLは、たんなる文章の出し分けではなく、元のHTMLの内容自体を書き換えてしまう処理だから、
１回「わからない」ボタンの例外処理が起こるとそこで書き換えられた内容がそのあともそのまま表示されるよ」ということを教えてもらった。
これはいくら調べても自分ではたどり着けない知識だったので、目からウロコでした。（なるほど！！と）
・リロード処理で簡単に解決なども試みたが、モーダルが開かなくなる（そりゃそうだ）ということになったので、
結局「初期設定→例外により上書き→通常による上書き」という３段階をコードに書いた。
それによりやりたかった挙動には一応なった。
けど、もうすこしスマートな書き方がありそうなので、これから熟達していきたい。

内容の出し分けはパーソナライズする以上かなり多いサービスになっていくと思うので、
出し分けのプロを目指していきたい！！！！このあたりは勉強したい！


以上、備忘メモ

あとで正書します







 