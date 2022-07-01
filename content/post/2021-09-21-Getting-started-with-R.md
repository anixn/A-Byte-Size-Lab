---
title: "Getting started with R"
author: "Dr. Ankit Deshmukh"
date: 2021-09-21T11:25:39.307Z 
categories: ["R"]
tags: ["Setup", "plot"]
---



[R](https://www.r-project.org/) is a very versatile statistical tool and programming language. It's my all-time good-to-go data analysis tool. It is fast, reliable and nifty. It provides great flexibility for my daily work and analysis tasks. If one uses R, they could consider [RStudio](https://www.rstudio.com/) as a more sophisticated GUI than the Base R once.


## 1. Installing R
Step 01: Install R-Binaries from R-Project

Step 02: Install RStudio IDE from RStudio

## 2. Customizing RStudio
A lot of ways you can make RStudio more useful for your personal use. Like updating your '.RProfile', adding an awesome theme, and fonts that support ligatures.

### 2.1 Customize R startup with ".Rprofile"
If you are using a Windows machine you can find the location of your '.Rprofile' at 'C:/Users/UserName/Documents'. The code block is shown below. This is what my '.Rprofile' looks like. Several costume functions can be added here and they will load with R startup every time.

```r
cat("\014")
cat("Hi Ankit! What are we doing today?\n")
```

<div class="figure">
<img src="../../post/2021-09-21-Getting-started-with-R/RStudio01.png" alt="RStudio"  />
<p class="caption">Figure 1: RStudio</p>
</div>


### 2.2 Adding a theme
I personally like the dark theme for my R studio. I particularly like to use the ['Gruvbox'](https://github.com/morhetz/gruvbox) theme that is not available in RStudio but can be downloaded from [here](https://www.filehosting.org/file/details/963261/gruvbox.rstheme). Download the file and paste it to `'C:\Users\UserName\AppData\Roaming\RStudio\themes'`. To apply the theme in R studio go to `Tools > Global Option > Appearance` and select editor theme as gruvbox.


<div class="figure">
<img src="../../post/2021-09-21-Getting-started-with-R/RS.png" alt="RSudio windows"  />
<p class="caption">Figure 2: RSudio windows</p>
</div>


### 2.3 Adding fonts that support ligature
This helps to read and understand code faster and efficiently, mostly the merged common occurring 2 characters to one for easy reading but this is just a font rendering feature it means the underlying code remains ASCII-compatible [[Source]](https://github.com/ryanoasis).


<div class="figure">
<img src="../../post/2021-09-21-Getting-started-with-R/FiraFont.png" alt="Font Ligature"  />
<p class="caption">Figure 3: Font Ligature</p>
</div>


Fira Code is a free monospaced font containing ligatures for common programming multi-character combinations.

<div class="figure">
<img src="../../post/2021-09-21-Getting-started-with-R/Font.png" alt="Fira Font"  />
<p class="caption">Figure 4: Fira Font</p>
</div>

Download and FiraCode font from [Here](https://github.com/tonsky/FiraCode/releases/download/5.2/Fira_Code_v5.2.zip), and Install on your machine for all users. To apply the theme in R studio go to `Tools > Global Option > Appearance` and select editor font as **Fira Code**.

## 3. Customize R with code snippets
The snippet is a re-usable piece of code or text. Ordinarily, these are formally defined operative units to incorporate into larger programming modules. To repeat a few operations and formats you can use snippets in R. To edit or add snippets in RStudio go to `Tools > Global Option > Code > Editing`, now enable Snippets and click edit snippets.


<div class="figure">
<img src="../../post/2021-09-21-Getting-started-with-R/Snippets.png" alt="R Snipp"  />
<p class="caption">Figure 5: R Snipp</p>
</div>

From the edit snippets window you can manage snippets of R. Mostly I use R and R markdown snippets in my daily use. Few useful snippets are:


```r
snippet cls
  graphics.off(); rm(list = ls()); cat("\014")

snippet rqr
  if(!require(${1:packageName})){install.packages("${1:packageName}");
  library(${1:packageName})}

snippet fmt
  ## Title :: ${1:Title}
  # Author :: Ankit Deshmukh
  # DOC :: 2018${2:created}
  # DOLE :: 2018${3:lastEdited}
  setwd(${4:work directory})
  ## Main code ------------------------------------------------------

snippet pp
  "`r gsub("\\\\", "/", readClipboard())`"

snippet clear
  rm(list = ls()); graphics.off();cat("\014")
```
To use the snippet use the keywords such as **clear** and press `Shift + Tab` to auto complete the snippet text.


