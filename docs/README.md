## CODINGS

a small collection of maybe useful javascript packages

# The Iterasure - Package
iterasures.js
```
<script src="https://github.com/samuelohterion/codings/tree/master/web/js.tool.box/iterasures.js" type="text/javascript">
</script>
```
this often will be used in further packages as e.g. "statistics" or "multi layer perceptron" or "plot2d".
# iterasure as closures for iterators on arrays
### five commands to handle arrays
```
seq ( pUnaryFct_fct, pI_begin, pI_end, pA_dst = [ ] );
fun ( pUnaryFct_fct, pA_src, pA_dst = [ ] );
rel ( pBinaryFct_fct, pA_src1, pA_src2, pA_dst = [ ] );
cum ( pUnaryFct_fct, pA_src, s = 0 );
iof ( pUnaryFct_fct, pA_src, s = 0 );
```
the power of these 5 little foo bars comes with the also small collection of helper functions and the opportunity to write small closures by yourself.
## the only helper function "arr"
```
arr ( pI_size, pUnaryFct_fct = cst ( 0 ), pA_dst = [ ] );
```
this is just a wrapper for
```
seq	 ( pUnaryFct_fct, pI_begin, pI_end, pA_dst = [ ] );
```
## helper closures
### for creating an array of constant values
```
cst ( p_val );
```
### for creating an array of increasing values
this is a way to create an array with values computed by y = i * p_val
where i goes from 0 to pI_size
```
add ( p_val );
```

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
