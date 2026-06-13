---
title: "LaTeX Tutorial for Manuscript Preparation"
layout: "main"
#url: /default/
date: 2019-10-31
---
![header](LaTeX_Image.png)

An intermediate-level LaTeX tutorial.LaTeX, pronounced as `/ˈlɑːtɛk/`, is a document preparation system for high-quality typesetting. It is most often used for technical or scientific documents, but it can be used for almost any form of publishing.

I have covered topics for the manuscript preparation and review process. The presentation itself was completely made in LaTeX (Beamer). It looks clean and minimal. A TEX file is also available to download. I hope you will find this useful. I welcome your suggestions for improvement in the tutorial.

**#latex | #research | #writing**

<embed src= "Tutorial-01-LaTeX.pdf" width= "100%" height= "600px" type="application/pdf" >

## Few basics of LaTeX are presented below to getting you starte:

1. **Simple Equation:**
   - LaTeX Code:
     ```latex
     E = m c^2
     ```
   - Output: $ E = mc² $

2. **Fraction:**
   - LaTeX Code:
     ```latex
     x = \frac{a + b}{c}
     ```
   - Output: $ x = \frac{a + b}{c} $

3. **Square Root:**
   - LaTeX Code:
     ```latex
     \sqrt{x}
     ```
   - Output: $ \sqrt{x} $

4. **Subscript:**
   - LaTeX Code:
     ```latex
     x_i
     ```
   - Output: $ x_i $

5. **Summation:**
   - LaTeX Code:
     ```latex
     \sum_{i=1}^{n} i
     ```
   - Output: $ \sum_{i=1}^{n} i $

6. **Greek Letters:**
   - Alpha (α), Beta (β), Gamma (Γ)
   - LaTeX Codes:
     ```latex
     \alpha, \beta, \Gamma
     ```
   - Outputs: $ α, β, Γ $

7. **Accents:**
   - Hat (^) and Tilde (~)
   - LaTeX Codes:
     ```latex
     \hat{a}, \tilde{a}
     ```
   - Outputs: $ â, ã $

8. **Matrix:**
   - 2x2 Matrix
   - LaTeX Code:
     ```latex
     \begin{matrix}
     a & b \\
     c & d
     \end{matrix}
     ```
   - Output:
     $$
     \begin{matrix}
     a \& b \newline
     c \& d
     \end{matrix}
     $$

9. **Piecewise Function:**
   - LaTeX Code:
     ```latex
     f(x) = \begin{cases}
             x^2 & \text{if } x > 0 \newline
             0 & \text{otherwise}
             \end{cases}
     ```
   - Output:
     $$
     f(x) = \begin{cases}
             x^2 & \text{if } x > 0 \newline
             0 & \text{otherwise}
             \end{cases}
     $$

10. **Aligning Equations:**
    - LaTeX Code:
      ```latex
      \begin{align*}
      x + y &= z \newline
      a - b &= c
      \end{align*}
      ```
    - Output:
      $$
      \begin{align*}
      x + y &= z \newline
      a - b &= c
      \end{align*}
      $$

These examples cover the basics of typing mathematical expressions in LaTeX. You can search on web for others.
