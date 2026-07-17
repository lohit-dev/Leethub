class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null
        this.next = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)

    this.head.next = this.tail
    this.tail.next = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    this._remove(node)
    this._add(node)
    return node.value

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this._remove(this.map.get(key))
    }

    const newNode = new Node(key, value);
    this._add(newNode)
    this.map.set(key, newNode)

    // over our capacity
    if (this.map.size > this.capacity) {
        const lru = this.tail.prev
        this._remove(lru)
        this.map.delete(lru.key)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype._add = function (node) {
    const first = this.head.next;

    node.prev = this.head;
    node.next = first;

    first.prev = node;
    this.head.next = node;
};

LRUCache.prototype._remove = function (node) {
    const previous = node.prev;
    const next = node.next;

    previous.next = next;
    next.prev = previous;
};