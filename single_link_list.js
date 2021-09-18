class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}

}

class SingleLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	/**
	 * 
	 * @param val 
	 */

	push(val){
		//if Linked List is empty
		if(this.head==null){
			this.head =	new Node(val)
			this.tail = this.head
			
		}
		else{
			let node = new Node(val)
			this.tail.next = node
			this.tail = node
			
		}
		this.length++
		return this
	}

	pop(){
		//if no element in the linked list
		if(!this.head){
			return undefined
		}
		// if only one element inside the linked list
		if(this.length==1){
			this.head = null
			this.tail = null
			this.length--;
			return this.head
		}
		else{
			var current = this.head
			var newTail = current
			while(current.next){
				newTail = current
				current = current.next
			}
			
			this.tail = newTail
			this.tail.next = null
			this.length--;
			return current
		}
	}

	shift(){
		//if no element inside the linked list
		if(!this.head){
			return undefined
		}
		
		var currentHead = this.head
		this.head = this.head.next
		this.length --
		if(this.length == 0)
		{
			this.tail = null
		}

		return currentHead 
		
	}
	unshift(val){
		if(!this.head){
			this.head = new Node(val)
			this.tail = this.head
		}
		else{
			var newNode = new Node(val)
			newNode.next = this.head	
			this.head = newNode
		}
		this.length++
		return this
	}

	get(index){
		var counter = 0; 
		
		if(index<0 || this.length-1<index){
			return null
		}
		var current = this.head
		while(counter!=index){
			this.current = this.current.next
			counter++;
		}
		return current
	}

	set(val, index){
		var foundIndex = this.get(index)
		if(foundIndex){
			foundIndex.val = val
			return true
		}
		return false
	}

	insert(val, index){
		if(index>this.length){
			return undefined
		}
		this.length++;
		if(index==this.length-1){
			this.push(val)
			return this
		}
		if(index==0){
			this.unshift(val)
			return this
		}
		var node = this.get(index-1)
		var newNode = new Node(val)
		newNode.next = node.next
		node.next = newNode
		return this
	}

	remove(index){
		if(index<0 || index>this.length-1){
			return undefined
		}
		if(index==0){
			return this.shift()
		}
		if(index === this.length-1){
			return this.pop()
		}
		var prevNode = this.get(index - 1)
		var nextNode = prevNode.next
		prevNode.next = nextNode.next
		this.length--;
		return nextNode
	}

	reverse(){
		var node = this.head
		this.head = this.tail 
		this.tail = node
		var next ;
		var prev = null;
		for (let i=0; i<this.length; i++){
			next = node.next
			node.next = prev
			prev = node
			node = next
		}
		return this
	}

}



var node = new SingleLinkedList()
node.push(5)
