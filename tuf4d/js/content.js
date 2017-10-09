chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
   if (message === "cambridge_get_mp3_url") {
      var
         $buttons = $(".audio_play_button.uk");

      if ($buttons.length > 0) {
         var
            $button = $buttons.first(),
            mp3Src = $button.attr("data-src-mp3");

         copyToClipboard(mp3Src);

         console.log(mp3Src);
      } else {
         console.log("NOT FOUND ANY BUTTONS");
      }
   }
});

function copyToClipboard(text) {
   const input = document.createElement("input");
   input.style.position = "fixed";
   input.style.opacity = 0;
   input.value = text;
   document.body.appendChild(input);
   input.select();
   document.execCommand("Copy");
   document.body.removeChild(input);
};