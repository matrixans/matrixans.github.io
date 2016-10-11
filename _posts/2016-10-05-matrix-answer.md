---
layout: answer-post
title: "作业 Week 3 - Week 5"
subtitle: "assignments from Week 3 to Week 5"
create-date: 2016-10-05
update-date: 2016-10-06
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

~~~
hello, world

~~~

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

~~~
*..  
**.  
***

~~~

## Input

---

No input.

## Output

---

~~~
*..  
**.  
***

~~~

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    printf("*..\n");
    printf("**.\n");
    printf("***\n");
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

~~~
2 1

~~~

## Sample Output

---

~~~
1

~~~

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

Given two pair of integers $$(a1, b1)$$ and $$(a2, b2)$$, can you calculate the expanded form of $$(a_1 x + b_1)(a_2 x + b_2)$$?  
(note that we use ``x^2`` to express ``x*x`` and omit ``*``)

## Input

---

Two line, each line contains a pair of integers $$a_i$$ and $$b_i$$. $$(2 <= a_i , b_i <= 20)$$

## Output

---

One line, the expanded form of $$(a_1 x + b_1)(a_2 x+b_2)$$.

## Sample Input

---

~~~
4 2  
5 7

~~~

## Sample Output

---

~~~
20x^2+38x+14

~~~

## Code

---

~~~ cpp
#include <stdio.h>

int main() {
    int a1 = 0, b1 = 0, a2 = 0, b2 = 0;
    
    scanf("%d%d%d%d", &a1, &b1, &a2, &b2);
    printf("%dx^2+%dx+%d\n", a1 * a2, a1 * b2 + a2 * b1, b1 * b2);
    
    return 0;
}

~~~

# sum the digits in an integer

---

## Description

---

Write a program that reads an integer with 3 digits and adds all the digits in the integer.For example,if an integer is 932,the sum of all its digits is 9+3+2=14.

## Input

---

An integer x.(100<=x<=999)

## Output

---

The sum of all x's digits

## Sample Input

---

~~~
932
~~~

## Sample Output

---

~~~
14

~~~

## Hint

---

Use the % operator(求余) to extract digits, and use the / operator(取整除法) to remove the extracted digit. For instance,932 % 10 = 2 and 932 / 10 = 93.

## Code

---

~~~cpp
#include <stdio.h>

int main() {
    int num = 0, LSD = 0, mid = 0;
    scanf("%d", &num);

    LSD = num % 10;
    num /= 10;
    mid = num % 10;
    num /= 10;

    printf("%d\n", LSD + mid + num);
    return 0;
}

~~~

# parallelogram

---

## Description

---

读入一个字符，并用它输出一个平行四边形。

## input

---

一个字符

## output

---

一个大小为4的平行四边形，平行四边形每一行的开头会有0个或多个空格。

## Sample Input

---


~~~
#
~~~

## Sample Output

---

~~~
   ####
  ####
 ####
####

~~~

## Code1

---

常规作法

~~~cpp
#include <stdio.h>

int main() {
    char ch = 0;
    scanf("%c", &ch);
    printf("   %c%c%c%c\n", ch, ch, ch, ch);
    printf("  %c%c%c%c\n", ch, ch, ch, ch);
    printf(" %c%c%c%c\n", ch, ch, ch, ch);
    printf("%c%c%c%c\n", ch, ch, ch, ch);
    return 0;
}

~~~

## Code2

---

运用printf格式字符串中*的用法，配合循环可以写的简洁一些

~~~
#include <stdio.h>

int main() {
    char ch = 0;
    scanf("%c", &ch);
    for (int i = 0; i < 4; ++i)
        printf("%*c%c%c%c\n", 4-i, ch, ch, ch, ch);
}

~~~

# 实验题2.1

---

## Description

---

编程计算下面数学表达式的值，其中a,b,c,x,y作为变量。
（即表达式如包括a, b, c, x 或 y, 从键盘输入相应的数值，程序输出表达式计算结果。）  
说明： 形如  m ^ n 表示 m的n 次幂。  
（1） 1200 / ( 24 - 4 \* 5 ) ;  
（2）c \* ( a^2 + b^2 )^( 1/2 ) ;  
（3）lnln( 10^3.5 + 2 ) ;  
（4）y + a % 5 * (int)(x + y) / 2 % 4 。  

## Input

---

输入只有一行，该行有5个数，它们之间都用一个空格隔开，
该行的前三个数是整数，分别对应 整型变量a、b、 c，后两个数是浮点数，分别对应 x和 y。

## Output

---

输出分4行，每行都是一个浮点数。所有的浮点数都要求保留三位小数。
4行数据分别对应：
表达式1的结果
表达式2的结果
表达式3的结果
表达式4的结果

## Sample Input

---

~~~
3 4 5 1 2
~~~

## Sample Output

---

~~~
300.000
25.000
2.087
2.000

~~~

## Hint

---

**注意输入输出的格式！**

## Code

---

这题比较坑的地方是乘幂和对数部分的运算，直接复制题目里的表达式会出错。

~~~cpp
#include <stdio.h>
#include <math.h>

int main() {
    double a = 0, b = 0, c = 0, x = 0, y = 0;

    scanf("%lf%lf%lf%lf%lf", &a, &b, &c, &x, &y);

    printf("%.3f\n", 1.0 * 1200 / (24 - 4 * 5));
    printf("%.3f\n", c * pow(a * a + b * b, .5));
    printf("%.3f\n", log(log(pow(10, 3.5) + 2)));
    printf("%.3f\n", y + (int)a % 5 * (int)(x + y) / 2 % 4);
}

~~~

# 实验题2.2

---

## Description

---

编写一个程序，使用输入函数scanf, 从键盘按顺序输入下列数据，再用printf将输入数据原样打印在屏幕上（数据间用空格隔开）。注意数据的类型和scnaf/printf 函数的格式指定方法。
输入：a 100 450.34 2147483648 4294967296 126.3455568
输出：a 100 450.34 2147483648 4294967296 126.3455568

## Input

---

输入数据只有一行，共有6个变量。

## Output

---

输出数据独占一行（即最后要加换行符号），输出的内容要与输入的内容完全一致。

## Sample Input

---

~~~
a 100 450.34 2147483648 4294967296 126.3455568
~~~

## Sample Output

---

~~~
a 100 450.34 2147483648 4294967296 126.3455568

~~~

## Hint

---

 **注意， C语言各种基本数据类型的有效取值范围！**

## Code 1

---

从知识点的角度来做这题，就是判断每个数据能被哪个数据类型容纳

~~~cpp
#include <stdio.h>

int main() {
    char a = 0;
    int b = 0;
    double c = 0, f = 0;
    long long d = 0, e = 0;
    scanf("%c%d%lf%lld%lld%lf", &a, &b, &c, &d, &e, &f);
    printf("%c %d %.2f %lld %lld %.7lf\n", a, b, c, d, e, f);
}

~~~

## Code 2

---

从解决问题的角度来看，题目要求原样输出，于是可以将输入作为字符串输入，然后直接输出，省了很多事。

~~~cpp
#include <stdio.h>

int main() {
    const int BUF_SIZE = 1000;
    char s[BUF_SIZE+1];
    fgets(s, BUF_SIZE, stdin);
    fputs(s, stdout);
    return 0;
}

~~~

# The root of the equation

---

## Description

---

从键盘读入三个数a, b, c，输出方程![](http://latex.codecogs.com/svg.latex?ax^2+bx+c=0)的两个实根。

## Input

---

三个数a,b,c， 保证方程为一元二次方程，且一定有两个实根。

## Outpt

---

方程![](http://latex.codecogs.com/svg.latex?ax^2+bx+c=0)的两个实根，小根在前，大根在后， 结果保留到小数点后三位。

## Sample Input

---

~~~
1 -4 3
~~~

## Sample Output

---

~~~
1.000 3.000

~~~

## Hint

---

求平方根可用&lt;math.h&gt;中的sqrt函数

## Code

---

~~~cpp
#include <stdio.h>
#include <math.h>

int main() {
    int a = 0, b = 0, c = 0;
    scanf("%d%d%d", &a, &b, &c);
    double delta = sqrt(b * b - 4 * a *c);
    printf("%.3f ", (-b - delta) / (2 * a));
    printf("%.3f\n", (-b + delta) / (2 * a));
    return 0;
}

~~~
