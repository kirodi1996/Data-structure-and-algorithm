class Recursion{   
    constructor(){
        
    }
    reverse(str){
        if(str.length<=1){
            return str
        }
        return this.reverse(str.slice(1))+str[0]
    }

    isPalindrom(str){
        if(str.length==1) return true
        if(str.length==2) return str[0] == str[1]
        if(str[0] == str.slice(-1)) return this.isPalindrom(str.slice(1,-1))
        return false
    }

}
var str = new Recursion()
str.reverse("hello")
str.isPalindrom("mousoum")
