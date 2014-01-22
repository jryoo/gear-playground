angular.module('dragModule', []). // create an angular dragModule
    directive('myDraggable', function($document) { // create a directive called myDraggable (pass in document)
        return function(scope, element, attr) { // give me scope, element, attr
            var startX = 0, startY = 0, x = 0, y = 0; // variables for startX, startY, x, y

            element.css({
                height: '100px',
                width: '100px',
                cursor: 'pointer',
                position: 'absolute'
            });

            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left:  x + 'px'
                });
            }

            function mouseup() {
                $document.unbind('mousemove', mousemove);
                $document.unbind('mouseup', mouseup);
            }
        }
    });