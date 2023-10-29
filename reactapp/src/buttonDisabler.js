$('#ageX, #sexX, #bmiX, #childrenX, #smokerX, #regionX').bind('keyup', function() {
    if(allFilled()) $('#calcButton').removeAttr('disabled')
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}