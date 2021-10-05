function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
    let l3 = ListNode()
    let current = l1
    while(l1.next!=null && l2.next.next!=null){
        if(l1.val>=l2.val){
            l3.val = l2.val
            
        }
    }
};