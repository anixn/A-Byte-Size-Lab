---
title: "Hello R Markdown!"
author: "Dr Ankit Deshmukh"
date: 2021-12-01T21:13:14-05:00
categories: ["R"]
tags: ["R Markdown", "plot", "regression"]

bibliography: [../../static/bib/references.bib]
link-citations: true
output: 
  html_document:
    keep_md: true
---

## R Markdown

This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF, and MS Word documents. For more details on using R Markdown see <http://rmarkdown.rstudio.com>.

A few useful syntax are shown below in the post:

### 1. You can embed an R code chunk like this:

``` r
summary(cars)
##      speed           dist       
##  Min.   : 4.0   Min.   :  2.00  
##  1st Qu.:12.0   1st Qu.: 26.00  
##  Median :15.0   Median : 36.00  
##  Mean   :15.4   Mean   : 42.98  
##  3rd Qu.:19.0   3rd Qu.: 56.00  
##  Max.   :25.0   Max.   :120.00
fit <- lm(dist ~ speed, data = cars)
fit
## 
## Call:
## lm(formula = dist ~ speed, data = cars)
## 
## Coefficients:
## (Intercept)        speed  
##     -17.579        3.932
```

### 2. Including Plots

You can also embed plots. See Figure <a href="#fig:pie">1</a> for example:

``` r
par(mar = c(0, 1, 0, 1))
pie(
  c(280, 60, 20),
  c('Sky', 'Sunny side of pyramid', 'Shady side of pyramid'),
  col = c('#0292D8', '#F7EA39', '#C4B632'),
  init.angle = -50, border = NA
)
```

<div class="figure">

<img src="/post/2021-12-01-r-rmarkdown_files/figure-html/pie-1.png" alt="A fancy pie chart." width="672" />
<p class="caption">
Figure 1: A fancy pie chart.
</p>

</div>

-   Referencing a image/figure.

<!-- -->

    # Define the tag after lagnuage notation such as `pie`
    {r pie, fig.cap='A fancy pie chart.', tidy=FALSE}

    Use \@ref(fig:pie) to refrence an image. 

### 3. Inline R Code

``` r
There were `r nrow(cars)` cars studied
```

> There were 50 cars studied.

### 4. Use links in Rmarkdown

Use a plain http address or add a link to a phrase:

-   http://example.com
-   [linked phrase](http://example.com)

you can also use use a snippet predefined for Rmd file `link` (Shfit + Tab) to create a link.

### 5. Use local images or image URLs.

    ![Caption](http://example.com/logo.png)

    ![optional caption text](figures/img.png)

### 6. Tables in R markdown

1.  Insert table use `knitr::kable()` function. Applicable for any 2D rectangular data(Data Frame, Matrix, etc.).

``` r
knitr::kable(head(iris[, 1:3]), "pipe")
```

| Sepal.Length | Sepal.Width | Petal.Length |
|-------------:|------------:|-------------:|
|          5.1 |         3.5 |          1.4 |
|          4.9 |         3.0 |          1.4 |
|          4.7 |         3.2 |          1.3 |
|          4.6 |         3.1 |          1.5 |
|          5.0 |         3.6 |          1.4 |
|          5.4 |         3.9 |          1.7 |

2.  Or create table with traditional markdown way.

|                   |  mpg | cyl | disp |  hp |
|:------------------|-----:|----:|-----:|----:|
| Mazda RX4         | 21.0 |   6 |  160 | 110 |
| Mazda RX4 Wag     | 21.0 |   6 |  160 | 110 |
| Datsun 710        | 22.8 |   4 |  108 |  93 |
| Hornet 4 Drive    | 21.4 |   6 |  258 | 110 |
| Hornet Sportabout | 18.7 |   8 |  360 | 175 |
| Valiant           | 18.1 |   6 |  225 | 105 |

### 7. LaTeX Equations

-   Inline equation:

<!-- -->

    $equation$

`\(\int\limits_{-\infty}^{\infty} e^{-x^{2}} \, dx = \sqrt{\pi}\)`

-   Display equation:

<!-- -->

    $$equation$$

`$$\int\limits_{-\infty}^{\infty} e^{-x^{2}} \, dx = \sqrt{\pi}$$`

### 8. Sub/Super scripts and others

    superscript^2^   
    subscript~2~   
    ~~strikethrough~~
    <mark>This is a highlighted text</mark>

superscript<sup>2</sup>  
subscript<sub>2</sub>  
~~strikethrough~~  
<mark>This is a highlighted text</mark>

### 9. Use Bibliography

    Citation in sentence @R-base or after the sentence [@casella2002statistical] 
    and one more [-@king1974nonoperative]

> Citation in sentence R Core Team ([2019](#ref-R-base)) or after the sentence ([Casella and Berger 2002](#ref-casella2002statistical)) and one more ([1974](#ref-king1974nonoperative))

This will automatically add the bibliography at the end of the documents. For more information [see this](https://www.liechi.org/en/2020/02/a-demo-for-citation-in-blogdown/)

### 10. Links and footnotes

    A sample phrase^[This is a footnote; bottom of the page]

> A sample phrase[^1]

## Reference

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-casella2002statistical" class="csl-entry">

Casella, George, and Roger L Berger. 2002. *Statistical Inference*. Vol. 2. Duxbury Pacific Grove, CA.

</div>

<div id="ref-king1974nonoperative" class="csl-entry">

King, Terry D, and Noel L Milk. 1974. “Nonoperative Closure of Atrial Septal Defects.” *Surgery* 75 (3): 383–88.

</div>

<div id="ref-R-base" class="csl-entry">

R Core Team. 2019. *R: A Language and Environment for Statistical Computing*. Vienna, Austria: R Foundation for Statistical Computing. <https://www.R-project.org>.

</div>

</div>

[^1]: This is a footnote text; bottom of the page
