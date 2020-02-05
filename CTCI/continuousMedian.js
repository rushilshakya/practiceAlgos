const heap = {
  minHeap: [], //everything bigger than biggest item in maxHeap
  maxHeap: [], //everthing smaller than the smallest item in minHeap
  post: function(val) {
    //first put item into max or min heap
    if (this.minHeap.length > 0 && val > this.minHeap[0]) {
      //if incoming value is greater than the smallest value of minHeap,
      //then add to MinHeap
      this.postToMinHeap(val);
    } else {
      //else, it means incoming value is lesser than any value in minHeap
      //so add it it MaxHeap
      this.postToMaxHeap(val);
    }

    //balance heap
    this.balanceHeap();
  },
  getMedian() {
    if (this.minHeap.length > this.maxHeap.length) return this.minHeap[0];
    else if (this.maxHeap.length > this.minHeap.length) return this.maxHeap[0];
    else return (this.minHeap[0] + this.maxHeap[0]) / 2;
  },
  postToMinHeap(val) {
    //1. then put it in the last position in minHeap
    this.minHeap.push(val);
    //2. then walk up the parent till 0 index, or till break statement
    let minPointer = this.minHeap.length - 1;
    //2.1 if self is smaller than parent, then swap
    while (minPointer > 0) {
      let parentPointer = Math.ceil(minPointer / 2) - 1;

      //2.1 if self is small than parent, then swap
      if (this.minHeap[minPointer] < this.minHeap[parentPointer]) {
        this.swap(this.minHeap, minPointer, parentPointer);
        // let temp = this.minHeap[minPointer];
        // this.minHeap[minPointer] = this.minHeap[parentPointer];
        // this.minHeap[parentPointer] = temp;

        //now increment the minPointer to the parentPointer
        minPointer = parentPointer;

        //    else break
      } else break;
    }
  },
  postToMaxHeap(val) {
    //1. so put it in the last position in maxHeap
    this.maxHeap.push(val);
    //2. then walk up the parent till 0 index, or till break statement
    let maxPointer = this.maxHeap.length - 1;
    while (maxPointer > 0) {
      let parentPointer = Math.ceil(maxPointer / 2) - 1;

      //2.1 if self is bigger than parent, then swap
      if (this.maxHeap[maxPointer] > this.maxHeap[parentPointer]) {
        this.swap(this.maxHeap, maxPointer, parentPointer);
        // let temp = this.maxHeap[maxPointer];
        // this.maxHeap[maxPointer] = this.maxHeap[parentPointer];
        // this.maxHeap[parentPointer] = temp;

        //now increment the maxPointer to the parentPointer
        maxPointer = parentPointer;

        //    else break
      } else break;
    }
  },
  balanceHeap() {
    // console.log('balancing', this.maxHeap.length, this.minHeap.length);
    if (this.minHeap.length - this.maxHeap.length >= 2) {
      // console.log('minheap is longer');
      //if minHeap is larger, then
      //1. post the head of minHeap to maxHeap
      this.postToMaxHeap(this.minHeap[0]);
      //2. rezig the minHeap
      //2.1 pop the last element to the head
      let lastElement = this.minHeap.pop();
      this.minHeap[0] = lastElement;

      //re-order the minHeap
      this.reOrderMinHeap();
    } else if (this.maxHeap.length - this.minHeap.length >= 2) {
      // console.log('maxheap is longer');
      //if maxHeap is larger, then
      //1. post the head of maxHeap to minHeap
      this.postToMinHeap(this.maxHeap[0]);
      //2. rezig the maxHeap
      //2.1 pop the last element to the head
      let lastElement = this.maxHeap.pop();
      this.maxHeap[0] = lastElement;

      //re-order the maxHeap
      this.reOrderMaxHeap();
    }
  },
  reOrderMinHeap() {
    // console.log('reordering minheap');
    //2.2 walk down the head so that the smallest item is at the top
    //    and all items are in minHeap formation
    //2.2.1 first find out which child is smallest
    let childIdx = this.minHeap[2] < this.minHeap[1] ? 2 : 1;
    //2.2.2 now lets walk down the smallerChildIdx
    let minPointer = 0;
    while (childIdx < this.minHeap.length) {
      //if self is larger than child, then swap
      if (this.minHeap[minPointer] > this.minHeap[childIdx]) {
        this.swap(this.minHeap, minPointer, childIdx);
        // let temp = this.minHeap[minPointer];
        // this.minHeap[minPointer] = this.minHeap[childIdx];
        // this.minHeap[childIdx] = temp;
        minPointer = childIdx;
        childIdx =
          this.minHeap[childIdx * 2 + 1] < this.minHeap[childIdx * 2 + 2]
            ? childIdx * 2 + 1
            : childIdx * 2 + 2;
      } else break;
    }
  },
  reOrderMaxHeap() {
    //2.2 walk down the head so that the largest item is at the top
    //    and all items are in maxHeap formation
    //2.2.1 first find out which child is largest
    let childIdx = this.maxHeap[2] > this.maxHeap[1] ? 2 : 1;
    //2.2.2 now lets walk down the largerChildIdx
    let maxPointer = 0;
    while (childIdx < this.maxHeap.length) {
      //if self is smaller than child, then swap
      if (this.maxHeap[maxPointer] < this.maxHeap[childIdx]) {
        this.swap(this.maxHeap, maxPointer, childIdx);
        // let temp = this.maxHeap[maxPointer];
        // this.maxHeap[maxPointer] = this.maxHeap[childIdx];
        // this.maxHeap[childIdx] = temp;
        maxPointer = childIdx;
        childIdx =
          this.maxHeap[childIdx * 2 + 1] > this.maxHeap[childIdx * 2 + 2]
            ? childIdx * 2 + 1
            : childIdx * 2 + 2;
      } else break;
    }
  },
  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  },
};

heap.post(1);
// console.log(heap.maxHeap, heap.minHeap);
console.log(heap.getMedian());

heap.post(2);
// console.log(heap.maxHeap, heap.minHeap);
console.log(heap.getMedian());

heap.post(3);
// console.log(heap.maxHeap, heap.minHeap);
console.log(heap.getMedian());

heap.post(4);
// console.log(heap.maxHeap, heap.minHeap);
console.log(heap.getMedian());

heap.post(5);
console.log(heap.getMedian());

heap.post(100);
heap.post(101);
heap.post(500);
heap.post(400);
heap.post(30);
heap.post(1000);
heap.post(300);
heap.post(301);
heap.post(302);
heap.post(303);
console.log(heap.getMedian());
console.log(heap.maxHeap, heap.minHeap);
