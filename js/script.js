var $hamIcon = document.querySelector("#ex_02 .mypage li:nth-child(4)");
//$hamIcon => 클릭할 대상

var $menu = document.querySelector("#ex_02 .menu");
//$menu => 변경될 대상 

$hamIcon.addEventListener("click", function(e){
    e.preventDefault();
    var activeMenu = $menu.classList.contains("active"); 
    //true 또는 flase 메뉴에 active가 없으면 flase
    console.log(activeMenu);
    if(!activeMenu){
        $menu.classList.add("active");
    }else{
        $menu.classList.remove("active");
    }
});


$(document).ready(function(){
    
    var $txt_part = [
        ["new_01_01.jpg", "KING Platinum 21 FG/AG", "Men's Soccer Cleats", "More"],
        ["new_02_01.jpg", "FUSE", "Training Shoes", "More"],
        ["new_03_01.jpg", "Suede RE.GEN", "Sneakers", "More"],
        ["new_04_01.jpg", "Leadcat", "G Sandals", "More"],
        ["new_05_01.jpg", "COOLADAPT", "Women’s Running Tank Top", "More"],
        ["new_06_01.jpg", "Sonora Waist", "BAG 2.0", "More"],
        ["new_07_01.jpg", "High Court Regal Mid", "Women's Sneakers", "More"],
        ["new_08_01.jpg", "Cali Star Rainbow", "Women's Sneakers", "More"],
        ["new_09_01.jpg","RS-Z Red", "CAMPUS", "More"],
        ["new_10_01.jpg", "MB.01", "BUZZ CITY", "More"],
    ];

    var $box = `
    <div class="arrivals">
        <div class="dark">
            <div class="txt_part">
                <h3>KING Platinum 21 FG/AG</h3>
                <h4>Men's Soccer Cleats</h4>
                <a href="./">More</a>
            </div>
        </div>                
    </div>
    `;

    for(i=0; i<$txt_part.length; i++){
        $("#new .boxs").append($box)
    };

    $("#new .arrivals").not(":eq(0)").each(function(i){
        $(this).css("background-image","url(./img/products/"+$txt_part[i][0]+")");
        $(this).find("h3").text($txt_part[i][1]);
        $(this).find("h4").text($txt_part[i][2]);
        $(this).find("a").text($txt_part[i][3]);

    });
 

    var $value = [
        ["category_01.jpg", "EVERYDAY", "BEST FOR : A RUN HERE AND THERE.", "Shop Now"],
        ["category_02.jpg", "COMPETITIVE", "BEST FOR : CHASING THE NEXT RACE.", "Shop Now"],
        ["category_03.jpg", "EVERYDAY", "BEST FOR : RACKING UP THE MILES.", "Shop Now"],
    ];

    var $energy_boxs = `
        <div class="running">
            <div class="img"></div>
            <div class="txt_box">
                <h1></h1>
                <h2></h2>
                <a href="./"></a>
            </div>
        </div>
    `;


    for(i=0; i<$value.length; i++){
        $("#energy .energy_boxs").append($energy_boxs)
    };

    $("#energy .running").each(function(i){
        $(this).find(".img").css("background-image","url(./img/"+$value[i][0]+")");
        $(this).find(".txt_box h1").text($value[i][1]);
        $(this).find(".txt_box h2").text($value[i][2]);
        $(this).find(".txt_box a").text($value[i][3]);
    
    });


    // year
    var $year = [
        ["collection_01.jpg", "SOFT ON ANOTHER LEVEL", "CLOUDSPUN", "Shop Now"],
        ["collection_02.jpg", "ESCAPE FROM ROUTINE", "PUMA x HELLY HANSEN", "Shop Now"],
        ["collection_03.jpg", "EMPOWERED PEOPLE. CLEANER PLANET.", "PUMA x FIRST MILE", "Shop Now"],
    ];

    var $year_boxs = `
        <div class="gear">
            <div class="img"></div>
            <div class="txt_box">
                <h1></h1>
                <h2></h2>
                <a href="./"></a>
            </div>
        </div>
    `;


    for(i=0; i<$value.length; i++){
        $("#year .year_boxs").append($year_boxs)
    };

    $("#year .gear").each(function(i){
        $(this).find(".img").css("background-image","url(./img/"+$year[i][0]+")");
        $(this).find(".txt_box h1").text($year[i][1]);
        $(this).find(".txt_box h2").text($year[i][2]);
        $(this).find(".txt_box a").text($year[i][3]);
    
    });



});