jbuiss0n commented on Nov 7, 2014
Hello,

I faced a strange issue, when a <button> is inside an <fa-surafce>, it always raise the ngClick event, even if the button is disabled usin ng-disabled.

Here is the guilty code:

  <fa-modifier fa-size="[undefined, 40]" fa-origin="[.5, .5]" fa-align="[.5, 1]" fa-translate="[0, -30, 5]">
    <fa-modifier fa-size="[width - 2 * 20, 40]" fa-translate="[20, -50, 10]">
      <fa-surface class="capture">
        <button class="btn bg-grey-darken"
                ng-disabled="!isValid()"
                ng-click="goNextStep()" active-link>
          Click me
        </button>
      </fa-surface>
    </fa-modifier>
When isValid() returns false, button is clearly visible as disabled, but if you click on it, it still call the goNextStep() method.
Jonathan Meiss
 
jmeiss commented on Nov 7, 2014
Thanks the report @jbuiss0n.

@zackbrown it seems to be related to the fix I did. About ng-disabled but obviously, I didn't fixed the whole bug.

Thanks for your help :)
jbuiss0n
 
jbuiss0n commented on Nov 12, 2014
As i continue my investigation, i find this piece of code in famous-angular:

  window.addEventListener('touchend', function(event) {
      var currTime = _now();
      for (var i = 0; i < event.changedTouches.length; i++) {
          var touch = event.changedTouches[i];
          var startTime = potentialClicks[touch.identifier];
          if (startTime && currTime - startTime < clickThreshold) {
              var clickEvt = new window.CustomEvent('click', {
                  'bubbles': true,
                  'detail': touch
              });
              recentlyDispatched[currTime] = event;
              event.target.dispatchEvent(clickEvt);
          }
          delete potentialClicks[touch.identifier];
      }
  });
I don't know if event.target.dispatchEvent(clickEvt); should handle the disabled check, or not, the probleme may come from here ?
jbuiss0n
 
jbuiss0n commented on Nov 13, 2014
Last discovery from my investigation, if there is an ng-click attribute set for the fa-surface, the button inside will not raise it's own ng-click event (if the button is disbaled obviously). But if you remove the fa-surface ng-click event, the button will raise it's own event, event if it is disabled.
Jordan Papaleo
 Owner
jordanpapaleo commented 2 minutes ago
Hi @jbuiss0n -

Is this still a valid issue? I just created a codepen for this and I am not able to reproduce the described behavior. Maybe its already been fixed. Can you please update the pen to a state where it is failing so I can better investigate your issue?

Thanks,

Jordan
