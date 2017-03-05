## Welcome to my Project-Page

Here i present to you a small collection of my javascript codings

# The Iterasure - Project

This will be used often in further projects as in "statistics" or "multi layer perceptron".

### Iterasure a closures for iterators


`function arr ( pI_size, pFct_fct = cst ( 0 ), pA_dst = [ ] ) {

	for ( var i = 0; i < pI_size; ++ i )

		pA_dst[ i ] = pFct_fct ( i );

	return pA_dst;
}

function seq ( pI_begin, pI_end, pFct_fct = add ( 0 ), pA_dst = [ ] ) {

	for ( var i = pI_begin; i < pI_end; ++ i )

		pA_dst[ i - pI_begin ] = pFct_fct ( i );

	return pA_dst;
}

function fun ( pFct_fct, pA_src, pA_dst = [ ] ) {

	for ( var i = 0; i < pA_src.length; ++ i )

		pA_dst[ i ] = pFct_fct ( pA_src[ i ] );

	return pA_dst;
}

function rel ( pFct_fct, pA_src1, pA_src2, pA_dst = [ ] ) {

	if ( pA_src1 instanceof Array && pA_src2 instanceof Array ) {

		for ( var i = 0; i < pA_src1.length; ++ i )

			pA_dst[ i ] = pFct_fct( pA_src1[ i ], pA_src2[ i ] );

		return pA_dst;
	}

	if ( pA_src1 instanceof Array ) {

		for ( var i = 0; i < pA_src1.length; ++ i )

			pA_dst[ i ] = pFct_fct( pA_src1[ i ], pA_src2 );

		return pA_dst;
	}

	for ( var i = 0; i < pA_src1.length; ++ i )

		pA_dst[ i ] = pFct_fct( pA_src1, pA_src2[ i ] );

	return pA_dst;
}

function cum ( pFct_fct, pA_src, s = 0 ) {

	var
	i = -1;

	while ( ++ i < pA_src.length )

		s = pFct_fct( s, pA_src[ i ] );

	return s;
}
`

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/samuelohterion/codings/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.




