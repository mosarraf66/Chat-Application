$(function() {
    var smsg="Hi";
    $("#form").submit(function(){
    $("#msend").trigger("click");
    return false;
    });
    var k="";
     var d = new Date();
     var h = d.getHours();
     var t = d.getMinutes();
     t=t-3;
     10&gt;h?h="0"+h:h=h;
     10&gt;t?t="0"+t:t=t;
     12&gt;h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
     $(".status").html("last seen today at " + time);
    var lastmsg="" ;var tick="";
    $(".tick").html(tick);
    $(".emoji").html("");
    $("#msend").click(function(){
    eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
    var a="";
    var scroll=($(".conversation-container").scrollTop())+1550;
     var d = new Date();
     var h = d.getHours();
     var t = d.getMinutes();
     10&gt;h?h="0"+h:h=h;
     10&gt;t?t="0"+t:t=t;
     12&gt;h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
    var msg=$("#val").val().trim();
    var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");
    msg==""?$("#val").focus():($("#ap").append(para),$(".status").css("margin-left","0"),
    $("#form")[0].reset(),setTimeout(function(){$(".status").html("online ")},900),setTimeout(function(){$(".status").html("typing... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
    });
    $("#name").html("goutam");
    function send(){
    var sr=lastmsg.split(" ");
    var search="";
     scroll=($(".conversation-container").scrollTop())+155065;
    for(x=0;xh?h="0"+h:h=h;
     10&gt;t?t="0"+t:t=t;
     12&gt;h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";
     var hello=["HELLO","HI","HEY THERE","HEY","HI DUDE"];
     var gm=["GM","GOOD MORNING","GOOD MORNING goutam", "GOOD MORNING Achraf"];
     var bad=["BAD","NOT BAD","USELESS","NOT WORKING","NOT GOOD"];
     var ge=["GOOD EVNG","GOOD EVENING","GOOD EVENING goutam","GOOD EVENING Achraf"];
     var gn=["GOON NIGHT","I'M FEELING SLEEPY"];
     var welcome=["NICE WORKING", "NICE CODE","NICE","WOW","WOW IT'S WORKING","GREAT CODE","AWESOME CODE","IT'S NICE","AWESOME CODE BRO","IT'S GOOD","OH MY GOD","OMG","OHO","NICE TO MEET YOU","NICE TO MEET U","NICE TO SEE YOU","NICE TO C U"];
     var s2u=["I HATE YOU","I LOVE YOU","I MISS YOU"];
     var gaf=["GOOD AFTERNOON","GOOD AFTERNOON goutam","GOOD AFTERNOON goutam" ];
     var like=["GOOD","👍🏻", "☺️","😅","LOL","ME TOO"];
     var hru=["HOW R U?","H R U?", "HOW ARE YOU?", "HRU?","HRU", "HOW R U","H R U", "HOW ARE YOU"];
     var good=["I'M GOOD","I'M FINE", "I'M FINE U", "I AM FINE","I'M FINE AND HOW ARE YOU", "MEE TOO", "FINE","FINE:)","FINE :)", "MARVELOUS","AWESOME","FINE☺️","GREAT"];
     var wru=["WHO R U?","W R U?", "WHO ARE YOU?", "WRU?","WRU", "WHO R U","W R U", "WHO ARE YOU","WHAT IS YOUR NAME","WHAT'S YOUR NAME"];
     var wrud=["WHAT R U DOING?","WHAT ARE YOU DOING?", "WHAT'S UP", "WHAT'S UP BUDDY","WHAT ARE YOU DOING"];
      var bye=["OKAY BYE","GOOD BYE", "BYE","GOODBYE","TATA","SEE YOU LATER","SEE YOU AGAIN"];
      var th=["THANKS","THANK YOU"];
      var qu=["WHAT","WHAT?","WHICH","WHICH?","WHEN","WHEN?","REALLY?"]
      var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH"];
     function isInArray(x, y) { return x.indexOf(y) &gt; -1; }
    isInArray(hello, lastmsg)==true?(smsg="Hello, How are you? 😊", k="Hello, How are you? "):
    isInArray(wru, lastmsg)==true?(smsg="I am goutam", k=smsg):
    isInArray(bad, lastmsg)==true?(smsg="Thanks for your precious feedback, I'll try to improve that.😇", k=smsg):
    isInArray(wrud, lastmsg)==true?(k="Nothing special and you? ", smsg=k+"☺️"):
    isInArray(bye, lastmsg)==true?(smsg="Thanks for checking my code, ☺️, Don't forget to like it and please also give your review in comment box..... Bye ", k=smsg,
    setTimeout(function(){$(".status").html("last seen today at "+time)},6000),
    setTimeout(function(){$(".status").css("margin-left","-50")},8000)):
    isInArray(th, lastmsg)==true?(k="You're Welcome ", smsg=k+"😇"):
    isInArray(gm, lastmsg)==true?(k="Good Morning ", smsg=k+"😇"):
    isInArray(gn, lastmsg)==true?(smsg="Good night", k=smsg):
    isInArray(welcome, lastmsg)==true?(smsg="Thanks", k=smsg):
    isInArray(s2u, lastmsg)==true?(smsg="Same to you", k=smsg):
    isInArray(qu, lastmsg)==true?(k="I don't know ", smsg=k+"😕"):
    isInArray(ge, lastmsg)==true?(k="Good Evening ", smsg=k+"😇"):
    isInArray(ok, lastmsg)==true?(smsg="hmm", k=smsg):
    isInArray(gaf, lastmsg)==true?(k="Good Afternoon",smsg=k+"😇"):
    isInArray(like, lastmsg)==true?(smsg="<font size="6">👍🏻</font>", k="ok"):
    isInArray(good, lastmsg)==true?(smsg="Nice to hear it. 😊", k="Nice to hear it. "):
    isInArray(hru, lastmsg)==true?(smsg="I'm good, What about you ? ", k=smsg):
    lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b>This are the top results </b><nav class='back'>&larr;</nav><nav class='forword'>&rarr;</nav>",k="This are the Top results" ):
    (smsg="Sorry, I didn't understand, please explain it with proper spellings or  If you say so I can search for you. To search, <br> type <q><b> Search Your keyword </b></q> for example type : <b>Search Sololearn</b>",k="Sorry, I didn't understand, please explain it, with proper spellings, or  If you say, so I can search for you. To search,type,Search Your keyword,for example, type, Search sololearn ");
    para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");
    setTimeout(function() { $('#ap').append(para);$(".status").html("online");
    $(".conversation-container").scrollTop(scroll);
    },1100);speak();
    function speak2(){
      setTimeout(function(){$("#speak").click();})
    }
    $("#speak").click(function(){
        responsiveVoice.speak(k);
    })
    function speak(){
        responsiveVoice.speak(k);
    }

    }
    });