class linkedList {
    constructor(head = null) {
        this.head = head
    }
    size(){
        let count = 0
        let node = this.head

        while(node){
            count++
            node = node.next
        }
        return count
    }
    getLast() {
        let last = this.head
        while(last.next){
            last = last.next
        }
        return last
    }

    insertAfter(value,newNode){
        let node = this.head
    while(node){

        if(node.data === value){
            newNode.next = node.next
            node.next = newNode
            return
        } else {
            node = node.next
        }
    }
    }
}

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

let nodeA = new Node('A')
let nodeB = new Node('B')
let nodeC = new Node('C')
let nodeD = new Node('D')

nodeA.next = nodeC
nodeC.next = nodeB

let newList = new linkedList(nodeA)

newList.insertAfter('B',nodeD)

console.log(nodeB)




