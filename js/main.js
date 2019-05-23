$( document ).ready( function () {
  const $button = $( '#button' );
  $button.off( 'click' );
  $button.click( function () {
    const $result = $( '#result' );
    $result.empty();
    $result.append( '<li>Running....</li>' );

    const submitted_email = $( '#email_input' ).val();

    if ( !submitted_email.length ) return;

    let values = submitted_email.split( ',' );

    //THIS MUST ALWAYS BE KEPT SERVER SIDE, NEVER EVER EMIT TO CLIENT
    //GET YOUR KEY AT https://wayscript.com/user/<your_username>
    const prog_id = 0;
    const secret_key = '';

    wayscript.apiKey = secret_key;

    wayscript.runProgram( prog_id, values )
      .onSuccess( function ( responseText ) {
        console.log( responseText );
        $( '#result' ).text( JSON.parse( responseText )[ 'Success' ] );
      } ).onError( function ( responseText ) {
      console.log( responseText );
      $( '#result' ).text( responseText );
    } );
  } );
} );
