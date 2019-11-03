/**
 * Google
 * 
 * Given a string with a certain rule: k[string] should be expanded to string k times. 
 * So for example, 3[abc] should be expanded to abcabcabc. Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.
 */

/**
 * 1. Traversal the string s and push into a stack for non-']' character
 * 2. When we meets the ']' character, we should do these steps
       - pop all characters until meets '['
       - pop all numbers to get the repeat count
       - repeat the substring and push it back to stack
   3. Finally, we join all the pieces in the stack
 * @param {string} s 
 * @returns {string} decoded string
 */
const decodeString = s => {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }
        let cur = stack.pop();
        let str = '';
        while (cur !== '[') {
            str = cur + str;
            cur = stack.pop();
        }
        let num = '';
        cur = stack.pop();
        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            cur = stack.pop();
        }
        stack.push(cur);
        stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
}

const str = '3[abc]';
console.log(decodeString(str));  // abcabcabc

const str2 = '2[a2[b]c]';
console.log(decodeString(str2)); // abbcabbc

const str3 = '3[a]2[bc]';
console.log(decodeString(str3)); // aaabcbc

const str4 = '3[a2[c]]';
console.log(decodeString(str4)); // accaccacc

const str5 = '2[abc]3[cd]ef';
console.log(decodeString(str5)); // abcabccdcdcdef