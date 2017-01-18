var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [
                {
                    background: '#00F',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#00F',
                    width: 25
                } //...
            ]
        },
        {
            background: '#0EF',
            updateTime: 500,
            elements: [
                {
                    background: '#0E1',
                    width: 25
                },
                {
                    background: '#00F',
                    width: 50
                },
                {
                    background: '#9A1',
                    width: 25
                } //...
            ]
        } //...
    ]
};

var container = document.createElement('div');

generateBlocks();

var elements = container.querySelectorAll('.elements');

changeColor();

document.body.appendChild(container);

function generateBlocks() {

    for (var i = 0; i < params.lines.length; i++) {

        var line = document.createElement('div');
        /**
         * There is screen height in spec, but I think it's should be window(of browser)
         */
        line.style.height = window.innerHeight / params.lines.length + 'px';
        /**
         * otherwise
         * line.style.height = screen.height / params.lines.length + 'px';
         */
        line.style.width = '100%';
        line.style.backgroundColor = params.lines[i].background;
        line.setAttribute('time', params.lines[i].updateTime);

        for (var j = 0; j < params.lines[i].elements.length; j++) {

            var element = document.createElement('div');

            element.style.height = '100%';
            element.style.width = params.lines[i].elements[j].width + '%';
            element.style.backgroundColor = params.lines[i].elements[j].background;
            element.style.display = 'inline-block';
            element.className = 'elements';
            line.appendChild(element);
        }

        container.appendChild(line);
    }
}

function randomHexColor() {

    var base = '0123456789ABCDEF',
        color = '#';

    while (color.length < 4) {

        var random = Math.floor(Math.random() * base.length);
        color += base[random];
    }

    return color;
}

function changeColor() {

    for (var k = 0; k < elements.length; k++) {

        var time = elements[k].parentElement.getAttribute('time');

        var tmp = (function (kFrozen) {

            return function () {
                elements[kFrozen].style.backgroundColor = randomHexColor();
            }

        })(k);

        setInterval(tmp, time);
    }
}







