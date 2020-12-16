window.addEventListener('DOMContentLoaded', function(){
    var arrQuestion = [
        {id:1, question:"products에서 id가 apple인 상품 찾기"},
        {id:2, question:"products에서 id가 orange인 상품은 몇번째인지 찾기"}, 
        {id:3, question:"products의 id를 차례대로 콘솔 찍기 / productNameObj를 사용해서 products에 'name' field를 추가하기"},
        {id:4, question:"상품의 id만 뽑아서 새로운 배열로 만들기 / 새로 만든 배열과 기존 products를 둘 다 console.log"},
        {id:5, question:"productNameArr에 '파인애플', '오렌지'가 포함되어있는지 확인하기"},
        {id:6, question:"productNameArr에서 '아보카도'가 몇번째인지 찾기"},
        {id:7, question:"amount가 5 이하인 애들만 거르기"},
        {id:8, question:"상품을 가격이 높은 순/낮은 순으로 재배열하기"},
        {id:9, question:"상품의 price를 amount와 곱해서 모두 더한 값 구하기"},
        {id:10, question:"다음 상품을 추가한 뒤 products를 콘솔로 찍기 / push와 concat을 각각 써보고 둘이 다른점을 알려주세요 "},
        {id:11, question:"상품이 총 몇 개인지 확인"},
        {id:12, question:"상품의 description만 뽑아서 콘솔로 찍되, '맛있는' 을 '달콤한' 으로 바꿔서 찍기"},
        {id:13, question:"productNamesArr를 string형태로 콘솔 찍기 / ex) '사과-바나나-오렌지-아보카도-복숭아-키위'"},
        {id:14, question:"위(13)에서 만든 string에서 '오렌지'와 '복숭아' 사이에 있는 문자열만 따로 빼기"},
        {id:15, question:"위(13)에서 만든 string을 다시 배열로 바꿔 콘솔 찍기"}
    ];
    
    var products = [
        { id: 'apple', price: 500, description: '맛있는 사과', amount: 10, },
        { id: 'banana', price: 5000, description: '맛있는 바나나', amount: 1, },
        { id: 'orange', price: 2500, description: '맛있는 오렌지', amount: 3, },
        { id: 'avocado', price: 3000, description: '맛있는 아보카도', amount: 9, },
        { id: 'peach', price: 1500, description: '맛있는 복숭아', amount: 2, },
        { id: 'kiwi', price: 1000, description: '맛있는 키위', amount: 4, },
    ];
    
    var productNamesArr = [
        '사과',
        '바나나',
        '오렌지',
        '아보카도',
        '복숭아',
        '키위',
    ];

    var productNamesObj = {
        apple: '사과',
        banana: '바나나',
        orange: '오렌지',
        avocado: '아보카도',
        peach: '복숭아',
        kiwi: '키위',
    };

    arrQuestion.forEach(function(ele){
        createSection(ele.id);
        createQuestion(ele.id, ele.question);
    });

    answer(products, productNamesArr, productNamesObj);
});

function createSection(num){
    var section = document.createElement("section");
    section.id="no"+num;
    document.querySelector("main").appendChild(section);

    var title = document.createElement("h3");
    // var titleText = document.createTextNode("No"+num);  
    // title.appendChild(titleText);
    title.textContent="No"+num;
    document.querySelector("#no"+num).appendChild(title);
}

function createQuestion(num, text){
    var question = document.createElement("p");
    question.id = "q"+num;
    question.textContent="Q"+num+" : "+text;
    document.querySelector("#no"+num).appendChild(question);
}

function answer(products, productNamesArr, productNamesObj){
    console.log("***1***************************************************");

    /*1번 products에서 id가 apple인 상품 찾기*/
    var an1Answer = products.find(function(product){
        // if(product.id === 'apple') return product;
        return product.id === 'apple';
    });
    console.log(an1Answer);

    console.log("***2***************************************************");
    
    /*2번 products에서 id가 orange인 상품은 몇번째인지 찾기*/
    var an2Answer = products.findIndex(function(product){
        if(product.id === 'orange') return product;
        // return product.id === 'orange';
    })+1;
    console.log(an2Answer);

    console.log("***3***************************************************");

    /*3번 
    1. products의 id를 차례대로 콘솔 찍기
    2. productNameObj를 사용해서 products에 'name' field를 추가하기*/
    products.forEach(function(product,i){
        console.log(product.id);

        /*productNamesArr배열 사용하기*/
        // product.name = productNamesArr[i]; 

        /*productNamesObj객체 사용하기 */
        var keys = Object.keys(productNamesObj);  //객체를 배열로 (객체의 키값이 배열로 저장됨)
        for(var i in keys){
            if(keys[i] === product.id){ //객체의 키값이 product.id와 같다면
                product.name = productNamesObj[keys[i]];    //그 객체의 value를 name필드에 저장
            }
        }
    });
    console.log(products);

    console.log("***4***************************************************");

    /*4번 
    1. 상품의 id만 뽑아서 새로운 배열로 만들기 
    2. 새로 만든 배열과 기존 products를 둘 다 console.log*/
    var an4Answer = products.map(function(product){
        return product.id;
    });
    console.log(products);
    console.log(an4Answer);

    console.log("***5***************************************************");

    /**5번 productNameArr에 '파인애플', '오렌지'가 포함되어있는지 확인하기**/
    if(productNamesArr.includes('파인애플')) console.log("파인애플 포함한다");
    else console.log("파인애플 포함안한다");
    if(productNamesArr.includes('오렌지')) console.log("오렌지 포함한다");
    else console.log("오렌지 포함안한다");

    console.log("***6***************************************************");

    /*6번 productNameArr에서 '아보카도'가 몇번째인지 찾기*/
    // an6Answer = productNamesArr.findIndex(function(productName){
    //     if(productName === '아보카도') return productName;
    // })+1;
    var an6Answer = productNamesArr.indexOf('아보카도')+1;
    console.log(an6Answer);

    console.log("***7***************************************************");

    /*7번 amount가 5 이하인 애들만 거르기*/
    an7Answer = products.filter(function(product){
        if(product.amount > 5) return product;
    });
    console.log(an7Answer);

    console.log("***8***************************************************");

    /***8번 상품을 가격이 높은 순/낮은 순으로 재배열하기***/
    products.sort(function(a, b){   //오름차순
        if(a.price>b.price) return 1;
        if(a.price<b.price) return -1;
        return 0;
    });
    console.log(products);    
    // products.sort(function(a, b){    //내림차순
    //     if(a.price<b.price) return 1;
    //     if(a.price>b.price) return -1;
    //     return 0;        
    // });

    console.log("***9***************************************************");

    /**9번 상품의 price를 amount와 곱해서 모두 더한 값 구하기**/

    var an9Answer = products.reduce(function(a,b){
        a += b.price * b.amount;
        return a;
    },0);
    console.log(an9Answer);

    console.log("***10***************************************************");

    /*10번 
    1. 다음 상품을 추가한 뒤 products를 콘솔로 찍기
    2. push와 concat을 각각 써보고 둘이 다른점을 알려주세요 */

    /* push : 기존배열에 추가 */
    // products.push({id:'pineapple', price:8000, description:"새로운 파인애플", amount:11});
    /* concat : 값을 추가한 새로운 배열 생성 */
    var an10Answer = products.concat({id:'pineapple', price:8000, description:"새로운 파인애플", amount:11});
    console.log(products);
    console.log(an10Answer);

    console.log("***11***************************************************");

    /*11번 상품이 총 몇 개인지 확인*/
    console.log(an10Answer.length);

    console.log("***12***************************************************");

    /***12번 상품의 description만 뽑아서 콘솔로 찍되, '맛있는' 을 '달콤한' 으로 바꿔서 찍기***/
    products.forEach(function(product){
        console.log(product.description.replace('맛있는','달콤한'));
    })
    console.log("***13***************************************************");


    /***13번 productNamesArr를 string형태로 콘솔 찍기 
     * ex) '사과-바나나-오렌지-아보카도-복숭아-키위'***/ 
    an13Answer = productNamesArr.join('-')
    console.log(an13Answer);


    console.log("***14***************************************************");
    

    /***14번 위(13)에서 만든 string에서 '오렌지'와 '복숭아' 사이에 있는 문자열만 따로 빼기***/
    
    console.log(an13Answer.substring(7, 19));

    console.log("***15***************************************************");


    /***15번 위(13)에서 만든 string을 다시 배열로 바꿔 콘솔 찍기***/

    console.log(an13Answer.split('-'));
}    




