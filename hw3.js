function max(iterable, key) {
    var maximum = Number.NEGATIVE_INFINITY;
    for (var i in iterable) {
      var i = key(i);
      if (i >= maximum) {
        maximum = i;
      }
    }
    return maximum;
  }


  const reverser = (x) => -x;


function changer(object, key, value) {
  var prev = key;
  if (Array.isArray(prev)) {
    prev.push(value);
  } else if (typeof prev == 'object' && prev != null) {
    Object = JSON.stringify({key: key, value: value});
  } else {
    key = value;
  }
  return null;
}

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        await a;
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = 
    console.log(five)
    return five
}


