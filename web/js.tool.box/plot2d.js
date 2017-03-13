Plot2d = function ( cnvs_name ) {

	this.cnvs  = document.getElementById ( cnvs_name );
	this.cnvs.width  = this.cnvs.clientWidth;
	this.cnvs.height = this.cnvs.clientHeight;
	this.cntxt = this.cnvs.getContext ( "2d" );
	this.xmin = +Infinity;
	this.xmax = -Infinity;
	this.ymin = +Infinity;
	this.ymax = -Infinity,
	this.drws = [ ],
	this.clr  = "#000000"
	this.clrs = [ ];

	var
	dis = this;

	this.vcol = function ( col ) {

		this.clr = col;
	}

	this.dmnsns = function ( xmin, ymin, xmax, ymax ) {

		this.xmin = rMin ( this.xmin, xmin );
		this.xmax = rMax ( this.xmax, xmax );
		this.ymin = rMin ( this.ymin, ymin );
		this.ymax = rMax ( this.ymax, ymax );
	}

	this.text = function ( txt, x, y ) {

		this.cntxt.font = "16pt Calibri";
		this.cntxt.fillStyle = "#a0a0a0";
		this.cntxt.fillText( txt, x, y );
	}

	this.linestrip = function ( x, y ) {

		this.cntxt.beginPath ( );

		var
		i = 0;

		this.cntxt.moveTo ( x[ i ], this.cnvs.height - 1 + y[ i ] );

		while ( ++ i < x.length )

			this.cntxt.lineTo ( x[ i ], y[ i ] );

		this.cntxt.stroke ( );
	}

	this.lines = function ( x, y ) {

		this.cntxt.beginPath ( );

		var
		i = 0;

		while ( i < x.length ) {

			this.cntxt.moveTo ( x[ i ], this.cnvs.height - 1 + y[ i ] );

			++ i;

			this.cntxt.lineTo ( x[ i ], y[ i ] );

			++ i;
		}

		this.cntxt.stroke ( );
	}

	this.vlines = function ( x ) {

		this.cntxt.beginPath ( );

		cum (

			function ( x, s ) {

				dis.cntxt.moveTo ( x, 0 );

				dis.cntxt.lineTo ( x, dis.cnvs.height - 1 );
			},
			x
		);

		this.cntxt.stroke ( );
	}

	this.hlines = function ( y ) {

		this.cntxt.beginPath ( );

		cum (

			function ( y, s ) {

				dis.cntxt.moveTo ( 0, dis.cnvs.height - 1 - y );

				dis.cntxt.lineTo ( dis.cnvs.width - 1, dis.cnvs.height - 1 - y );
			},
			y
		);

		this.cntxt.stroke ( );
	}

	this.vcoords = function ( x, dx ) {

		cum (

			function ( x, s ) {

				dis.text ( ( x / dx + dis.xmin ).toExponential( 0 ).toString ( ), x + 1, dis.cnvs.height - 1 );
			},
			x
		);
	}

	this.hcoords = function ( y, dy ) {

		cum (

			function ( y, s ) {

				dis.text ( ( y / dy + dis.ymin ).toExponential( 0 ).toString ( ), 1, dis.cnvs.height - 1 - y - 1 );
			},
			y
		);
	}

	this.grid = function ( ) {

		this.cntxt.strokeStyle = this.clr;

		var
		xint = this.xmax - this.xmin,
		yint = this.ymax - this.ymin,
		log10 = 1. / Math.LN10,
		xlog10 = Math.floor ( log10 * Math.log ( .05 * xint ) ),
		ylog10 = Math.floor ( log10 * Math.log ( .05 * yint ) ),
		dx_ = Math.pow ( 10, xlog10 ),
		dy_ = Math.pow ( 10, ylog10 ),
		dx = ( this.cnvs.width - 1 ) / xint,
		dy = ( this.cnvs.height - 1 ) / yint,
		xbeg_ = Math.ceil ( this.xmin / dx_ ),
		xend_ = Math.ceil ( this.xmax / dx_ ),
		ybeg_ = Math.ceil ( this.ymin / dy_ ),
		yend_ = Math.ceil ( this.ymax / dy_ ),
		x_    = rel( rMul, rel ( rSub, rel ( rMul, seq ( sSet, xbeg_, xend_ ), dx_ ), this.xmin ), dx ),
		y_    = rel( rMul, rel ( rSub, rel ( rMul, seq ( sSet, ybeg_, yend_ ), dy_ ), this.ymin ), dy );

		this.hlines( y_ );
		this.vlines( x_ );

		this.cntxt.strokeStyle = "#d0d0d0"

		dx_ *= 10;
		dy_ *= 10;

		xbeg_ = Math.ceil ( this.xmin / dx_ );
		xend_ = Math.ceil ( this.xmax / dx_ );
		ybeg_ = Math.ceil ( this.ymin / dy_ );
		yend_ = Math.ceil ( this.ymax / dy_ );
		x__   =
		x_    = rel( rMul, rel ( rSub, rel ( rMul, seq ( sSet, xbeg_, xend_ ), dx_ ), this.xmin ), dx );
		y_    = rel( rMul, rel ( rSub, rel ( rMul, seq ( sSet, ybeg_, yend_ ), dy_ ), this.ymin ), dy );

		this.hlines( y_ );
		this.vlines( x_ );

		this.hcoords( y_, dy );
		this.vcoords( x_, dx );
	}

	this.addYX = function ( y = seq ( pol ( [ +1, -1, +1, -1, +1, -1 ] ), -10, 11 ) , x = seq ( pol ( [ 0, 1. ] ), 0, 21 ) ) {

		this.drws.push ( [ y, x ] );
		this.clrs.push ( this.clr );

		this.dmnsns ( cum ( rMin, x, +Infinity ), cum ( rMin, y, +Infinity ), cum ( rMax, x, -Infinity ), cum ( rMax, y, -Infinity ) );
	}

	this.draw = function ( ) {

		var
		dx   = ( this.cnvs.width - 1 ) / ( this.xmax - this.xmin ),
		dy   = ( this.cnvs.height - 1 ) / ( this.ymax - this.ymin ),
		i    = -1;

		while ( ++ i < this.drws.length ) {

			var
			drw = this.drws[ i ],
			y_  = drw[ 0 ],
			x_  = drw[ 1 ],
			j   = 0;

			this.cntxt.strokeStyle = this.clrs[ i ];
			this.cntxt.beginPath ( );
			this.cntxt.moveTo ( dx * ( x_[ j ] - this.xmin ), this.cnvs.height - 1 - dy * ( y_[ j ] - this.ymin ) );

			while ( ++ j < x_.length )

				this.cntxt.lineTo ( dx * ( x_[ j ] - this.xmin ), this.cnvs.height - 1 - dy * ( y_[ j ] - this.ymin ) );

			this.cntxt.stroke ( );
		}
	}
}
