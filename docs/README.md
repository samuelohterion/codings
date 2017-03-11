## CODINGS

a small collection of maybe useful javascript packages

# The Iterasure - Package
iterasures.js
```
<script src="https://github.com/samuelohterion/codings/tree/master/web/js.tool.box/iterasures.js" type="text/javascript">
</script>
```
[ github ]("https://github.com/samuelohterion/codings/tree/master/web/js.tool.box/iterasures.js")
this often will be used in further packages as e.g. "statistics" or "multi layer perceptron" or "plot2d".
# iterasure as closures for iterators on arrays
### five commands to handle arrays
```
seq ( pUFct_fct, pI_begin, pI_end, pA_dst = [ ] );
fun ( pUFct_fct, pA_src, pA_dst = [ ] );
rel ( pBFct_fct, pA_src1, pA_src2, pA_dst = [ ] );
cum ( pBFct_fct, pA_src, s = 0 );
iof ( pBFct_fct, pA_src, s = 0 );
```
the power of these 5 little foo bars comes with the also small collection of helper functions and the opportunity to write small closures by yourself.
## the only helper function "arr"
```
arr ( pI_size, pUFct_fct = cst ( 0 ), pA_dst = [ ] );
```
this is just a wrapper for
```
seq ( pUFct_fct = cst ( 0 ), pI_begin = 0, pI_end = pI_size, pA_dst = [ ] );
```
use it like


## helper closures
### for creating an array of constant values
- this is a way to create an array with values computed by
- y = p_val
```
cst ( p_val );
```
### for creating an array of in- or decreasing values
- this is a way to create an array with values computed by
- y = i * p_val
```
add ( p_val );
```
- where i goes from 0 to pI_size
- of coures if with p_val < 0 the sequence will decrease
- actually cst ( p_n ) and add ( p_m ) is a short hand for the much more powerful "pol"-ynomial closure.
- cst ( p_n ) abbreviates pol ( [ p_n ] )
- add ( p_m ) abbreviates pol ( [ 0, p_m ] )

### for creating an array of values computed by a polynomial
```
pol ( pA_coeff );
```
- as seen before u can create a linear sequence compute a polynomial on it to create an array
- here pA_coeff is an array of the first n coefficients of the polynomial that should be applied

### for integrating all values of an array by a certain delta X and an offset of c
```
intg ( dx = 1, c = 0 );


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
## how to
### create an array
1. by seq
```
var
zeros = seq ( cst ( 0 ), 5 ),
// zeros    = [ 0, 0, 0, 0, 0 ]

ones = seq ( cst ( 1 ), 5 );
// ones     = [ 1, 1, 1, 1, 1 ]

yEqualsXPlusTen = arr( add( 10 ), 5 );
// yEqualsXPlusTen = [ 10, 11, 12, 13, 14 ]

```
2. by arr

```
var
// zeros = [ 0, 0, 0, 0, 0 ]
zeros    = arr ( 5 ),
// ones = [ 1, 1, 1, 1, 1 ]
ones     = arr( 5, cst( 1 ) );
// yEqualsX = [ 10, 11, 12, 13, 14 ]
yEqualsX = arr( 5, add( 10 ) );

```
###
