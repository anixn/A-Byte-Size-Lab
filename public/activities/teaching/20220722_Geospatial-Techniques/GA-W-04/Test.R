# Title    :: Compute Histogram from local image
#  Author  :: Ankit Deshmukh
#  DOC     :: 2022-08-30 10:46:37
#  DOLE    :: 2022-08-30
#  Remarks :: 

# https://rdrr.io/bioc/EBImage/man/equalize.html
# install.packages("BiocManager")
# BiocManager::install("EBImage")

library(EBImage)

# Sample - 01
x = readImage(system.file('images', 'cells.tif', package = 'EBImage'))
hist(x)
y = equalize(x)
hist(y)
display(y, title = 'Equalized Grayscale Image')

# Sample - 02
x = readImage(system.file('images', 'sample-color.png', package = 'EBImage'))
hist(x)
y = equalize(x)
hist(y)
display(y, title = 'Equalized Grayscale Image')

par(mfrow = c(1,2))
plot(x)
plot(y)

par(mfrow = c(1,2))
hist(x)
hist(y)

# Sample - 02
x = readImage('./images/image-1.jpg')
hist(x)
y = equalize(x)
hist(y)
display(y, title = 'Equalized Grayscale Image')

par(mfrow = c(1,2))
plot(x)
plot(y)
