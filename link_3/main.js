
// 0. ひも付きチェック
  // alert(1111);


// 1.商品情報の出し分けのための配列を定義

  // var object = {"image":"null","title":"null","detail":"null",url;""}; の構造になっています。

  var object_itemlist= [
    {"image":"img/s_01.jpeg","title":"Vネック","detail":"骨格ストレートさんのデコルテを綺麗に見せてくれるのにオススメのカスタマイズはVネック。バスト周りのボリュームを縦V開きの視覚効果でスッキリ見せてくれます✨","url":"https://www.instagram.com/p/CQGxPsHMQk-/?utm_source=ig_web_copy_link"},
    {"image":"img/s_02.jpeg","title":"ラージ・ラウンドネック","detail":"骨ストさんの定番・Vネックに飽きがきたときにぜひお試しいただきたいのが大きめに襟周りを広げたラージ・ラウンドネックのネックライン。ベースはラウンドネックのため柔らかさがありながら、大きめに首元を空けることにより抜け感を演出しています。", "url":"https://www.instagram.com/p/CQDfVuZM7dZ/?utm_source=ig_web_copy_link"},
    {"image":"img/s_03.jpeg","title":"フレンチ・スリーブ","detail":"骨ストさんにオススメのフレンチ・スリーブです。フレンチスリーブはノースリーブをベースに肩ラインに沿った短めのお袖デザイン。そのため、ノースリーブでは二の腕が気になるときにもぜひお試しいただきたいデザインです。半袖ほどの長さはないので初夏からの涼やかなシーズンムードにも◎","url":"https://www.instagram.com/p/CQUUWPMsmMx/?utm_source=ig_web_copy_link"},
    {"image":"img/w_01.jpeg","title":"ボートネック","detail":"WAVEさんの華奢なデコルテを引き立たせるボートネック。適度に女性らしい、上品な雰囲気に仕上がるので、キレイめなスタイリングにも◎。縦幅を開けすぎずに、横に広げることで、WAVEさんの薄めで華奢なデコルテまわりも華やかな印象に。","url":"https://www.instagram.com/p/CQDNYygsrCo/?utm_source=ig_web_copy_link"},
    {"image":"img/w_02.jpeg","title":"ワイドスクエアネック","detail":"あえて横に広めに広げたスクエアネックはWAVEさんに特にオススメ。通常のスクエアよりもワイド幅が広く、縦の開きが少ないので、WAVEさんの薄めで華奢なデコルテまわりも華やかな印象に。華奢なネックレスとも好相性です。","url":"https://www.instagram.com/p/CQOjHxQMEnh/?utm_source=ig_web_copy_link"},
    {"image":"img/w_03.jpeg","title":"長めノースリーブ","detail":"WAVEさんに特にオススメなのが長めスタイリングのノースリーブ。二の腕部分が程よく隠れるため、WAVEさんの華奢めな肩幅と相まって、二の腕をカバーしつつ張り出しが少ない分ストンと落ちて、腕がホッソリ見え効果UP。","url":"https://www.instagram.com/p/CQUT7UPMswu/?utm_source=ig_web_copy_link"},
    {"image":"img/n_01.jpeg","title":"タイトめクルーネック","detail":"ぜひナチュラルさんにこそ取り入れていただきたいタイトめクルーネック。襟周りをあえて狭めにしているため、首元の開きが少ない方がお好きの方、詰まり気味をオシャレに着こなせる方におすすめ！骨格的には、ナチュラルさんが開きすぎていないものが似合うのでオススメしております。","url":"https://www.instagram.com/p/CQGb8sysjv8/?utm_source=ig_web_copy_link"},
    {"image":"img/n_02.jpeg","title":"スクエアネック","detail":"開き控えめのスタンダードなスクエアネック。シャープで洗練された雰囲気に。カジュアルなのに大人可愛い仕上がりになので、ナチュラルさんお得意のオーバーサイズと合わせてもバランス良く仕上がります。","url":"https://www.instagram.com/p/CQN4oC6MO1b/?utm_source=ig_web_copy_link"},
    {"image":"img/n_03.jpeg","title":"アメリカンスリーブ","detail":"今年らしい新鮮なスタイリングが叶うアメリカンスリーブ。アームホールのくりを控えめにして、さりげなく取り入れていただきやすいラインにしています。骨格的にスラリとした肩が綺麗に出やすい骨格ナチュラルさんに特にオススメです。","url":"https://www.instagram.com/p/CQUVDHQs57o/?utm_source=ig_web_copy_link"},
   ];
   
     //出力チェック
     // console.log(object_itemlist[10].title);
   
   
   
   // 2.以下にて乱数を生成・商品情報の配列リストを指定して情報をひっぱってくる処理--------
   
   
   
   // 2-B.変数リストは１つで中の数字を骨格別に分ける方法（後の処理が楽）
   
     // documentが読み込まれた時点から処理がスタートする合図
   
     $(document).ready(function () {
   
       //2-B-1. 場合分けのためにまずパラメーターを取ってくる（判定する）準備
   
       var url = location.href;
       var paramArray = [];
       urlsplt = url.split("?");
       parsplt = urlsplt[1].split("&");
       
       for ( i = 0; i < parsplt.length; i++ ) {
       param = parsplt[i].split("=");
       paramArray.push(param[0]);
       paramArray[param[0]] = param[1];
       }
   
       //2.B-2. min以上max以下の整数値の乱数を返す準備 ※link_3頁ではランダム生成せずに固定メニューにするため不要
   
      //  const pickN = (min, max, n) => {
      //    const list = new Array(max-min+1).fill().map((_, i) => i + min);
      //    const ret = [];
      //    while(n--) {
      //      const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
      //      ret.push(...list.splice(rand, 1))
      //    }
      //    return ret;
      //  }
   
       //2.B-3.取ってきたパラメーターの値ごとにif分岐で文字を表示するためのハコ
   
       var X = null; //文字を表示するための箱
       let Y = ['Straight', 'Wave', 'Natural']; //文字を表示するための配列
   
       //2-B-4.取ってきたパラメーターの値ごとにif分岐で数字を割り付けるための箱
   
       var list = null;
   
       //2-B-5.取ってきたパラメーターの値ごとにif分岐で数字をXとlistに入れていく
   
       if ( paramArray["id"] == "Straight") { //idにstraightというパラメーターを持つ場合の処理
         var list = [0,1,2]; //数字を格納する配列リストlistに0-9の数字の中から3つ入れる
         var X = 0; //ハコにストレートの場合は0と定義
         // console.log(list); //ストレートを選んだ人向けのリストを出力（一応）
   
         } else if ( paramArray["id"] == "Wave") { //idにwaveというパラメーターを持つ場合の処理
         var list = [3,4,5]; //数字を格納する配列リストlistに10-19の数字の中から3つ入れる
         var X = 1; //ハコにWVの場合は1と定義
   
         } else if ( paramArray["id"] == "Natural") { //以下natural向け
           var list = [6,7,8];
           var X = 2;  

           //骨格不明はおすすめカスタマイズボタン無し
       };
   
       //出力チェック
       console.log(list); 
   
       //2-B-6.リストに３つ入った数字をそれぞれnum1/num2/num3に置き換える（object_itemlistのインデックス番号を指定するため）
   
       var num1 = list[0] //list_numのうち1つめの番号
       var num2 = list[1] //list_numのうち2つめの番号
       var num3 = list[2] //list_numのうち3つめの番号
   
   
       //2-B-7.選んだ骨格に合わせてテキストを出し分け（タイトル用）


   
       $(".kokkaku_type_eng").text(Y[X])
   
       //2-B-7.選んだ骨格に合わせて商品情報を出し分け（メインコンテンツ用）
       $("#li_item_image_1").attr("src",object_itemlist[num1].image)
       $("#li_item_title_1").text(object_itemlist[num1].title)
       $("#li_item_detail_1").text(object_itemlist[num1].detail)
       $("#item_link_1").attr("href",object_itemlist[num1].url)

       $("#li_item_image_2").attr("src",object_itemlist[num2].image)
       $("#li_item_title_2").text(object_itemlist[num2].title)
       $("#li_item_detail_2").text(object_itemlist[num2].detail)
       $("#item_link_2").attr("href",object_itemlist[num2].url)

       
       $("#li_item_image_3").attr("src",object_itemlist[num3].image)
       $("#li_item_title_3").text(object_itemlist[num3].title)
       $("#li_item_detail_3").text(object_itemlist[num3].detail)
       $("#item_link_3").attr("href",object_itemlist[num3].url)

     });
   
   
   //以上！！！！
   //★★ここまでのコードは、一番コンパクトにまとまったバージョン！★★
   
