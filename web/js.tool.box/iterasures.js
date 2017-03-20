function seq ( pUFct_fct, pI_begin, pI_end, pA_dst = [ ] ) {

	for ( var i = pI_begin; i < pI_end; ++ i )

		pA_dst[ i - pI_begin ] = pUFct_fct instanceof Function ? pUFct_fct ( i ) : pFct_fct;

	return pA_dst;
}

function fun ( pUFct_fct, pA_src, pA_dst = [ ] ) {

	for ( var i = 0; i < pA_src.length; ++ i )

		pA_dst[ i ] = pUFct_fct ( pA_src[ i ] );

	return pA_dst;
}

function rel ( pBFct_fct, pA_src1, pA_src2, pA_dst = [ ] ) {

	if ( pA_src1 instanceof Array && pA_src2 instanceof Array ) {

		for ( var i = 0; i < pA_src1.length; ++ i )

			pA_dst[ i ] = pBFct_fct( pA_src1[ i ], pA_src2[ i ] );

		return pA_dst;
	}

	if ( pA_src1 instanceof Array ) {

		for ( var i = 0; i < pA_src1.length; ++ i )

			pA_dst[ i ] = pBFct_fct( pA_src1[ i ], pA_src2 );

		return pA_dst;
	}

	for ( var i = 0; i < pA_src2.length; ++ i )

		pA_dst[ i ] = pBFct_fct( pA_src1, pA_src2[ i ] );

	return pA_dst;
}

function cum ( pBFct_fct, pA_src, s = 0 ) {

	var
	i = -1;

	while ( ++ i < pA_src.length )

		s = pBFct_fct( pA_src[ i ], s );

	return s;
}

function iof ( pBFct_fct, pA_src, s = 0 ) {

	var
	i = -1;

	while ( ++ i < pA_src.length )

		s = pBFct_fct( pA_src[ s ], pA_src[ i ] ) == pA_src[ i ] ? i : s;

	return s;
}


// some useful functions


function arr ( pI_size, pUFct_fct = cst ( 0 ), pA_dst = [ ] ) {

	return seq ( pUFct_fct, 0, pI_size, pA_dst );
}

function cst ( p_val ) {

	var
	val = p_val;

	return function ( i ) {

		return val;
	};
}

function add ( p_val ) {

	var
	val = p_val;

	return function ( i ) {

		return i + val;
	};
}

function intg ( dx = 1, c = 0 ) {

	var
	s = c;

	return function ( i ) { return s += dx * i; };
}

function pol ( pA_coeff ) {

	var
	coeff = pA_coeff.slice ( );

	return function ( x ) {

		var
		r = 0,
		e = -1,
		p = 1;

		while ( ++ e < coeff.length ) {

			r += coeff[ e ] * p;
			p *= x;
		}

		return r;
	};
}

function sSet ( a ) { return a; }

function sNeg ( a ) { return -a; }

function sSqt ( a ) { return Math.sqrt ( a ); }

function sSqr ( a ) { return a * a; }

function sExp ( a ) { return Math.exp ( a ); }

function sLog ( a ) { return Math.log ( a ); }

function sSin ( a ) { return Math.sin ( a ); }

function sCos ( a ) { return Math.cos ( a ); }

function sTan ( a ) { return Math.tan ( a ); }

function rMin ( a, b ) { return a < b ? a : b; }

function rMax ( a, b ) { return a < b ? b : a; }

function rAdd ( a, b ) { return a + b; }

function rSub ( a, b ) { return a - b; }

function rMul ( a, b ) { return a * b; }

function rDiv ( a, b ) { return a / b; }

function rPow ( a, b ) { return Math.pow ( a, b ); }

function round ( a, b = 2 ) { return Math.pow( 10, -b ) * Math.round ( a * Math.pow ( 10, b ) ); }
