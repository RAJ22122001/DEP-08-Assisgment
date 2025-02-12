document.addEventListener("DOMContentLoaded", function() {
    const div2 = document.querySelector('.div2');
    const div1 = document.querySelector('.div1');
    const button = document.querySelector('button');

    window.addEventListener('click', function(event) {
        console.log('Window level - clicked: ', event.target);
        console.log('Event phase (1=capturing, 3=bubbling):', event.eventPhase);
    }, true);

    document.addEventListener('click', function(event) {
        console.log('Document level - clicked: ', event.target);
        console.log('Event phase (1=capturing, 3=bubbling):', event.eventPhase);
    }, true);

    div2.addEventListener('click', function(event) {
        console.log('DIV 2 capturing - Event target:', event.target);
        console.log('Current Target:', event.currentTarget);
        console.log('Event phase (1=capturing, 3=bubbling):', event.eventPhase);
    }, true);

    div1.addEventListener('click', function(event) {
        console.log('DIV 1 bubbling - Event target:', event.target);
        console.log('Current Target:', event.currentTarget);
        console.log('Event phase (1=capturing, 3=bubbling):', event.eventPhase);
        event.stopPropagation();
    }, false);

    button.addEventListener('click', function(event) {
        console.log('Button clicked - Event target:', event.target);
        console.log('Current Target:', event.currentTarget);
        console.log('Event phase (1=capturing, 3=bubbling):', event.eventPhase);
    }, false);
});