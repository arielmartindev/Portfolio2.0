var elements = document.getElementById('test');
//var lang = elements.getAttribute('lang');


//Formulario de contacto
var action = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSenEQOKGiv8xJS-Pu7Tj_AetWqLqbSnvtW753eEddcE79ZFFw/formResponse";
var cname = "entry.1440274532";
var emailAddress = "emailAddress";
var message = "entry.388888529";


$(document).ready(function() {
    $("#contact").attr("action", action);
    $("#cname").attr("name", cname);
    $("#emailAddress").attr("name", emailAddress);
    $("#message").attr("name", message)
});


//links a redes
var whatsapp = "https://api.whatsapp.com/send?phone=5491157673825&text=Ud se está contactando con Ariel Martin, Desarrollador Web. https://www.arielmartin.ml";
var mailto = "mailto:arielmartin80@gmail.com";
var github = "https://github.com/arielmartin80/";
var gitlab = "https://gitlab.com/arielmartin80/";
var linkedin = "https://www.linkedin.com/in/ariel-martin-705a3461";
var tel = "tel:+5491157673825";

$(document).ready(function() {
    $(".linkedin").attr("href", linkedin);
    $(".github").attr("href", github);
    $(".gitlab").attr("href", gitlab);
    $(".whatsapp").attr("href", whatsapp);
    $(".mailto").attr("href", mailto)
    $(".tel").attr("href", tel);
});