/*
filter creates a new array by removing elements that don't belong
*/

var tasks = [{
    'name': 'Write for Envato Tuts+',
    'duration': 120
},
{
    'name': 'Work out',
    'duration': 60
},
{
    'name': 'Procrastinate on Duolingo',
    'duration': 240
}
];


var difficult_tasks = [];
 
tasks.forEach(function (task) {
    if (task.name.startsWith('P')) {
        difficult_tasks.push(task);
    }
})
console.log('forEach: ', difficult_tasks)

var ab = tasks.filter((task) => {
return task.name.startsWith('P')
})
console.log('filter: ', ab)