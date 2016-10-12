---
layout: answer-post
title: "作业 Week 7"
subtitle: "assignments of Week 7"
create-date: 2016-10-12
update-date: 2016-10-12
header-img: ""
author: "TA"
tags:
    - 答案
---

> The article was initially posted on **{{ page.create-date | date: "%Y-%m-%d" }}**.

# validating triangles

---

## Description

---

Write a program that reads three edges for a triangle and determines whether the input is valid.
The input is valid if the sum of any two edges is greater than the third edge.

## Input

---

Three numbers a, b, c(seperated by one blank) which represent the edges of a triangle.

## Output

---

If valid, output valid, else output invalid.
 
## Sample Input

---

~~~
1 2 3
~~~

## Sample Output

---

~~~
invalid

~~~

## Code

---

~~~
#include <stdio.h>

int main() {
    int a = 0, b = 0, c = 0;

    scanf("%d%d%d", &a, &b, &c);

    if (a + b <= c || a + c <= b || b + c <= a)
        printf("invalid\n");
    else
        printf("valid\n");

    return 0;
}

~~~

# simple leap year

---

## Description

---

我们知道在格里高利历(公历)中,一般每隔四年就会闰年的出现.设置闰年的规则大致如下:
1. 如果年份能够被4整除而不被100整除,该年是闰年
2. 如果年份能够被400整除,该年是闰年
3. 如果年份不能被4整除,或者能被100整除而不能被400整除, 那么这一年不是闰年

现在请写一段小代码,从输入获取一个年份,判断是否为闰年

## Sample Input 1

---

~~~
1997
~~~

## Sample Output 1

---

~~~
1997 is not a leap year.

~~~

## Sample Input 2

---

~~~
2016
~~~

## Sample Output 2

---

~~~
2016 is a leap year.

~~~

## Hint

---

使用取模操作符``%``来计算能否整除,能够整除,余数为零.  
注意不要混淆逻辑运算符与位运算符

## Code

---

~~~
#include <stdio.h>

int main() {
    int year = 0;

    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        printf("%d is a leap year\n", year);
    else
        printf("%d is not a leap year\n", year);

    return 0;
}

~~~
