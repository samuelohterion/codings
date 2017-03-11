## CODINGS

Here i present to you a small collection of my javascript packages

# The Iterasure - Project

This will be used often in further packages as in "statistics" or "multi layer perceptron" or "plot2d".

### iterasure as closures for iterators on arrays
## five commands to handle arrays
```
seq ( pFct_fct, pI_begin, pI_end, pA_dst = [ ] );
fun ( pFct_fct, pA_src, pA_dst = [ ] );
rel ( pFct_fct, pA_src1, pA_src2, pA_dst = [ ] );
cum ( pFct_fct, pA_src, s = 0 );
iof ( pFct_fct, pA_src, s = 0 );
```
## helper closures
```
arr ( pI_size, pFct_fct = cst ( 0 ), pA_dst = [ ] );
cst ( p_val );
add ( p_val );
intg ( dx = 1, c = 0 );
pol ( pA_coeff );
sSet ( a );
sSqt ( a );
sSqr ( a );
sExp ( a );
sLog ( a );
rMin ( a, b );
rMax ( a, b );
rAdd ( a, b );
rSub ( a, b );
rMul ( a, b );
rDiv ( a, b );
rPow ( a, b );
```
## how to use these
You can use these little functions this way:
```
var
a = arr( 5 ), // a = [ 0, 0, 0, 0, 0 ]
b = arr( 5, cst( 1 ) ); // b = [ 1, 1, 1, 1, 1 ]

```
