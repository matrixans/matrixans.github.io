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

## Description
---
~~~ cpp
#include <stdio.h>

int main() {
    printf("hello, world\n");
    return 0;
}
~~~

# Triangle I

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

~~~ cpp
#include <stdio.h>

int main() {
    int num1 = 0, num2 = 0;
    
    scanf("%d%d", &num1, &num2);
    printf("%d\n", num1 - num2);
    
    return 0;
}
 1
~~~

# Polynomial I

~~~ cpp
#include <stdio.h>

int main() {
    int a1, b1, a2, b2;
    
    scanf("%d%d%d%d", &a1, &b1, &a2, &b2);
    printf("%dx^2+%dx+%d\n", a1 * a2, a1 * b2 + a2 * b1, b1 * b2);
    
    return 0;
}
~~~
