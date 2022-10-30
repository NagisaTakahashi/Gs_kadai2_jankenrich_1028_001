
$(function(){ 
    var a = $('.modal_container');
    var b = $('.overlay');
    var c = $('.modal_open');
    var d = $('.modal_close');

    //OPENをクリックでモーダルを開く
    c.on('click',function(){
      a.fadeIn();
    });
    
    //CLOSEをクリックでモーダルを閉じる
    d.on('click',function(){
      a.fadeOut();
    });
    
    //モーダルの周りをクリックで閉じる
    b.on('click',function(){
      a.fadeOut();
    });
  }
);





//★選んだ骨格により、画像表示と文字の切り替え

//★★おためしチェック
// $(function(){ 
//   $('#btn_st').on('click',function(){
//     console.log(1);
//   });
// });


let A = null; //変数Aを用意する

let B = [0,1,2,3]; //共通化するために配列Bに変数Aを入れる

//以下共通化した数字を各ボタンの押下と紐付け（定義）


$(function(){ 
  $("#btn_st").on('click', function(){
    A = 0;
    // console.log(B[A]);
  });
});

$(function(){ 
  $("#btn_wv").on('click', function(){
    A = 1;
    // console.log(B[A]);
  });
});

$(function(){ 
  $("#btn_nt").on('click', function(){
    A = 2;
    // console.log(B[A]);
  });
});

$(function(){ 
  $("#btn_unkown").on('click', function(){
    A = 3;
    // console.log(B[A]);
  });
});


//以下押されたボタンの番号により画像と文字を出し分け

let C = ['Straight', 'Wave', 'Natural','分からない'];
let D = ['ストレート', 'ウェーブ', 'ナチュラル','分からない'];
let E = ['img/girl_straight.png', 'img/girl_wave.png', 'img/girl_natural.png','分からない'];


$(function(){
  $(".kokkaku_btn").on('click', function(){
  console.log(C[A]);
  $("#kokkaku_type_jpn").text(D[A]); //日本語表記したいので配列Dを使用
  $("#kokkaku_type_eng").text(C[A]); //英語表記したいので配列Cを使用
  $("#kokkaku_card_img").attr('src', E[A]); //画像切替したいので配列Eを使用
});
});



let F = ['https://www.instagram.com/recouture_official/guide/straight/17964207523716827/', 'https://www.instagram.com/recouture_official/guide/wave/17991004261479437/', 'https://www.instagram.com/recouture_official/guide/natural/17903782181590424/','#'];


$(function(){
  $("#recommend_design").on('click', function(){
  window.location.href = (F[A]); //リンク遷移切替したいので配列Fを使用
});
});










