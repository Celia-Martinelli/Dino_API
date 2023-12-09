const app = {
    dinosContainer: null,
    dinosDescContainer:null,
    
    async fetchAndShowDinos(){

        const dinosResponse = await fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs");
        console.log("01",dinosResponse);


        if (dinosResponse.ok){

            const dinosData = await dinosResponse.json();
            console.log( "1" ,dinosData);

            for (const dinoData of dinosData){
                const liDino = document.createElement('li');
                liDino.textContent = dinoData.Name;
            
                liDino.dataset.Name = dinoData.Name;

                liDino.addEventListener('click',app.handleDescDinoClick);

                app.dinosContainer.append(liDino);

            }
    }
},

async handleDescDinoClick(event){
 console.log('2click');

 const clickDinoName = event.currentTarget;
 console.log("3",clickDinoName);

 const codeDinoName = clickDinoName.dataset.Name;
 console.log("4",codeDinoName);

 const apiEndPoint = `https://dinosaur-facts-api.shultzlab.com/${codeDinoName}`;
 console.log("5",apiEndPoint);

 const descResponse = await fetch(apiEndPoint);
 console.log("6",descResponse);


 if (descResponse.ok){
    const dinosDescData = await descResponse.json();
    app.dinosDescContainer.innerHTML='';

    for(const dinoDescData of dinosDescData){
        const liDinoDesc = document.createElement('li');
        liDinoDesc.textContent = dinoDescData.Description;
        app.dinosDescContainer.append(liDinoDesc);
    }
 }



},


init(){
    console.log('Dinos App is running!');
    app.dinosContainer = document.getElementById('dinos');
    app.dinosDescContainer = document.getElementById('dino');
    app.fetchAndShowDinos();
    

}

};
document.addEventListener('DOMContentLoaded', app.init);