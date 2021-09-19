class Reverse {
    
    constructor(){
        
    }
    reverse(str){
        if(str.length<=1){
            return str
        }
        return this.reverse(str.slice(1))+str[0]
    }
    
}

var str = new Reverse()
str.reverse("hello")