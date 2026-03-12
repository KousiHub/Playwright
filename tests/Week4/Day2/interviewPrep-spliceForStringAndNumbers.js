let Letters = ["S", "u", "v", "e", "t","h","i"];  
Letters.splice(2, 4, "s", "h", "m");//-removes the elements from index 2 to index 4 (inclusive of index 4) and adds the new elements at the same index  
console.log(Letters);

//splice()-Working as expected => [ 'S', 'u', 's', 'h', 'm', 'i' ]