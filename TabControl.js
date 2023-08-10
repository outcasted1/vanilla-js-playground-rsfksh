//Selected Elements by Default;
$('.customTab .tabheaditems li');
$('.customTab .tabheaditems .tabHeaders');
$('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor');
$('.customTab .tabheaditems .tabHeaders:eq(1)').attr('tabindex');
$('.customTab .tabpanelitems');
$('.customTab .tabpanelitems .ui-tabs-panel:eq()');
$('.customTab .tabpanelitems  div table:eq() .clcontrol');
$('.customTab .tabpanelitems .ui-tabs-panel:eq() div table:eq(0) .clcontrol'); // for handling controls inside tabs
$('.customTab .tabpanelitems .clcontrol');
var elementTabIndex = $('.customTab .tabpanelitems .ui-tabs-panel:eq(0) div table:eq(0) .clcontrol').eq(2).attr('tabindex'); //for getting the control's index
console.log('Tabindex of the element:', elementTabIndex);

//To add class for an element;
$(function () {
  $('.customTab .tabheaditems li').addClass('tabHeaders');
});
//To add Tab index dynamically;
//For Tab Headers
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabheaditems .tabHeaders').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
//For Tab header buttons;
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabheaditems .tabHeaders .ui-tabs-anchor').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
//For Controls
$(function () {
  debugger;
  var tabindex = 1;
  $('.customTab .tabpanelitems .clcontrol').each(function () {
    var $input = $(this);
    $input.attr('tabindex', tabindex);
    tabindex++;
  });
});
// For moving through tabs
$(document).ready(function () {
  let tabIndex = 0;
  $(document).on('keyup', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).click();
    }
  });
});

//For assigning indices to each controls in each panel
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')').each(function () {
      console.log('Selected panelindex:', panelindex);     
      var tabindex = 1;
       $('.customTab .tabpanelitems .ui-tabs-panel:eq('+panelindex+') div table:eq(0) .clcontrol').each(function () {          
          var $input = $(this);
          $input.attr('tabindex', tabindex);
          tabindex++;
        });
    });
  }
});
/***************************************************/
// simplified
$(function () {
  $('.customTab .tabpanelitems .ui-tabs-panel').each(function (panelindex) {
   // console.log('Selected panelindex:', panelindex);

    var tabindex = 1;
    $(this).find('div table:eq(0) .clcontrol').each(function () {
      $(this).attr('tabindex', tabindex);
      tabindex++;
    });
  });
});
/********************************************************/
//For getting the max vaules of index from each panels
$(function () {
  var numPanels = $('.customTab .tabpanelitems .ui-tabs-panel').length;
  for (var panelindex = 0; panelindex < numPanels; panelindex++) {
    var maxTabIndex = 0;
    $('.customTab .tabpanelitems .ui-tabs-panel:eq(' + panelindex + ')').each(function () { 
    //console.log('Selected panelindex:', panelindex);
      var tabindex = 1;
      $('.customTab .tabpanelitems .ui-tabs-panel:eq('+panelindex+') div table:eq(0) .clcontrol').each(function () {
        var $input = $(this);
        $input.attr('tabindex', tabindex);
        maxTabIndex = Math.max(maxTabIndex, tabindex);
        maxTabIndex;
        tabindex++;
      });
    });
    //console.log('Max tabindex for panelindex', panelindex, ':', maxTabIndex);
  }
});
/****************************************************************************************/

