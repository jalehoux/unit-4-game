var player = {
    totalhp: 0,
    totalatk: 0,
    selected: false,
    numattacks: 3,
    domvar: $('#yourchars').clone(),
    allcharacters: [
        {
        character: {
            name: "Luke Skywalker",
            description: "add description here",
            hp: 150,
            atk: 18,
            catk: 10,
            id: "0"
            }
        },
        {
        character: {
            name: "Obi-Wan Kenobi",
            description: "add description here",
            hp: 100,
            atk: 9,
            catk: 15,
            id: "1"
            }
        },
        {
        character: {
            name: "Darth Maul",
            description: "add description here",
            hp: 15,
            atk: 25,
            catk: 7,
            id: "2"
            }
        },
        {
        character: {
            name: "Darth Sidious",
            description: "add description here",
            hp: 80,
            atk: 25,
            catk: 7,
            id: "3"
            }
        }
    ],
    selectchar: function(val){
        if(player.selected == false) {
            a = player.allcharacters[val];
            player.totalhp = a.character.hp;
            player.totalatk = a.character.atk;
            $('#hp').html(player.totalhp);
            $('#attk').html(player.totalatk);
            b = $('.img-fluid[value='+val+']');
            b.clone().attr({onclick:'player.getinfo('+val+')'}).prependTo("#myplayer");
            $("#allchars .img-fluid").not(b).clone().attr({onclick:this.val}).prependTo('#remaining');
            $('#yourchars').replaceWith("<h4> Choose your first opponent!</h2>");
            player.selected = true;
        } else {
            this.selectopp(val);
        }
    },
    makeattack: function() {
        if(this.selected == true && computer.selected == true) {
            computer.totalhp = computer.totalhp - player.totalatk;
            $('#opphp').html(computer.totalhp);
            player.totalatk = player.totalatk + player.totalatk;
            $('#attk').html(player.totalatk);
            player.totalhp = player.totalhp - computer.totalcatk;
            $('#hp').html(player.totalhp);
            if(computer.totalhp <= 0) {
                console.log("defeated");
                $('#compchar .img-fluid').hide();
                $('#opphp').html('');
                $('#cattk').html('');
                this.numattacks--;
                computer.selected = false;
                if(this.numattacks == 0){
                    this.reset('win');
                }
            } else if(player.totalhp <= 0) {
                this.reset('loss');
            }
        } else {
            var msg = "<img src='./assets/images/darth-vader.jpg'>" +
            "<h3 align=center>\"I find your lack of faith disturbing.\"</h3>" +
            "<p align=center>Choose a player and opponent before attacking</p>";
            alertify.logPosition("top right");
            alertify.error(msg);
        }
    },
    reset: function(result) {
        this.totalhp = 0;
        this.totalhp = 0;
        this.selected = false;
        this.numattacks = 3;
        computer.totalcatk = 0;
        computer.totalhp = 0;
        computer.selected = false
        $('#allchars').html(this.domvar);
        $('#myplayer').html('');
        $('#compchar').html('');
        $('#remaining').html('');
        $('#hp').html('');
        $('#attk').html('');
        if(result == 'loss'){
            console.log("reset game result was a " + result);
        } else if (result == 'win') {
            console.log("reset game result was a " + result);
        } else {
            console.log("game reset no outcome");
        }
    },
    selectopp: function(val){
        if(computer.selected == false) {
            opp = player.allcharacters[val];
            computer.totalhp = opp.character.hp;
            computer.totalcatk = opp.character.catk;
            $('#opphp').html(computer.totalhp);
            $('#cattk').html(computer.totalcatk);
            c = $('#remaining .img-fluid[value='+val+']');
            c.clone().prependTo('#compchar');
            c.remove();
            $('#yourchars').replaceWith("<h4> Let the battle begin!</h2>");
            computer.selected = true;
        } else {
            var msg = "<img src='./assets/images/QuiGonJinn.jpg'>" +
            "<h4 align=center>\"Remember: Your focus determines your reality.\"</h4>" +
            "<p align=center>Finish off this opponent before choosing another.</p>";
            alertify.logPosition("top right");
            alertify.success(msg);
        }
    },
    getinfo: function(num) {
        console.log(num);
    }
}

var computer = {
    totalcatk: 0,
    totalhp: 0,
    selected: false,
}
