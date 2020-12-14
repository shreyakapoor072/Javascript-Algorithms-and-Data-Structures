function printNum(limit){
    let i =0, done;
    console.log(i);
    done = setInterval(() => {
        if(i === limit) {
            clearInterval(done);
            return;
        }
        console.log(++i);
    }, 1000);
}

printNum(10)