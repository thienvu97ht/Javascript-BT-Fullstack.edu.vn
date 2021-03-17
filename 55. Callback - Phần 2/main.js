// Bài tập forEach, reduce, find. filter
var users = [
    {
        name: 'Vũ',
        age: 18
    },
    {
        name: 'Tuấn',
        age: 20
    },
    {
        name: 'Phong',
        age: 19
    },
    {
        name: 'Vũ',
        age: 20
    }
]

//forEach

Array.prototype.forEach2 = function(param) {
    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++) {
        param(this[i])
    }
    
}

function myCallback(item) {
    console.log(item)
}

users.forEach2(myCallback);

// reduce

Array.prototype.reduce2 = function(myCallback2, initialValue) {
    if (initialValue == undefined) {
        initialValue = 0;
    }
    var total = initialValue;
    var arrayLength = this.length;

    for(var i = 0; i < arrayLength; i++) {
        console.log(this[i])
        total = myCallback2(total, this[i]);
    }
    console.log(total)
    return total;
}

function myCallback2(accumulator, currentValue) {
    return accumulator + currentValue.age
}

users.reduce2(myCallback2, 0);

// Find

Array.prototype.find2 = function (myCallback3) {
    var arrayLength = this.length;
    for(var i = 0; i < arrayLength; i++) {
        console.log(this[i]);
        if (myCallback3(this[i])) {
            return this[i];
        }
    }
    console.log(result)
}

var user = users.find2(function(user) {
    return user.name == 'Vũ';
});
console.log(user)

// Filter

Array.prototype.filter2 = function (myCallback4) {
    var arrayLength = this.length;
    var output = []
    for(var i = 0; i < arrayLength; i++) {
        console.log(this[i]);
        var result = this[i];
        if(myCallback4(this[i]) === true) {
            output.push(result)
        }
    }
    return output;
}

var user = users.filter2(function(user) {
    return user.name == 'Vũ';
});
console.log(user)