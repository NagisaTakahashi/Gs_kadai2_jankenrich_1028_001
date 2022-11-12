
// alert(1111);





// // コピペ開始

// let A = null; //変数Aを用意する

// let B = [0,1,2,3]; //共通化するために配列Bに変数Aを入れる

// //以下共通化した数字を各ボタンの押下と紐付け（定義）


// let C = ['Straight', 'Wave', 'Natural','分からない'];
// let D = ['ストレート', 'ウェーブ', 'ナチュラル','分からない'];
// let E = ['img/girl_straight.png', 'img/girl_wave.png', 'img/girl_natural.png','分からない'];

// //コピペ終了

// $(function(){
//    $('#idLoadLlink').load('https://nagisatakahashi.github.io/Gs_kadai2_test/ #btn_st');
//    console.log(C[A]);
// });




// $(function(){
//   $("#recommend_item").on('click', function(){
//     console.log(C[A]);
//     $(".kokkaku_type_eng").text(C[A]); //英語表記したいので配列Cを使用
//   });
// });

  

// ここからアイテム配列（image、title、detail）の出し分け設定

// let AA = null; //変数AAを用意する

// let BB = [0,1,2,3]; //共通化するために配列BBに変数AAを入れる

// //以下共通化した数字を各ボタンの押下と紐付け（定義）

// $("#btn_st").on('click', function(){
//   AA = 0;
//   console.log(BB[AA]);
// });

// $("#btn_wv").on('click', function(){
//   AA = 1;
//   console.log(BB[AA]);
// });

// $("#btn_nt").on('click', function(){
//   AA = 2;
//   console.log(BB[AA]);
// });

// $("#btn_unkown").on('click', function(){
//   AA = 3;
//   console.log(BB[AA]);
// });


// let CC = ['Straight', 'Wave', 'Natural','分からない'];
// let DD = ['ストレート', 'ウェーブ', 'ナチュラル','分からない'];






//imageの出し分けのための変数

// var X = null;

// let n = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; //もっとスマートに記述できる方法ないかな？

// var object[n] = {"image":"null","title":"null","detail":"null"};

var object_itemlist= [
 {"image":'img/st_1.jpeg',"title":"上品見え2wayキャミワンピース","detail":"胸元のVカットと上品見えする細ストライプ柄がストレートタイプにぴったりの1着。華奢なストラップや深めのスリットなど、ドキッとする女性らしさも演出。ストレッチ性がありながらも薄すぎない生地感だから、レイヤードしてももたつかず◎。"},
 {"image":'img/st_2.jpeg',"title":"トレンドライクハーフパンツ","detail":"トレンドのハーフパンツをストレートさんが取り入れるなら、こちらのラインナップ。カジュアル見えする丈ながらも、センタープレスが入りかっちり見えるのがポイントです。トレンドムードたっぷりのデザインで快適にはける高機能素材に注目。"},
 {"image":'img/st_3.jpeg',"title":"クリアツイルコクーンパンツ","detail":"ベーシックで使い回しの効くテーパードパンツ。広がりすぎないコクーンシルエットやフェイクレザーで、定番ながらも遊びを加えるのがポイントです。NOBLEのジョガーパンツは次のシーズンを見据えたフェイクレザーをレコメンド。見た目に対して軽くて柔らかな素材の、リラックスした履き心地が◎。"},
 {"image":'img/st_4.jpeg',"title":"センタープレスドビーパンツ","detail":"センタープレス入りで脚にフィットするフレアシルエットは、まさにストレートタイプのための美脚パンツ！トップス次第でオン＆オフともに活躍すること間違いなしです。ドライな肌触りの清涼素材なら、真夏の今からヘビロテできそう。"},
 {"image":'img/st_5.jpeg',"title":"ローフリルスリーブワンピース","detail":"ダボっとした着こなしにまとまりがちな長袖ワンピースはスタイルにメリハリをつけて。てろっとした素材のVネック＆コクーンシルエットで、ボディラインに沿ったスッキリ感を演出。１枚で上品にまとまるから、オンにもオフにも活躍すること間違いなし。"},
 {"image":'img/st_6.jpeg',"title":"絶妙バランスフレアドレス","detail":"シンプルなフレアワンピースは、トレンド感もありつつ広がりすぎない絶妙なバランスがおすすめ。スッキリしたトップに対して裾がエレガントに広がるシルエットだから、デイリーコーデを素敵に格上げしてくれます。"},
 {"image":'img/st_7.jpeg',"title":"ウェザーリバーシブルステンカラーコート","detail":"ステンカラーコートは、袖からのぞくチェック柄に注目。ストレートタイプはどうしてもデザインがシンプルになりがちなので、ワンポイントで遊びを加えるのもおすすめです。ハリのある素材が上質感もあり、チェック柄をメインにも着られるリバーシブル仕様なのが嬉しい。"},
 {"image":'img/st_8.jpeg',"title":"フーデットブルゾン","detail":"ボリューミーなブルゾンは着膨れしやすいストレートタイプ。なるべくボリュームをおさえたIラインで、表面のデザインも少なめの方がすっきりと好印象に。気軽に羽織れて、大人の品も漂うゴールドのパーツがキレイめなムードもアップ。"},
 {"image":'img/st_9.jpeg',"title":"コクーンミドルコート","detail":"今季おさえておきたいミドル丈のアウターは、シンプルなコクーンコートをチョイス。ベーシックなデザインをおさえつつもドロップショルダーなど、トレンド感のあるサイジングがポイントです。インナーを選ばないノーカラー仕立てなのですっきり着られておすすめ。"},
 {"image":'img/st_10.jpeg',"title":"メタルボタンダブルブレストジャケット","detail":"シックなコーデの似合うストレートタイプの鉄板アイテムであるジャケット。Vゾーンが広めで、オーバーサイズ過ぎないすっきりとしたIラインシルエットがおすすめです。この秋冬トレンドのトラッドムードに最適な、金ボタンのネイビーブレザーをカジュアルに着こなすのが気分。"},
 {"image":'img/wv_1.jpeg',"title":"華やかカラーの華奢見えワンピ","detail":"ウェーブタイプの華奢さを引き立ててくれるキャミワンピース。こっくり秋カラーのサテンワンピースなら、今からロングシーズン活躍します。1枚で着るときはアクセサリーなどで首元にポイントをおいて。薄手のインナーとのレイヤードスタイルもおすすめです。"},
 {"image":'img/wv_2.jpeg',"title":"こっくり秋カラーのサテンワンピース","detail":"ウェーブタイプの華奢さを引き立ててくれるキャミワンピース。こっくり秋カラーのサテンワンピースなら、今からロングシーズン活躍します。1枚で着るときはアクセサリーなどで首元にポイントをおいて。薄手のインナーとのレイヤードスタイルもおすすめです。"},
 {"image":'img/wv_3.jpeg',"title":"Dramaticな切替ワンピース","detail":"ストンと落ち感のあるシンプルなキャミワンピはもちろん、ギャザーで切り替えたドレッシーなワンピースも◎。分厚くなりすぎない薄手の素材感がポイントです。ロゴTシャツやスニーカーなど、カジュアルにハズしたコーデにまとめて。"},
 {"image":'img/wv_4.jpeg',"title":"落ち感ソフトレザーワンピ","detail":"ほんのりツヤ感のあるフェイクスエードも、ウェーブタイプがお得意の素材の1つ。デコルテの開きが控えめなデザインが今どき。自宅で洗えるイージーケアなのも嬉しいポイント。シンプルトップスを重ねるだけでワンランク上の着こなしに。"},
 {"image":'img/wv_5.jpeg',"title":"マーメイドリブニットワンピ","detail":"身体にフィットするニットワンピースはウェーブタイプだからこそ着こなせるアイテム。裾にかけて広がるフレアやマーメイドシルエットが、さらに女性らしさを引き立ててくれます。"},
 {"image":'img/wv_6.jpeg',"title":"落ち感フリルシャツワンピ","detail":"かっちり見えするシャツワンピースも、テロっとした素材感と襟のフリルならウェーブさんにお似合い。オケージョン対応にもぴったりなクラシカルなブラックワンピースは、フェミニンすぎるアイテムが苦手な方にもおすすめです。"},
 {"image":'img/wv_7.jpeg',"title":"新鮮ツイードポプリンパンツ","detail":"デニムなどのカジュアル素材の多いショート・ハーフパンツですが、ウェーブさんにはツイードなどの華やかな素材がおすすめ。ジャケットとのセットアップスタイルは、ウェーブタイプだからこそ似合うコーデです。一気に秋のムードを醸せるショートパンツは、カジュアル合わせで遊びを効かせても◎。"},
 {"image":'img/wv_8.jpeg',"title":"モチーフプリントクラシックパンツ","detail":"軽い素材のイージーパンツがウェーブタイプにおすすめ。柄は小さめでコントラストの弱いものを選んで。オリジナルプリントパンツは、コーデに馴染みの良い小ぶりな柄。シルクのような光沢が、上質感も演出してくれます。"},
 {"image":'img/wv_9.jpeg',"title":"クリンクルチェックイージーパンツ","detail":"ウェーブタイプらしいすっきりとしたシルエットがポイント。レディにもカジュアルにも着れるギンガムチェックがウェーブタイプによく似合います。サイドのパイピングがアクセントのイージーパンツで、大人可愛いコーデを楽しんで。"},
 {"image":'img/wv_10.jpeg',"title":"大人可愛いスッキリ見えテーパード","detail":"テーパードパンツは足首をすっきりと見せてくれるおすすめのシルエット。ウェーブタイプにはかっちりとしたデザインより、ストレッチが効いた柔らかい素材がおすすめです。ウエストゴムなのも嬉しいポイント。"},
 {"image":'img/nt_1.jpeg',"title":"ボタンジレワンピ","detail":"ワンピースとしてもジレとしても着られるジャンパースカートは、オーバーな着こなしが得意なナチュラルタイプにピッタリ！夏コーデにプラスオンするだけで簡単に季節を更新。"},
 {"image":'img/nt_2.jpeg',"title":"64クロスタックフレアスカート","detail":"スカートはロング丈でボリュームのあるデザインのものがおすすめ。チュールなどの甘すぎる素材や、ひざ丈以上のアイテムは避けた方がベターです。ハリ感のある素材のマキシフレアスカートは、黒だけどドラマティックで華やかなムードたっぷり。"},
 {"image":'img/nt_3.jpeg',"title":"ダブルブレスドツーピース","detail":"リラックス感のあるコーデが得意なナチュラルタイプにはややオーバーサイズなパンツのセットアップがおすすめ。ほどよいラフさも漂うリネン素材のマニッシュなデザインは、ありそうでないダスティーブルーがさらにお洒落指数をアップ。オケージョンのきちんと感も出つつ、こなれ感のあるコーディネートに。"},
 {"image":'img/nt_4.jpeg',"title":"＆NAVY コットンナイロンオーバーラップコート","detail":"ぴったりとしたサイズ感よりもややオーバーめの着こなしの方がこなれて見えるナチュラルタイプ。ベーシックなデザインでも、丈が長めでゆとりのあるサイズ感を選ぶことで洗練されて見えます。オケージョン対応に必須なキチンと感に加えて、洒落たこなれ感も漂うゆるめなハンサムシルエットがお洒落。"},
 {"image":'img/nt_5.jpeg',"title":"ホワイトツイードジャケット","detail":"カジュアルなアイテムを連想しがちなナチュラルタイプですが、ツイードなどのキレイめアイテムもグッド。今季マストで持っておきたいツイードジャケットは、ラフに羽織れるデザインが旬。着丈が短いとチグハグな印象になってしまうので、ややオーバーサイズをチョイスするのがおすすめです。"},
 {"image":'img/nt_6.jpeg',"title":"ハイウエストチノ","detail":"ナチュラルタイプに似合うのは、スカート見えするようなたっぷりとしたワイドパンツ。Tシャツと合わせたカジュアルなコーデがおすすめです。キレイめ派さんはタック入りをチョイスして。ステッチがアクセントのバギーパンツは、マニッシュも香るドラマティックなシルエットが魅力。"},
 {"image":'img/nt_7.jpeg',"title":"タックバギーデニム","detail":"定番のデニムも、ナチュラルタイプならさまざまなスタイルを選べます！ポイントは、ピッタリとしたスキニーは避けてバギーやワイドシルエットなどのラフなもの。クラッシュ加工もおすすめです！トレンドムードたっぷりのローライズが◎。"},
 {"image":'img/nt_8.jpeg',"title":"カルゼオーバーワンピ","detail":"カジュアル派のナチュラルさんには、ジャンパースカートもおすすめ。大人カジュアルにぴったりなデニムサロペットは、シックなブラックがグッド。元々生地のしっかりしたタイプのものが多いため、デザインを選ばず着こなせます！"},
 {"image":'img/nt_9.jpeg',"title":"ステンスタンドネックブルゾン","detail":"カジュアルコーデに欠かせないMA-1は、あえてダボっとしたシルエットで着こなすのがおすすめ。定番のミリタリーテイストなデザインはもちろん、サテン地スタンドネックなどモードなデザインもOK。女っぽコーデに羽織って辛さを足し算して。"},
 {"image":'img/nt_10.jpeg',"title":"デシンマキシティアードワンピ","detail":"ラフなアイテムの多いナチュラルタイプですが、細かすぎなければフリル使いもOK。マキシ丈のティアードやマーメイドワンピースは甘くなりすぎず、絶妙なバランスになりおすすめです。表情豊かなフリンジジャカードドレスなら、まわりと差がつくワンピスタイルに。"}
];

// console.log(object_itemlist[10].title);

// console.log(object_itemlist[20].detail);

// console.log(object[n].title);



//以下にて乱数を生成する--------


// /** min以上max以下の整数値の乱数を返す */

// $("#btn_st").on('click', function(){

  const pickN = (min, max, n) => {
    const list = new Array(max-min+1).fill().map((_, i) => i + min);
    const ret = [];
    while(n--) {
      const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
      ret.push(...list.splice(rand, 1))
    }
    return ret;
  }

  const list_st = pickN(0, 9, 3); //数字を格納する配列リスト,数字が３つ入る
  console.log(list_st); //ストレートを選んだ人向けのリスト

  const list_wv = pickN(10, 19, 3); //数字を格納する配列リスト,数字が３つ入る
  console.log(list_wv); //ウェーブを選んだ人向けのリスト

  const list_nt = pickN(20, 29, 3); //数字を格納する配列リスト,数字が３つ入る
  console.log(list_nt); //ナチュラルを選んだ人向けのリスト

  const list_all = pickN(0, 29, 3); //数字を格納する配列リスト,数字が３つ入る
  console.log(list_all); //骨格不明を選んだ人向けのリスト

// });
// ここまで、変数リストを骨格毎に分ける方法

// ここからは変数リストは１つで、その中に入る数字をIf文で分ける方法をためす（あとの処理がこちらのほうが１本の分岐で済みそうなので）



// $("#btn_st").on('click', function(){
//   const pickN = (min, max, n) => {
//     const list = new Array(max-min+1).fill().map((_, i) => i + min);
//     const ret = [];
//     while(n--) {
//       const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
//       ret.push(...list.splice(rand, 1))
//     }
//     return ret;
//   }
//   var list_num = pickN(0, 9, 3); //数字を格納する配列リスト,数字が３つ入る
//   console.log(list_num); //数字が入ったリスト
//   console.log(list_num[0]); 
//   console.log(list_num[1]); 
//   console.log(list_num[2]); 
// });

// $("#btn_wv").on('click', function(){
//   const pickN = (min, max, n) => {
//     const list = new Array(max-min+1).fill().map((_, i) => i + min);
//     const ret = [];
//     while(n--) {
//       const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
//       ret.push(...list.splice(rand, 1))
//     }
//     return ret;
//   }
//   var list_num = pickN(10, 19, 3); //数字を格納する配列リスト,数字が３つ入る
//   console.log(list_num); //数字が入ったリスト
//   console.log(list_num[0]); 
//   console.log(list_num[1]); 
//   console.log(list_num[2]); 
// });

// $("#btn_nt").on('click', function(){
//   const pickN = (min, max, n) => {
//     const list = new Array(max-min+1).fill().map((_, i) => i + min);
//     const ret = [];
//     while(n--) {
//       const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
//       ret.push(...list.splice(rand, 1))
//     }
//     return ret;
//   }
//   var list_num = pickN(20, 29, 3); //数字を格納する配列リスト,数字が３つ入る
//   console.log(list_num); //数字が入ったリスト
//   console.log(list_num[0]); 
//   console.log(list_num[1]); 
//   console.log(list_num[2]); 
// });

// $("#btn_unkown").on('click', function(){
//   const pickN = (min, max, n) => {
//     const list = new Array(max-min+1).fill().map((_, i) => i + min);
//     const ret = [];
//     while(n--) {
//       const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
//       ret.push(...list.splice(rand, 1))
//     }
//     return ret;
//   }
//   var list_num = pickN(0, 29, 3); //数字を格納する配列リスト,数字が３つ入る
//   console.log(list_num); //数字が入ったリスト
//   console.log(list_num[0]); 
//   console.log(list_num[1]); 
//   console.log(list_num[2]); 
// });



  // const list_num = pickN(0, 29, 3); //数字を格納する配列リスト,数字が３つ入る
  // console.log(list_num); //骨格不明を選んだ人向けのリスト

// ここまで数字の取り扱いをわけて検証




// 以下、配列名を可変にしようとおもったのですがPHPじゃないとできないらしい？---

  //配列AAを再利用する

  // let EE = ["st","wv","nt","all"];

  // $(".kokkaku_btn").on('click', function(){

  //   console.log(EE[AA]);
    
  //   var x = EE[AA]; //stとか
  //   console.log(x); //stとかを表示
    
  //   var y = "list_" + x; //list_stとか
  //   console.log(y); //list_st とかを表示
  // });

// ここまでtry&error(PHP学習待ち）---


// ここから共通化しようとしたけど沼ったので一回消す---

  // var num1 = list_num[0] 
  // var num2 = list_num[1] 
  // var num3 = list_num[2] 





  // $(".kokkaku_btn").on('click', function(){


  //   console.log(num1); //list_numのうち1つめの番号
  //   console.log(num2); //list_numのうち2つめの番号
  //   console.log(num3); //list_numのうち3つめの番号

  //   console.log(object_itemlist[num1].image); //list_numのうち1つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num1].title); //list_numのうち1つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num1].detail); //list_numのうち1つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num2].image); //list_numのうち2つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num2].title); //list_numのうち2つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num2].detail); //list_numのうち2つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num3].image); //list_numのうち3つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num3].title); //list_numのうち3つめの番号の配列の中身を表示
  //   console.log(object_itemlist[num3].detail); //list_numのうち3つめの番号の配列の中身を表示




  //   //乱数の生成ここまで--------

  //   //生成した乱数を配列に代入して表示したい要素（画像や説明文）を表示する--------

  //   $(".kokkaku_btn").on("click",function(){
  //     $("#li_item_image_1").attr("src",object_itemlist[num1].image)
  //     $("#li_item_title_1").text(object_itemlist[num1].title)
  //     $("#li_item_detail_1").text(object_itemlist[num1].detail)
  //   }
  //   );

  //   $(".kokkaku_btn").on("click",function(){
  //     $("#li_item_image_2").attr("src",object_itemlist[num2].image)
  //     $("#li_item_title_2").text(object_itemlist[num2].title)
  //     $("#li_item_detail_2").text(object_itemlist[num2].detail)
  //   }
  //   );

  //   $(".kokkaku_btn").on("click",function(){
  //     $("#li_item_image_3").attr("src",object_itemlist[num3].image)
  //     $("#li_item_title_3").text(object_itemlist[num3].title)
  //     $("#li_item_detail_3").text(object_itemlist[num3].detail)
  //   }
  //   );



  // });


// ここまで共通化しようとしたけど沼ったので一回消す---



//----もともとのコード（一時的にコメントアウト）


// let num1 = list_num[0] //list_numのうち1つめの番号
// let num2 = list_num[1] //list_numのうち2つめの番号
// let num3 = list_num[2] //list_numのうち3つめの番号


let st_num1 = list_st[0] //list_stのうち1つめの番号
let st_num2 = list_st[1] //list_stのうち2つめの番号
let st_num3 = list_st[2] //list_stのうち3つめの番号

let wv_num1 = list_wv[0] //list_wvのうち1つめの番号
let wv_num2 = list_wv[1] //list_wvのうち2つめの番号
let wv_num3 = list_wv[2] //list_wvのうち3つめの番号

let nt_num1 = list_nt[0] //list_ntのうち1つめの番号
let nt_num2 = list_nt[1] //list_ntのうち2つめの番号
let nt_num3 = list_nt[2] //list_ntのうち3つめの番号

let all_num1 = list_all[0] //list_ntのうち1つめの番号
let all_num2 = list_all[1] //list_ntのうち2つめの番号
let all_num3 = list_all[2] //list_ntのうち3つめの番号


// let num1 = y[0] //list_stのうち1つめの番号
// let num2 = y[1] //list_stのうち2つめの番号
// let num3 = y[2] //list_stのうち3つめの番号

// console.log(st_num1); //list_stのうち1つめの番号
// console.log(st_num2); //list_stのうち2つめの番号
// console.log(st_num3); //list_stのうち3つめの番号

// console.log(object_itemlist[st_num1].image); //list_stのうち1つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num1].title); //list_stのうち1つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num1].detail); //list_stのうち1つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num2].image); //list_stのうち2つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num2].title); //list_stのうち2つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num2].detail); //list_stのうち2つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num3].image); //list_stのうち3つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num3].title); //list_stのうち3つめの番号の配列の中身を表示
// console.log(object_itemlist[st_num3].detail); //list_stのうち3つめの番号の配列の中身を表示


//乱数の生成ここまで--------

//生成した乱数を配列に代入して表示したい要素（画像や説明文）を表示する--------

// $("#btn_st").on("click",function(){
//   $("#li_item_image_1").attr("src",object_itemlist[st_num1].image)
//   $("#li_item_title_1").text(object_itemlist[st_num1].title)
//   $("#li_item_detail_1").text(object_itemlist[st_num1].detail)
//   $("#li_item_image_2").attr("src",object_itemlist[st_num2].image)
//   $("#li_item_title_2").text(object_itemlist[st_num2].title)
//   $("#li_item_detail_2").text(object_itemlist[st_num2].detail)
//   $("#li_item_image_3").attr("src",object_itemlist[st_num3].image)
//   $("#li_item_title_3").text(object_itemlist[st_num3].title)
//   $("#li_item_detail_3").text(object_itemlist[st_num3].detail)
// }
// );

// $("#btn_wv").on("click",function(){
//   $("#li_item_image_1").attr("src",object_itemlist[wv_num1].image)
//   $("#li_item_title_1").text(object_itemlist[wv_num1].title)
//   $("#li_item_detail_1").text(object_itemlist[wv_num1].detail)
//   $("#li_item_image_2").attr("src",object_itemlist[wv_num2].image)
//   $("#li_item_title_2").text(object_itemlist[wv_num2].title)
//   $("#li_item_detail_2").text(object_itemlist[wv_num2].detail)
//   $("#li_item_image_3").attr("src",object_itemlist[wv_num3].image)
//   $("#li_item_title_3").text(object_itemlist[wv_num3].title)
//   $("#li_item_detail_3").text(object_itemlist[wv_num3].detail)
// }
// );


// $("#btn_nt").on("click",function(){
//   $("#li_item_image_1").attr("src",object_itemlist[nt_num1].image)
//   $("#li_item_title_1").text(object_itemlist[nt_num1].title)
//   $("#li_item_detail_1").text(object_itemlist[nt_num1].detail)
//   $("#li_item_image_2").attr("src",object_itemlist[nt_num2].image)
//   $("#li_item_title_2").text(object_itemlist[nt_num2].title)
//   $("#li_item_detail_2").text(object_itemlist[nt_num2].detail)
//   $("#li_item_image_3").attr("src",object_itemlist[nt_num3].image)
//   $("#li_item_title_3").text(object_itemlist[nt_num3].title)
//   $("#li_item_detail_3").text(object_itemlist[nt_num3].detail)
// }
// );

// $("#btn_unkown").on("click",function(){
//   $("#li_item_image_1").attr("src",object_itemlist[all_num1].image)
//   $("#li_item_title_1").text(object_itemlist[all_num1].title)
//   $("#li_item_detail_1").text(object_itemlist[all_num1].detail)
//   $("#li_item_image_2").attr("src",object_itemlist[all_num2].image)
//   $("#li_item_title_2").text(object_itemlist[all_num2].title)
//   $("#li_item_detail_2").text(object_itemlist[all_num2].detail)
//   $("#li_item_image_3").attr("src",object_itemlist[all_num3].image)
//   $("#li_item_title_3").text(object_itemlist[all_num3].title)
//   $("#li_item_detail_3").text(object_itemlist[all_num3].detail)
// }
// );


// 共通処理

// $(document).ready(function () {
//   console.log("ready!");
//   $("#li_item_image_1").attr("src",object_itemlist[all_num1].image)
//   $("#li_item_title_1").text(object_itemlist[all_num1].title)
//   $("#li_item_detail_1").text(object_itemlist[all_num1].detail)
//   $("#li_item_image_2").attr("src",object_itemlist[all_num2].image)
//   $("#li_item_title_2").text(object_itemlist[all_num2].title)
//   $("#li_item_detail_2").text(object_itemlist[all_num2].detail)
//   $("#li_item_image_3").attr("src",object_itemlist[all_num3].image)
//   $("#li_item_title_3").text(object_itemlist[all_num3].title)
//   $("#li_item_detail_3").text(object_itemlist[all_num3].detail)
// });



var AAA = null;
var BBB = [0,1,2,3];
let C = ['Straight', 'Wave', 'Natural','分からない'];
let D = ['ストレート', 'ウェーブ', 'ナチュラル','分からない'];
let E = ['img/girl_straight.png', 'img/girl_wave.png', 'img/girl_natural.png','分からない'];



var url = location.href;
var paramArray = [];
urlsplt = url.split("?");
parsplt = urlsplt[1].split("&");
 
for ( i = 0; i < parsplt.length; i++ ) {
param = parsplt[i].split("=");
paramArray.push(param[0]);
paramArray[param[0]] = param[1];
}
 

 // URLの一部が[id=Straight]の場合の処理
if ( paramArray["id"] == "Straight") {
  var AA = 0;
  $(document).ready(function () {
    console.log("ready!");
    $(".kokkaku_type_eng").text(C[AA])

    $("#li_item_image_1").attr("src",object_itemlist[st_num1].image)
    $("#li_item_title_1").text(object_itemlist[st_num1].title)
    $("#li_item_detail_1").text(object_itemlist[st_num1].detail)
    $("#li_item_image_2").attr("src",object_itemlist[st_num2].image)
    $("#li_item_title_2").text(object_itemlist[st_num2].title)
    $("#li_item_detail_2").text(object_itemlist[st_num2].detail)
    $("#li_item_image_3").attr("src",object_itemlist[st_num3].image)
    $("#li_item_title_3").text(object_itemlist[st_num3].title)
    $("#li_item_detail_3").text(object_itemlist[st_num3].detail)
  });

// URLの一部が[id=Wave]の場合の処理
} else if ( paramArray["id"] == "Wave") {
  var AA = 1;
  $(document).ready(function () {
    $(".kokkaku_type_eng").text(C[AA])

    $("#li_item_image_1").attr("src",object_itemlist[wv_num1].image)
    $("#li_item_title_1").text(object_itemlist[wv_num1].title)
    $("#li_item_detail_1").text(object_itemlist[wv_num1].detail)
    $("#li_item_image_2").attr("src",object_itemlist[wv_num2].image)
    $("#li_item_title_2").text(object_itemlist[wv_num2].title)
    $("#li_item_detail_2").text(object_itemlist[wv_num2].detail)
    $("#li_item_image_3").attr("src",object_itemlist[wv_num3].image)
    $("#li_item_title_3").text(object_itemlist[wv_num3].title)
    $("#li_item_detail_3").text(object_itemlist[wv_num3].detail)
    console.log("ready!");
  });

// URLの一部が[id=Natural]の場合の処理
} else if ( paramArray["id"] == "Natural") {
  var AA = 2;
  $(document).ready(function () {
  $(".kokkaku_type_eng").text(C[AA])

  $("#li_item_image_1").attr("src",object_itemlist[nt_num1].image)
  $("#li_item_title_1").text(object_itemlist[nt_num1].title)
  $("#li_item_detail_1").text(object_itemlist[nt_num1].detail)
  $("#li_item_image_2").attr("src",object_itemlist[nt_num2].image)
  $("#li_item_title_2").text(object_itemlist[nt_num2].title)
  $("#li_item_detail_2").text(object_itemlist[nt_num2].detail)
  $("#li_item_image_3").attr("src",object_itemlist[nt_num3].image)
  $("#li_item_title_3").text(object_itemlist[nt_num3].title)
  $("#li_item_detail_3").text(object_itemlist[nt_num3].detail)
});
 
  // URLの一部が[id=unknown]の場合の処理
} else if ( paramArray["id"] == "unknown") {
  var AA = 3;
  $(document).ready(function () {
    $(".kokkaku_type_eng").text("未診断")

    $("#li_item_image_1").attr("src",object_itemlist[all_num1].image)
    $("#li_item_title_1").text(object_itemlist[all_num1].title)
    $("#li_item_detail_1").text(object_itemlist[all_num1].detail)
    $("#li_item_image_2").attr("src",object_itemlist[all_num2].image)
    $("#li_item_title_2").text(object_itemlist[all_num2].title)
    $("#li_item_detail_2").text(object_itemlist[all_num2].detail)
    $("#li_item_image_3").attr("src",object_itemlist[all_num3].image)
    $("#li_item_title_3").text(object_itemlist[all_num3].title)
    $("#li_item_detail_3").text(object_itemlist[all_num3].detail)
  });

};






// $(".kokkaku_btn").on('click', function(){        
//     if(AA=3){
//       var num1 = Math.floor(Math.random() * 30);
//       var num2 = Math.floor(Math.random() * 30);
//       var num3 = Math.floor(Math.random() * 30);
//     } else if (AA=1){



//     }

//     var num1 = Math.floor(Math.random() * 30);
//     var num2 = Math.floor(Math.random() * 30);
//     var num3 = Math.floor(Math.random() * 30);

//     console.log(num1, "ランダム生成した結果の数字"); 
//     console.log(num2, "ランダム生成した結果の数字"); 
//     console.log(num3, "ランダム生成した結果の数字"); //ここまで確認OK


//     var num1 = Math.floor(Math.random() * 30);
//     var num2 = Math.floor(Math.random() * 30);
//     var num3 = Math.floor(Math.random() * 30);

//     console.log(num1, "ランダム生成した結果の数字"); 
//     console.log(num2, "ランダム生成した結果の数字"); 
//     console.log(num3, "ランダム生成した結果の数字"); //ここまで確認OK



















