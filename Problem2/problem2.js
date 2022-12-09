function main(input) {
  const args = input.split("\n");
  const T = parseInt(args[0], 10);
  const nums = args.slice(1, T + 1).map((arr) => arr.split(" "));

  const calc = (a, b, c) => {
    let count_A = 0;
    let count_B = 0;
    let count_C = 0;
    let ans_list = [];

    let flg = false;
    let flg_escapeA = false;
    let flg_escapeB = false;
    let flg_escapeC = false;
    //Cが一番大きいとき
    if (c > a && c > b) {
      // "Cが一番大きいとき";
      if (a != 1) {
        //aが1以外のとき
        flg_escapeC = true;
      } else {
        //aが1のとき
        if (b > a) {
          count_C = c - b;
          c = b;
        } else if ($a == $b) {
          return 1;
        } else {
          $count_C = $c - $a;
          $c = $a;
        }
      }
    } else if (a > c && a > b) {
      //  "Aが一番大きいとき";
      flg_escapeA = true;
      if (b > c) {
        flg_escapeC = true;
      } else if (c == b) {
        return 1;
      }
    } else if (b > c && b > a) {
      // "Bが一番大きいとき"
      if (a == c) {
        return 1;
      }
      flg_escapeB = true;
    } else if (a == c && a > b) {
      // AとCが同じでBより大きいとき
      if (a - 1 == b) {
        return 2;
      }
      return 1;
    } else if (a == b && a == c) {
      // ABCが同じ数のとき
      return 3;
    }

    let count_a = count_A;
    let count_b = count_B;
    let count_c = count_C;
    //3重ループを作る
    //Aに対する操作
    for (x = a; x >= 1; x--, count_a++) {
      //Bに対する操作
      for (y = b; y >= 1; y--, count_b++) {
        //Cに対する操作
        for (z = c; z >= 1; z--, count_c++) {
          // echo $count_a, $count_b, $count_c, "\T";
          //正解の条件
          if (!(x < y && y < z) && !(z < y && y < x) && x != y && y != z && z != x) {
            entire_count = count_a + count_b + count_c;

            if (entire_count == 0) {
              return 0;
            }
            ans_list.push(entire_count);
            flg = true;
            break;
          }
          if (flg_escapeC) {
            break;
          }
        }
        count_c = count_C;
        if (flg || flg_escapeB) {
          break;
        }
      }
      count_b = count_B;
      if (flg || flg_escapeA) break;
    }
    //最小の操作回数をreturn。また、条件を満たせなければ-1をreturn
    if (ans_list.length === 0) {
      return -1;
    } else {
      ans_list.sort();
      ans = ans_list[0];
      return ans;
    }
  };

  for (let i = 0; i <= T; i++) {
    let [A, B, C] = nums[i].map((str) => parseInt(str, 10));
    const ans = calc(A, B, C);
    console.log(ans);
  }

  
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
