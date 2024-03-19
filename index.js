import {dataCats} from '/data.js'

const emotionsRadios = document.getElementById('emotions-radios')
const getImageBtn = document.getElementById('get-image-btn')

emotionsRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    
    for (let radio of radios){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}


function getMatchingCatsArray(){
        if(document.querySelector('input[type="radio"]:checked')){
            const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
            console.log(selectedEmotion)
        }
    }

function getEmotionsArray(cats){
    const emotionsArray = []
    
    for (let cat of cats){
        for (let emotion of cat.emotionTags)
            if (!emotionsArray.includes(emotion)) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    let radioItems = ""
    const emotions = getEmotionsArray(cats)

    for (let emotion of emotions){
        radioItems += ` <div class="radio">
                            <label for="${emotion}">${emotion}</label>
                            <input
                                type="radio"
                                id="${emotion}"
                                value="${emotion}"
                                name="emotions"
                                >
                        </div>
        ` 
    }

    emotionsRadios.innerHtml = radioItems
}

