import {dataCats} from '/data.js'

const emotionsRadios = document.getElementById('emotions-radios')

function getEmotionsArray(cats){
    const emotionsArray = []
    
    for (let cat of cats){
        for (let emotion of cat.emotionTags)
            emotionsArray.push(emotion)
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

