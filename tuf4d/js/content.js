function copyToClipboard(text) {
   const input = document.createElement("textarea");
   input.style.position = "fixed";
   input.style.opacity = 0;
   input.value = text;
   document.body.appendChild(input);
   input.select();
   document.execCommand("Copy");
   document.body.removeChild(input);
};

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
   if (message === "cambridge_get_mp3_url") {
      cambridge_get_mp3_url();
   } else if (message === "jgv") {
      jgv();
   }
});

function cambridge_get_mp3_url() {
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

function jgv() {
   var
      $vocabularies = $(".kotoba tr");

   if ($vocabularies.length > 0) {
      var
         output = "",
         tab = "\t",
         endline = "\r\n";

      $vocabularies.each(function (index, element) {
         if (index > 0) {
            var
               $vocabulary = $(element),
               hiragana = $.trim($vocabulary.find(".hiragana").text()),
               kanji = $.trim($vocabulary.find(".kanji").text()),
               vietnamese = $.trim($vocabulary.find(".vietnamese").text());

            if (kanji !== "") {
               output += kanji
                  + tab
                  + hiragana
                  + tab + tab + tab
                  + vietnamese
                  + endline;
            } else {
               output += hiragana
                  + tab + tab + tab + tab
                  + vietnamese
                  + endline;
            }
         }
      });

      copyToClipboard(output);

      console.log(output);
   } else {
      console.log("NOT FOUND ANY VOCABULARY");
   }
}