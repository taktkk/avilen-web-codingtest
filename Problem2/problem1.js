function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const N = parseInt(nums[1], 10);

  const A = args[1].split(" ").map((n) => parseInt(n, 10));


  is_disolved = "No";
for (let i of A) {

  if (N <= i) {
    is_disolved = "Yes";
  }
}

console.log(is_disolved);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
