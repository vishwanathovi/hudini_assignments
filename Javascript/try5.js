const counter = {
    count: 0,
    add: function(){
        this.count+= 2 ;
    },
    sub: function(){
        this.count-= 1 ;
    },
    reset: function(){
        this.count = 0;
    },
    display: function(){
        console.log(this.count);
    }
}
counter.add();
counter.display();
counter.sub();
counter.display();
counter.reset();
counter.display();