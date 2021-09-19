    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }

    class DoubleLinkList{
        constructor(){
            this.head = null
            this.tail = null
            this.length = 0;
        }

        push(val){
            var newNode = new Node(val)
            if(!this.head){
                this.head =  newNode;
                this.tail = newNode;
                this.length++;
                return this.length;
            }

            
            var prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
            this.tail.prev = prev  
            this.length++
            return this;
        }

        pop(){
            if(!this.head){
                return undefined
            }
            var poppedNode = this.tail
            if(this.length ==1){   
                this.head = null
                this.tail = null
                this.length--
                return poppedNode
            }
            
            this.tail = poppedNode.prev
            poppedNode.prev = null 
            this.tail.next = null
            this.length--
            return poppedNode
        }

        shift(){
            if(!this.head){
                return undefined
            }
            var oldHead = this.head
            if(this.length==1){
                this.tail = null
                this.head = null
                return this
            }
            else{
                this.head = this.head.next
                this.head.prev = null
                oldHead.next = null
            }
            this.length--;
            return oldHead
        }

        unshift(val){
            var newNode = new Node(val)
            if(!this.head){
                this.head = newNode
                this.tail = newNode
                
            }
            else{
                newNode.next = this.head
                this.head.prev = newNode
                this.head = newNode
            }
            this.length++
            return this
        }

        get(index){
            if(index<0 || index > this.length-1){
                return undefined
            }
            
            if((this.length/2) > index){
                var counter = this.length-1
                var current = this.tail
                while(index!=counter){
                    current = current.prev 
                    counter--
                }
                return current
            }
            else{
                var counter = 0;
                var current = this.head
                while(index!=counter){
                    current = current.next
                    counter++
                }
                return current
            }
        }

        set(val, index){
        
            var node = this.get(index)
            if(node){
                node.val = val
                return true
            }
            return false
        }

        insert(val,index){
            var node = this.get(index-1)
            var nextNode = node.next
            if(node){
                var newNode =  new Node(val)
                node.next = newNode
                newNode.next = nextNode
                nextNode.prev = newNode
                newNode.prev = node
                this.length++
            }
            else{
                return false
            }
        }

        remove(index){
            if (index ==0){
                this.unshift()
            } 
            if (index == this.length-1){
                this.pop()
            }
            else{
                var node = this.get(index)
            
                if(node){
                    prevNode = node.prev
                    nextNode = node.next
                    prevNode.next = nextNode
                    nextNode.prev = prevNode
                    node.next = null
                    node.prev = null  
                    this.length --
                    return node             
                }
                
            }
            
        }
    }
 
var double = new DoubleLinkList()
double.push(10)
