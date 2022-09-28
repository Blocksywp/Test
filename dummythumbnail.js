var termsForm = document.querySelector('#termsForm');
var orgName = document.querySelector('#orgName');
var orgUrl = document.querySelector('#orgUrl');
var orgEmail = document.querySelector('#orgEmail');
var generateTerms = document.querySelector('#generateTerms');
var resetFields = document.querySelector('#resetFields');
var copyTerms = document.querySelector('#copyTerms');
var outputTerms = document.querySelector('#outputTerms');
var termsNotif = document.querySelector('#termsNotif');

  var inputs = document.querySelectorAll('.widget input[type=text], .widget textarea');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.addEventListener('input', function() {
    var bg = this.value ? 'fl' : 'nfl';
    this.setAttribute('data-text', bg);
  });
}
  
/* Getting current date */
var monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dateObj = new Date();
var month = monthName[dateObj.getMonth()];
var day = dateObj.getDate();
var year = dateObj.getFullYear();

/* Adding https:// string */
orgUrl.addEventListener('blur', function() {
  var string = orgUrl.value;
  if (!~string.indexOf('https://') && string !=='') {
    string = 'https://' + string;
  }
  orgUrl.value = string;
  return orgUrl
});

function copyNotif(e){
  termsNotif.innerHTML = "<span>" + e + "</span>"

}
  
generateTerms.addEventListener('click', () => {
  var cookiesTerms = '';
  var ckieY = document.getElementById('ckieY');
  var ckieN = document.getElementById('ckieN');

  var name = orgName.value;
  var url = orgUrl.value;
  var email = orgEmail.value;
  var newdate = month + ' ' + day + ', ' + year;
  
  if(ckieY.checked) {
    console.log('You have selected Cookie - Yes');
    var cookiesTerms = `
Our FTC Disclosure is created with the help of the <i class='hljs-tag'>&lt;<i class='hljs-name'>a</i> <i class='hljs-attr'>href</i>=<i class='hljs-string'>'https://www.houseofblogger.com/DTC-disclosure-generator'</i> <i class='hljs-attr'>taget</i>=<i class='hljs-string'>'_blank'</i>&gt;</i>HOB FTC Disclosure Generator.<i class='hljs-tag'>&lt;/<i class='hljs-name'>a</i>&gt;</i>`;
  }else if(ckieN.checked) {
    console.log('You have selected Cookie - No');
    var cookiesTerms = '';
  };
  
  /* Terms */
  var terms = `<div class='pre html notranslate'>
  <pre><i class='hljs-tag'>&lt;<i class='hljs-name'>p</i> <i class='hljs-attr'>style</i>=<i class='hljs-string'>'font-family:inherit;font-size:13px;opacity:.7'</i>&gt;</i>Last updated on: ${newdate}<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>As a website owner, I’m required by law to comply with the Federal Trade Commission’s <i class='hljs-tag'>&lt;<i class='hljs-name'>a</i> <i class='hljs-attr'>href</i>=<i class='hljs-string'>'http://www.access.gpo.gov/nara/cfr/waisidx_03/16cfr255_03.html'</i> <i class='hljs-attr'>taget</i>=<i class='hljs-string'>'_blank'</i>&gt;</i>16 CFR, Part 255<i class='hljs-tag'>&lt;/<i class='hljs-name'>a</i>&gt;</i>: “Guides Concerning the Use of Endorsements and Testimonials in Advertising.” <i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>${cookiesTerms}<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>On a more personal note, I believe that being transparent with my audience is the right thing to do. That’s why I’m creating this disclosure page to let you know that I do make money from this website.<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>If you’re using this website, then you should know:<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>ul</i>&gt;</i>
  <i class='hljs-tag'>&lt;<i class='hljs-name'>li</i>&gt;</i>I get direct benefit from every post and page I put on this website. Whether that is monetary or simple joy of helping others, I’m benefiting from it.<i class='hljs-tag'>&lt;/<i class='hljs-name'>li</i>&gt;</i>
  <i class='hljs-tag'>&lt;<i class='hljs-name'>li</i>&gt;</i>If you see an external link with a prefix /refer/, or sponosor lebal, then it is an affiliate or sponsor link or post. What that means is if you click on that link and purchase a product, then at no additional cost to you, I will receive an a small referral commission.<i class='hljs-tag'>&lt;/<i class='hljs-name'>li</i>&gt;</i>
  <i class='hljs-tag'>&lt;<i class='hljs-name'>li</i>&gt;</i>I do get a lot of freebies that I test and review. Often vendors send me those freebies in exchange for a review. However that doesn’t mean that they get a positive review. If I don’t like the product, then I will slam them. That’s just the way I roll.<i class='hljs-tag'>&lt;/<i class='hljs-name'>li</i>&gt;</i>
  <i class='hljs-tag'>&lt;<i class='hljs-name'>li</i>&gt;</i>I do write about my own products and websites, so yes that means those projects get additional PR and exposure.<i class='hljs-tag'>&lt;/<i class='hljs-name'>li</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i><i class='hljs-tag'>&lt;<i class='hljs-name'>b</i>&gt;</i>It’s important that I emphasize that the words on this website are mine and are not influenced by any sort of compensation. I only recommend products or services that I use personally and/or believe will add value to my readers.<i class='hljs-tag'>&lt;/<i class='hljs-name'>b</i>&gt;</i><i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>

<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>If Have Any Issues with ${url}; regarding this disclosure we are always here to assist you by email. You can contact us through email at <i class='hljs-tag'>&lt;<i class='hljs-name'>a</i> <i class='hljs-attr'>href</i>=<i class='hljs-string'>'mailto:${email}?subject= Disclosure%20of%20re;ated%20query'</i> <i class='hljs-attr'>taget</i>=<i class='hljs-string'>'_blank'</i>&gt;</i>${email}<i class='hljs-tag'>&lt;/<i class='hljs-name'>a</i>&gt;</i>
.<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>


<i class='hljs-tag'>&lt;<i class='hljs-name'>p</i>&gt;</i>Yours Truly;<i class='hljs-tag'>&lt;<i class='hljs-name'>br</i>&gt;</i>${name}<i class='hljs-tag'>&lt;/<i class='hljs-name'>p</i>&gt;</i>
</pre>
</div>`;
  if (name == '' || url == '' || email == '') {
    copyNotif('Please fill all the required fields!');
    return false;
  }
  else if(!ckieY.checked && !ckieN.checked){
    copyNotif('Choose Yes or No!');
  }
  else {
  outputTerms.innerHTML = terms;
    var oT = outputTerms.value ? 'fl' : 'nfl';
    outputTerms.setAttribute('data-text', oT);
    copyNotif('Successfully Generated');
  }
});
  
resetFields.addEventListener('click', () => {
  if (orgName.value !== '' || orgUrl.value !== '' || orgEmail.value !== '' || outputTerms.value !== '') {
    termsForm.reset();
    outputTerms.innerHTML = '';
    copyNotif('Successfully Resetted');
  }
  else {
    copyNotif('Nothing to Reset!');
  }
});
  
copyTerms.addEventListener('click', () => {
  if (outputTerms.innerHTML != '') {
    var e=getSelection(),
        o=document.createRange();
    o.selectNodeContents(outputTerms);
    e.removeAllRanges();
    e.addRange(o);
    document.execCommand("copy");
    e.removeAllRanges();
    copyNotif('Copied to Clipboard!');
    
    document.getSelection().removeAllRanges();
  }
  else {
    copyNotif('Nothing to Copy!');
  }
});

  
