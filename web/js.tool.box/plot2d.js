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

		this.cntxt.fillText( txt, x, y );
	}

	this.grid = function ( ) {

		var
		xint = this.xmax - this.xmin,
		yint = this.ymax - this.ymin,
		xlog10 = parseInt ( Math.log ( xint ) / Math.log ( 10 ) - 1 ),
		ylog10 = parseInt ( Math.log ( yint ) / Math.log ( 10 ) - 1 ),
		dx = ( this.cnvs.width - 1 ) / xint,
		dy = ( this.cnvs.height - 1 ) / yint;

		this.cntxt.strokeStyle = this.clr;
		var

		x = this.xmin,
		dx_ = Math.pow ( 10, xlog10 );

		while ( x < 0 ) {

			this.cntxt.beginPath ( );
			this.cntxt.moveTo ( -dx * x, 0 );
			this.cntxt.lineTo ( -dx * x, this.cnvs.height - 1 );
			this.cntxt.stroke ( );
			this.cntxt.fillText ( ( -x + this.xmin ).toExponential( 1 ).toString ( ), -dx * x + 1, this.cnvs.height - 1 );
			x += dx_;
		}

		x = this.xmin;

		while ( -x < ( this.xmax - this.xmin ) ) {

			this.cntxt.beginPath ( );
			this.cntxt.moveTo ( -dx * x, 0 );
			this.cntxt.lineTo ( -dx * x, this.cnvs.height - 1 );
			this.cntxt.stroke ( );
			this.cntxt.fillText ( ( -x + this.xmin ).toExponential( 1 ).toString ( ), -dx * x + 1, this.cnvs.height - 1 );
			x -= dx_;
		}

		var
		y = this.ymin,
		dy_ = Math.pow ( 10, ylog10 );

		while ( y < 0 ) {

			this.cntxt.beginPath ( );
			this.cntxt.moveTo ( 0, this.cnvs.height - 1 + dy * y );
			this.cntxt.lineTo ( this.cnvs.width, this.cnvs.height - 1 + dy * y );
			this.cntxt.stroke ( );
			this.text ( ( -y + this.ymin ).toExponential( 1 ).toString ( ), 1, this.cnvs.height - 1 + dy * y - 1 );
			y += dy_;
		}

		y = this.ymin;

		while ( -y < ( this.ymax - this.ymin ) ) {

			this.cntxt.beginPath ( );
			this.cntxt.moveTo ( 0, this.cnvs.height - 1 + dy * y );
			this.cntxt.lineTo ( this.cnvs.width, this.cnvs.height - 1 + dy * y );
			this.cntxt.stroke ( );
			this.cntxt.fillText ( ( -y + this.ymin ).toExponential( 1 ).toString ( ), 1, this.cnvs.height - 1 + dy * y - 1 );
			y -= dy_;
		}

	}

	this.addYX = function ( y = seq ( -10, 11, pol ( [ +1, -1, +1, -1, +1, -1 ] ) ) , x = seq ( 0, 21, pol ( [ 0, 1. ] ) ) ) {

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
