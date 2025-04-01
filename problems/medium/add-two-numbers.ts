/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let num1: string = "";
  let num2: string = "";

  while (l1) {
    num1 = l1.val + num1;
    l1 = l1.next;
  }

  while (l2) {
    num2 = l2.val + num2;
    l2 = l2.next;
  }

  const total: number[] = (Number(num1) + Number(num2))
    .toString()
    .split("")
    .reverse()
    .map(Number);

  const loopOnNode = (node: ListNode | null) => {
    if (node && total.length > 0) {
      node.val = Number(total[0]);
      node.next = total.length === 1 ? null : new ListNode();
      total.shift();
      loopOnNode(node.next);
    }
    return node;
  };

  const result = loopOnNode(new ListNode());
  return result;
}

/*
  -> Input: l1 = [2,4,3], l2 = [5,6,4]
  -> Output: [7,0,8]
  -> Explanation: 342 + 465 = 807.
  
  -> Input: l1 = [0], l2 = [0]
  -> Output: [0]
  
  -> Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  -> Output: [8,9,9,9,0,0,0,1]
  */
