$('#age, #sex, #bmi, #children, #smoke, #region').bind('keyup', function() {
    if(allFilled()) {$('#calcButton').removeAttr('disabled')}
    else{$('#calcButton').prop("disabled", true);}
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}
