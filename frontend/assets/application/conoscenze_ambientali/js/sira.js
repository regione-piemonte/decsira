var currentProfile;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function() {
    currentProfile = getParameterByName('profile') || undefined;
    $('#profileALink').click(function(e) {
        currentProfile = 'A';
        $('.pimenu-navbar-collapse').removeClass('in');
        $('.pimenu-navbar-collapse').css({height:0});
    });

    $('#profileBLink').click(function(e) {
        currentProfile = 'B';
        $('.pimenu-navbar-collapse').removeClass('in');
        $('.pimenu-navbar-collapse').css({height:0});
    });

    $('#profileCLink').click(function(e) {
        currentProfile = 'C';
        $('.pimenu-navbar-collapse').removeClass('in');
        $('.pimenu-navbar-collapse').css({height:0});
    });

    $('#profileDLink').click(function(e) {
        currentProfile = 'D';
        $('.pimenu-navbar-collapse').removeClass('in');
        $('.pimenu-navbar-collapse').css({height:0});
    });

    $('#datasetLink').click(function(e) {
        e.preventDefault();
        window.location.href="dataset.html?profile=" + (currentProfile || '');
    });

    $('#homeLink').click(function(e) {
        e.preventDefault();
        window.location.href="index.html?profile=" + (currentProfile || '');
    });

    $('#applicazioniLink').click(function(e) {
        e.preventDefault();
        window.location.href="applicazioni.html?profile=" + (currentProfile || '');
    });
    function goToMap(e) {
        e.preventDefault();
        if(currentProfile) {
            var back = $(e.target).data('back');
            window.location.href="map.html?back=" + back + "#/" + currentProfile;
        } else {
            alert('E\' necessario scegliere prima un profilo dal menu');
        }
    }

    $('#mapLink').click(function(e) {
        goToMap(e);
    });

    $('#option2').change(function(e) {
        e.stopPropagation();
        currentProfile = 'A';
        goToMap(e);
    });

    $('#mapLinkTematiche').click(function(e) {
        e.preventDefault();
        if(currentProfile) {
            var back = $(e.target).data('back');
            window.location.href="map.html?config=tematiche&back=" + back + "#/" + currentProfile;
        } else {
            alert('E\' necessario scegliere prima un profilo dal menu');
        }
    });
});
