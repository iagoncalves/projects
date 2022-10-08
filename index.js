function groceries(array){
    let arr = [];
    for (x of array){       
        arr.push(x.item);
    }

    result = '';

    for(i=0; i<arr.length; i++){

        if(i===arr.length-2){
            result = result + arr[i] + ' and '

        }else if(i===arr.length-1){
            result = result + arr[i];
        }
            
        else{
            result = result + arr[i] + ', ';
        }
    }
    return result;
  }

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])