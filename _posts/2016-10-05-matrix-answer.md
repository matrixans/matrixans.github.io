---
layout: answer-post
title: "作业 week3-week5"
subtitle: "matrix answer"
create-date: 2016-10-05
update-date: 2016-10-05
header-img: ""
author: "TA"
tags:
    - 答案
---

> The article was initially posted on **{{ page.create-date | date: "%Y-%m-%d" }}**.


# hello, world

---

## Descrption

---

输出 hello, world


别忘了换行哦 ^_^

## Input

---

无

## Output

---

> hello, world

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    printf("hello, world\n");
    return 0;
}
~~~

# Triangle I

---

## Description

---

Your task is to write a program to output the following image:

<p>
*..<br />
**.<br />
***
</p>

## Input

---

No input.

## Output

---

As mentioned above.

## Sample Output

---


> *..
> **.
> ***

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    printf("*..\n");
    printf("**.\n");
    printf("***.\n");
    return 0;
}
~~~

# A-B

---

## Description

---

输入两个整数A和B，输出这两个整数的差A-B。

## Input

---

输入只有一行，该行只有两个整数，分别对应A和B，它们之间用一个空格分开。其中，A、B的取值范围为：  -1000 <= A <=1000 ,  -1000 <= B <= 1000。

## Output

---

输出独占一行，该行只有一个整数，它正好是A-B的值（注意，其后面需要加一个换行符）。

## Sample Input

---

> 2 1

## Sample Output

---

> 1

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    int num1 = 0, num2 = 0;
    
    scanf("%d%d", &num1, &num2);
    printf("%d\n", num1 - num2);
    
    return 0;
}
~~~

# Polynomial I

---

## Description

---

Given two pair of integers (a1,b1) and (a2,b2),can you calculate the expanded form of (a1\*x+b1)\*(a2\*x+b2)?  
(note that we use "x^2" to express x\*x and omit "*")

## Input

---

Two line, each line contains a pair of integers ai and bi.(2<=ai,bi<=20)

## Output

---

One line,the expanded form of (a1\*x+b1)\*(a2\*x+b2).

## Sample Input

---

Copy sample input to clipboard

> 4 2
> 5 7

## Sample Output

---

> 20x^2+38x+14

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    int a1, b1, a2, b2;
    
    scanf("%d%d%d%d", &a1, &b1, &a2, &b2);
    printf("%dx^2+%dx+%d\n", a1 * a2, a1 * b2 + a2 * b1, b1 * b2);
    
    return 0;
}
~~~
