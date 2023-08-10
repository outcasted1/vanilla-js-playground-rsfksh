$(document).ready(function () {
  let tabIndex = 0;
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).focus();
  $('.customTab .tabheaditems .tabHeaders').eq(tabIndex).click();
  $(document).on('keyup', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const focusableElements = $(
        '.customTab .tabheaditems .tabHeaders .ui-tabs-anchor'
      );
      tabIndex = (tabIndex + 1) % focusableElements.length;
      focusableElements.eq(tabIndex).click();
      console.log('Clicked on item with index:', tabIndex);
    } else if (event.key === 'Enter') {
      debugger;
      $(document).keydown(function (event) {
        debugger;
        if (event.key === 'Tab') {
          debugger;
          tabIndex;
          $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
          var count = $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').length; 
          var elementTabIndex = parseInt($('.customTab .tabpanelitems .ui-tabs-panel:eq(' + tabIndex + ') div table:eq(0) .clcontrol').eq(count - 1).attr('tabindex'), 10);
          if ( elementTabIndex === count) {
           var  nextTabHeader=tabIndex+1;
                $('.customTab .tabheaditems .tabHeaders').eq(nextTabHeader).focus();
            }
            else {
                $('.customTab .tabpanelitems .ui-tabs-panel:eq(' +tabIndex +') div table:eq(0) .clcontrol').eq(tabIndex).focus();
            }
          console.log('Focused on item with index:', tabIndex);
          event.preventDefault();
        }
      });
    }
  });
});