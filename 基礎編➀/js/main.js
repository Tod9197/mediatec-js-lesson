console.log('JavaScript勉強中');

// alert('JavaScript勉強中!!');

// window.confirm("JavaScriptの勉強を始めます。よろしいですか？");

const stratButton = document.getElementById('startButton');

stratButton.addEventListener('click',function(){
    confirm("JavaScriptの勉強を始めます。よろしいですか？");
});