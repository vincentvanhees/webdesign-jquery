$(document).ready(function() {
    $( "#clickme" ).click(function() {        
        $( "#rechthoek" ).slideDown("slow");
        // Haal tekst op uit invoervelden
        var naam = $("#voornaam").val();
        var libnaam = $("#libnaam").val();
        // Indien leeg, gebruik dan default waarden
        if (naam == "") {
            naam = "[naam niet ingevuld]"
        }
        if (libnaam == "") {
            libnaam = "[library niet ingevuld]"
        }
        // Leidt ook low-case library naam om condities eenvoudiger te controlleren
        let libnaam_lc = libnaam.toLowerCase();
        if (libnaam_lc == "jquery") {
            $( "#rechthoek" ).text(
                "Wat toevallig " + naam +
                "! jQuery is ook mijn favouriete javacript library.");
            $("#rechthoek").css({background: 'lightgreen'})
            $("label").css({color: 'green'})
            $("h1").css({color: 'green'})
        } else if (libnaam_lc == "typescript" || libnaam_lc == "d3" || libnaam_lc == "node.js") {
            $( "#rechthoek" ).text(
                "Leuk " + naam +
                ", " + libnaam + " zou ik ook nog wel eens willen leren.");
            $("#rechthoek").css({background: 'rgb(255, 255, 132'})
            $("label").css({color: 'rgb(81, 81, 2)'})
            $("h1").css({color: 'rgb(81, 81, 2)'})
        } else {
            $( "#rechthoek" ).text(
                "Interessant " + naam +
                "! De " + libnaam +
                " library kende ik nog niet.");            
            $("#rechthoek").css({background: 'lightskyblue'})
            $("label").css({color: 'blue'})
            $("h1").css({color: 'blue'})
        }
    });
});

