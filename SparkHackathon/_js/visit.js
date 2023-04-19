function visit(_id,_photo,_firstName,_lastname,_gender,_age,_dateofbirth,_home,_placeofdeath,_familystate,_storycode, _profession){
    this.id=_id;   
    this.photo=_photo;
    this.firstName=_firstName;
    this.lastname=_lastname;
    this.gender=gender;
    this.age=_age;
    this.dateofbirth=_dateofbirth;
    this.home=_home;
    this.placeofdeath=_placeofdeath;
    this.familystate=_familystate;
    this.storycode=_storycode;
    this.profession = _profession;
    }
    $(window).ready(function() {
        const txt1 = document.getElementById('tbuser');
        const gndr = document.getElementById('gdr');
        const age = document.getElementById('age');
        const prfssn = document.getElementById('prfssn');
        const btn1 = document.getElementById('btn1');
        // const out1 = document.getElementById('output1');

        function fun1(){
            this.distance(this.txt1,this.gndr,this.age,this.prfssn);

        }
        
        btn1.addEventListener('click', fun1);
                

    })

    visit.prototype.addToHTML=function(){
        var newBox=document.createElement("div");
        newBox.className="boxLodgingBandB";
        this.parent.appendChild(newBox);
        var newBox1=document.createElement("div");
        newBox1.className="boxLodgingBandBImg";
        newBox.appendChild(newBox1);
        newBox1.innerHTML="<img class='boxLodgingBandBImgMore' src='"+this.imgFolder+this.pic_Url+"'>";
        var newBox2=document.createElement("div");
        newBox2.className="boxLodgingBandBText";
        newBox.appendChild(newBox2);
        if (this.rate != "") {
            newBox2.innerHTML+="<h1 class='boxLodgingBandBName'>"+this.name+" <span title='ציון' class='BandBCityCircleRate'><strong class='BandBCityCircleRateText'>"+this.rate+"</strong></span> י</h1>";
        }
        else{
            newBox2.innerHTML+="<h1 class='boxLodgingBandBName'>"+this.name+"</h1>";
        }
        newBox2.innerHTML+="<p class='boxLodgingBandBAddress'>"+this.address+"</p>";
        var name1 = this.name;
        if (localStorage[name1] != undefined) {
            if (localStorage[name1] <  1) {
                newBox2.innerHTML+="<div class='boxLodgingBandBDistance'><span>י"+(localStorage[name1]*1000)+"</span><span> מטרים ממרכז העיר </span><img class='boxLodgingBandBSymbolslocation' src='../_images/location.png'></div>";
            }
            else{
                newBox2.innerHTML+="<div class='boxLodgingBandBDistance'><span>י"+(localStorage[name1])+"</span><span> קילומטרים ממרכז העיר </span><img class='boxLodgingBandBSymbolslocation' src='../_images/location.png'></div>";
            }
        }
        if (this.WiFi != "לא") {
            newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsWifi' src='../_images/wifi.png'>";
        }
        if (this.parking != "לא") {
            newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsParking' src='../_images/parking.png'>";
        }
        if (this.accessibility != "לא") {
            newBox2.innerHTML+="<img class='boxLodgingBandBSymbolsAccessibility' src='../_images/accessibility.png'>";
        }
    
        var newBox3=document.createElement("div");
        newBox3.className="addToFavoritesBox";
        newBox2.appendChild(newBox3);
        var name = this.name;
        newBox3.innerHTML="<botton class='addToFavorites' alt='"+name+"' id='id_addToFavorites' title='הוספה למועדפים' style='font-size:280%;cursor:pointer;' >&#9734;</botton>";
        var name = this.name;
        var object;
        var iEnd = (localStorage["FavoritesI"])*1;
        for (let i = 1; i <= iEnd; i++) {
            var object2 = localStorage.getItem("Favorites-"+ (i));
            object = JSON.parse(object2);
            if (object != undefined) {
                var objectName=object.name;
                while ((name.indexOf(" ") > -1) || (objectName.indexOf(" ")  > -1)) {
                    name=name.replace(" ",""); 
                    objectName=objectName.replace(" ","");
                }
                if((name.localeCompare(objectName)) == 0){
                    newBox3.innerHTML="<botton class='addToFavorites' alt='"+name+"' id='id_addToFavorites'  title='להוריד מהמועדפים' style='font-size:280%;cursor:pointer;color:yellow;'>&starf;</botton>";
                    test2 = true;
                    test=true;
                }
            }
        }
        $('.addToFavorites').on('click', function() {
            var newBox = document.getElementsByClassName('video');
        document.getElementsByClassName('weather_recommendation')[0].style.opacity= "0";
        document.getElementsByClassName('map')[0].style.opacity= "0";
        document.getElementsByClassName('trackM')[0].style.opacity= "0";
        document.getElementsByClassName('citiesM')[0].style.opacity= "0";
        document.getElementsByClassName('lodgingM')[0].style.opacity= "0";
        this.distance(this.newBox,this.near_To,this.X,this.Y,this.name);
        });
    
    
    
        
    }
    visit.prototype.distance=function(_name,_gender,_age,_profession){
        this.id=_id;   
        this.photo=_photo;
        this.firstName=_name;
        this.lastname=_lastname;
        this.gender=_gender;
        this.age=_age;
        this.dateofbirth=_dateofbirth;
        this.home=_home;
        this.placeofdeath=_placeofdeath;
        this.familystate=_familystate;
        this.storycode=_storycode;
        this.profession = _profession;
        $.ajax({
            url:"_JSON/samf.json",
            crossDomain:true,
            dataType:"json",
            success:function(json_Cities){
                var visit1 = null;
                for(var i=0; i<json_Cities.length;i++){
                    var item=json_Cities[i];
                    var id_json= item.id;   
                    var photo_json=item.photo;
                    var firstName_json=item.firstName;
                    var lastname_json=item.lastname;
                    var gender_json=item.gender;
                    var age_json=item.age;
                    var dateofbirth_json=item.dateofbirth;
                    var home_json=item.home;
                    var placeofdeath_json=item.placeofdeath;
                    var familystate_json=item.familystate;
                    var storycode_json=item.storycode;
                    var profession_json = item.profession;
                    if(gender_json == gender){
                        if(age == age_json){
                            if(profession_json == profession){
                                visit1=new visit(id_json,photo_json,firstName_json,lastname_json,gender_json,age_json,dateofbirth_json,home_json,placeofdeath_json,familystate_json,storycode_json,profession_json);
                            }else{
                                if(visit1 == null){
                                    visit1=new visit(id_json,photo_json,firstName_json,lastname_json,gender_json,age_json,dateofbirth_json,home_json,placeofdeath_json,familystate_json,storycode_json,profession_json);
                                }
                            }
                        }
                    }
                    
                }
                visit1.addToHTML();
            }
        })
    }
