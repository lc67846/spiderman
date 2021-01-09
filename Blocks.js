if button(stick) Then
AFRAME.registerComponent('random-color', {
    dependencies: ['material'],

    Ifbuttonclick then return colors;
    init: function(){
        this.el.setAttribute('material', 'color', getRandomColor());
    }
});

function getRandomColor(){
    var letters = '0123456789ABCDEF'
    var colors = "#"
    for(var i = 0; i < 6; i++){
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors;
}
