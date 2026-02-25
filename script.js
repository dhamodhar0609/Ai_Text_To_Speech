const textInput=document.getElementById("text-input");
const selectVoice=document.getElementById("select-voice");
const speakBtn=document.getElementById("speak-btn");
let voices=[];
function populateVoiceList(){
voices=speechSynthesis.getVoices();
selectVoice.innerHTML='';
voices.forEach((voice)=>{
const option=document.createElement('option');
option.value=voice.name;
option.textContent=`${voice.name} (${voice.lang})`;
selectVoice.appendChild(option);
});
}
speakBtn.addEventListener("click",()=>{
const text=textInput.value;
if(!text){
alert("Please enter some text!");
return;
}
const utterance=new SpeechSynthesisUtterance(text);
const selectedVoice=voices.find((voice)=>voice.name===selectVoice.value);
if(selectedVoice){
utterance.voice=selectedVoice;
}
speechSynthesis.speak(utterance);
});
if(speechSynthesis.onvoiceschanged!==undefined){
speechSynthesis.onvoiceschanged=populateVoiceList;
}
populateVoiceList();