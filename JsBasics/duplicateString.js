const str = "a b c c d e f i a m a e i o u"
let counts = {};
// str.split(" ").forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
str.split(" ").map(function(x) { return counts[x] = (counts[x] || 0)+1; });

console.log(counts)

// var x = 21;
//  var abc = function () {
//     console.log(x);
//     var x = 20;
//  };
//  abc ();

// function sum(a,b){
//     var sumInternal = function (b){return a+b;};
//     if(typeof b =='undefined'){
//         return sumInternal;
//     }else{
//         return sumInternal(b);
//     }
// }

// console.log(sum(2)(2), sum(2,3))
as= 7
function a(){
    console.log(as)
    var as =5
}
a()