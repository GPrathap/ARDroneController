
  $(function() {
    $( "#up" ).button({text:"Up",icons: {primary: " ui-icon-arrowthick-1-n"}}).css('color','red');
    $( "#down" ).button({text:"Down",icons: {primary: "ui-icon-arrowthick-1-s"}});
    /*
    $( "#play" ).button({text: false,icons: {primary: " ui-icon-carat-1-n"}}).click(function() {var options;
      if ( $( this ).text() === "play" ) {
        options = {label: "pause",icons: {primary: "ui-icon-pause"}};
      } else {
        options = {label: "play",icons: {primary: "ui-icon-play"}};
      }
      $( this ).button( "option", options );
    });
    
    $( "#stop" ).button({text: false,icons: {primary: "ui-icon-carat-1-s"}}).click(function() {
      $( "#play" ).button( "option", {
        label: "play",
        icons: {
          primary: "ui-icon-play"
        }
      });
    });
    */
   $( "#left" ).button({text:"Left",icons: {primary: "ui-icon-arrowthickstop-1-w"}});
    $( "#right" ).button({text:"Right",icons: {primary: "ui-icon-arrowthickstop-1-e"}});
   
    $( "#front" ).button({text:"Front",icons: {primary: "ui-icon-arrowthick-1-w"}});
    $( "#back" ).button({text:"Back",icons: {primary: " ui-icon-arrowthick-1-e"}});
   
     $( "#takeoff" ).button({text:"Takeoff",icons: {primary: "ui-icon-power"}}).css('color','green');;
    $( "#land" ).button({text:"Land",icons: {primary: "ui-icon-stop"}}).css('color','blue');;
     $( "#recover" ).button({text:"Recover",icons: {primary: "ui-icon-alert"}});
    $( "#clockwise" ).button({text:"Clockwise",icons: {primary: " ui-icon-arrowrefresh-1-w"}});
     $( "#counter-clockwise" ).button({text:"Counter-clockwise",icons: {primary: "ui-icon-arrowrefresh-1-e"}});
    
  });
