
// alert(1111);








//これを使うと押したボタンの情報は取得できる

// $(function(){
//   $(".recommend_btn").click(function(){
//     console.log(500);
//     $("#idLoadLlink").load("../index.html #btn_st");
//   });
// });


// $(function(){


// $(".recommend_btn").click(function(){
//   console.log(500);
//   $("#idLoadLlink").load("../index.html #btn_st");
// });
// });



// // コピペ開始

// let A = null; //変数Aを用意する

// let B = [0,1,2,3]; //共通化するために配列Bに変数Aを入れる

// //以下共通化した数字を各ボタンの押下と紐付け（定義）

// $("#btn_st").on('click', function(){
//   A = 0;
//   // console.log(B[A]);
// });

// $("#btn_wv").on('click', function(){
//   A = 1;
//   // console.log(B[A]);
// });

// $("#btn_nt").on('click', function(){
//   A = 2;
//   // console.log(B[A]);
// });

// $("#btn_unkown").on('click', function(){
//   A = 3;
//   // console.log(B[A]);
// });


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
 {"image":'img/st_1.jpeg',"title":"スト1のtitleです","detail":"スト1のdetailです"},
 {"image":'img/st_2.jpeg',"title":"スト2のtitleです","detail":"スト2のdetailです"},
 {"image":'img/st_3.jpeg',"title":"スト3のtitleです","detail":"スト3のdetailです"},
 {"image":'img/st_4.jpeg',"title":"スト4のtitleです","detail":"スト4のdetailです"},
 {"image":'img/st_5.jpeg',"title":"スト5のtitleです","detail":"スト5のdetailです"},
 {"image":'img/st_6.jpeg',"title":"スト6のtitleです","detail":"スト6のdetailです"},
 {"image":'img/st_7.jpeg',"title":"スト7のtitleです","detail":"スト7のdetailです"},
 {"image":'img/st_8.jpeg',"title":"スト8のtitleです","detail":"スト8のdetailです"},
 {"image":'img/st_9.jpeg',"title":"スト9のtitleです","detail":"スト9のdetailです"},
 {"image":'img/st_10.jpeg',"title":"スト10のtitleです","detail":"スト10のdetailです"},
 {"image":'img/wv_1.jpeg',"title":"ウエーブ1のtitleです","detail":"ウエーブ1のdetailです"},
 {"image":'img/wv_2.jpeg',"title":"ウエーブ2のtitleです","detail":"ウエーブ2のdetailです"},
 {"image":'img/wv_3.jpeg',"title":"ウエーブ3のtitleです","detail":"ウエーブ3のdetailです"},
 {"image":'img/wv_4.jpeg',"title":"ウエーブ4のtitleです","detail":"ウエーブ4のdetailです"},
 {"image":'img/wv_5.jpeg',"title":"ウエーブ5のtitleです","detail":"ウエーブ5のdetailです"},
 {"image":'img/wv_6.jpeg',"title":"ウエーブ6のtitleです","detail":"ウエーブ6のdetailです"},
 {"image":'img/wv_7.jpeg',"title":"ウエーブ7のtitleです","detail":"ウエーブ7のdetailです"},
 {"image":'img/wv_8.jpeg',"title":"ウエーブ8のtitleです","detail":"ウエーブ8のdetailです"},
 {"image":'img/wv_9.jpeg',"title":"ウエーブ9のtitleです","detail":"ウエーブ9のdetailです"},
 {"image":'img/wv_10.jpeg',"title":"ウエーブ10のtitleです","detail":"ウエーブ10のdetailです"},
 {"image":'img/nt_1.jpeg',"title":"ナチュラル1のtitleです","detail":"ナチュラル1のdetailです"},
 {"image":'img/nt_2.jpeg',"title":"ナチュラル2のtitleです","detail":"ナチュラル2のdetailです"},
 {"image":'img/nt_3.jpeg',"title":"ナチュラル3のtitleです","detail":"ナチュラル3のdetailです"},
 {"image":'img/nt_4.jpeg',"title":"ナチュラル4のtitleです","detail":"ナチュラル4のdetailです"},
 {"image":'img/nt_5.jpeg',"title":"ナチュラル5のtitleです","detail":"ナチュラル5のdetailです"},
 {"image":'img/nt_6.jpeg',"title":"ナチュラル6のtitleです","detail":"ナチュラル6のdetailです"},
 {"image":'img/nt_7.jpeg',"title":"ナチュラル7のtitleです","detail":"ナチュラル7のdetailです"},
 {"image":'img/nt_8.jpeg',"title":"ナチュラル8のtitleです","detail":"ナチュラル8のdetailです"},
 {"image":'img/nt_9.jpeg',"title":"ナチュラル9のtitleです","detail":"ナチュラル9のdetailです"},
 {"image":'img/nt_10.jpeg',"title":"ナチュラル10のtitleです","detail":"ナチュラル10のdetailです"}
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

$("#btn_st").on("click",function(){
  $("#li_item_image_1").attr("src",object_itemlist[st_num1].image)
  $("#li_item_title_1").text(object_itemlist[st_num1].title)
  $("#li_item_detail_1").text(object_itemlist[st_num1].detail)
  $("#li_item_image_2").attr("src",object_itemlist[st_num2].image)
  $("#li_item_title_2").text(object_itemlist[st_num2].title)
  $("#li_item_detail_2").text(object_itemlist[st_num2].detail)
  $("#li_item_image_3").attr("src",object_itemlist[st_num3].image)
  $("#li_item_title_3").text(object_itemlist[st_num3].title)
  $("#li_item_detail_3").text(object_itemlist[st_num3].detail)
}
);

$("#btn_wv").on("click",function(){
  $("#li_item_image_1").attr("src",object_itemlist[wv_num1].image)
  $("#li_item_title_1").text(object_itemlist[wv_num1].title)
  $("#li_item_detail_1").text(object_itemlist[wv_num1].detail)
  $("#li_item_image_2").attr("src",object_itemlist[wv_num2].image)
  $("#li_item_title_2").text(object_itemlist[wv_num2].title)
  $("#li_item_detail_2").text(object_itemlist[wv_num2].detail)
  $("#li_item_image_3").attr("src",object_itemlist[wv_num3].image)
  $("#li_item_title_3").text(object_itemlist[wv_num3].title)
  $("#li_item_detail_3").text(object_itemlist[wv_num3].detail)
}
);


$("#btn_nt").on("click",function(){
  $("#li_item_image_1").attr("src",object_itemlist[nt_num1].image)
  $("#li_item_title_1").text(object_itemlist[nt_num1].title)
  $("#li_item_detail_1").text(object_itemlist[nt_num1].detail)
  $("#li_item_image_2").attr("src",object_itemlist[nt_num2].image)
  $("#li_item_title_2").text(object_itemlist[nt_num2].title)
  $("#li_item_detail_2").text(object_itemlist[nt_num2].detail)
  $("#li_item_image_3").attr("src",object_itemlist[nt_num3].image)
  $("#li_item_title_3").text(object_itemlist[nt_num3].title)
  $("#li_item_detail_3").text(object_itemlist[nt_num3].detail)
}
);

$("#btn_unkown").on("click",function(){
  $("#li_item_image_1").attr("src",object_itemlist[all_num1].image)
  $("#li_item_title_1").text(object_itemlist[all_num1].title)
  $("#li_item_detail_1").text(object_itemlist[all_num1].detail)
  $("#li_item_image_2").attr("src",object_itemlist[all_num2].image)
  $("#li_item_title_2").text(object_itemlist[all_num2].title)
  $("#li_item_detail_2").text(object_itemlist[all_num2].detail)
  $("#li_item_image_3").attr("src",object_itemlist[all_num3].image)
  $("#li_item_title_3").text(object_itemlist[all_num3].title)
  $("#li_item_detail_3").text(object_itemlist[all_num3].detail)
}
);


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



var url = location.href;
var paramArray = [];
urlsplt = url.split("?");
parsplt = urlsplt[1].split("&");
 
for ( i = 0; i < parsplt.length; i++ ) {
param = parsplt[i].split("=");
paramArray.push(param[0]);
paramArray[param[0]] = param[1];
}
 
if ( paramArray["id"] == "Straight") {
  // alert("ストレートから来ました");
  var AAA = 0;
  //ストから来た人向け
  $(document).ready(function () {
    console.log("ready!");
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
// URLの一部が[id=Straight]の場合の処理
} else if ( paramArray["id"] == "Wave") {
  // alert("WVから来ました");
  var AAA = 1;

//WVから来た人向け
  $(document).ready(function () {
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

// URLの一部が[id=Wave]の場合の処理
} else if ( paramArray["id"] == "Natural") {
  // alert("NTから来ました");
  var AAA = 2;
  //NTから来た人向け
  $(document).ready(function () {
  console.log("ready!");
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
  // URLの一部が[id=Wave]の場合の処理
  
} else if ( paramArray["id"] == "unknown") {
  // alert("わからないから来ました");
  var AAA = 3;
  //UNから来た人向け
  $(document).ready(function () {
    console.log("ready!");
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
  // URLの一部が[id=unknown]の場合の処理
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



    // $("#nanigaderukana").text(""); //なにがでるかなを消す
    // if (pc_random === 0) {
    //     console.log("PCの手：グー");
    //     $("#pc_hands").text(str_pc_hands[0]);
    //     pc = 0; //ハコに選んだ選択肢にひもづく数値をいれてあげる処理
    //     $("#gazou_kirikae").attr("src","img/pc_gu.png"); //PCハンズの画像表示切り替え
    // } else if (pc_random === 1) {
    //     console.log("PCの手：チョキ");
    //     $("#pc_hands").text(str_pc_hands[1]);
    //     pc = 1; //ハコに選んだ選択肢にひもづく数値をいれてあげる処理
    //     $("#gazou_kirikae").attr("src","img/pc_choki.png"); //PCハンズの画像表示切り替え
    // } else if (pc_random === 2) {
    //     console.log("PCの手：パー");
    //     $("#pc_hands").text(str_pc_hands[2]);
    //     pc = 2; //ハコに選んだ選択肢にひもづく数値をいれてあげる処理
    //     $("#gazou_kirikae").attr("src","img/pc_par.png"); //PCハンズの画像表示切り替え
    // } 
// } );
















